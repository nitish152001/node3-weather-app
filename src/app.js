const express=require('express')
const geocode = require('./utils/geo')
const forecast = require('./utils/forecast')
const hbs=require('hbs')
const path=require('path')
const viewpath=path.join(__dirname,'../templates/views')
const Partialspath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(Partialspath)
const app=express()
const port=process.env.PORT||3000
app.set('views',viewpath)
app.set('view engine','hbs')

const address=path.join(__dirname,'../public')
app.use(express.static(address))
// app.get('',(req,res)=>{
//     res.send('index page')
// })
// app.get('/about',(req,res)=>{
//     res.send('anout page')
// })
//  app.get('/help',(req,res)=>{
//     res.send('help page')
// })
//  app.get('/home',(req,res)=>{
//     res.send('home page')
// })


app.get('',(req,res)=>{
    res.render('index',{
        topic:'WEATHER',
        name:'nitish'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        topic:'about page',
        name:'nitish'
    })
})
 app.get('/help',(req,res)=>{
    res.render('help',{
        topic:' help page ',
        name:'nitish'
    })
})
 app.get('/home',(req,res)=>{
    res.render('home',{
        topic:' home page',
        name:'nitish'
})


})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
    return res.send({
        error:'u havent searched anything'
    })
}
     geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
         if(error){
         return res.send({error})
         }
         forecast(latitude,longitude,(error,data)=>{
             if(error){
             return res.send({error})
             }
             res.send({
             forcast:data,
             location,
             address:req.query.address
            })
         })
     })

})


app.get('/help/*',(req,res)=>{
    res.render('404',{
        topic:'help page not 404',
        name:'nitish'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        topic:'error 404',
        name:'nitish'
    })
})





app.listen(port,()=>{
    console.log('local host 3000')
})