const request=require('request')
// request({url:url},(error,response)=>{
// const a=JSON.parse(response.body)
//     console.log(a)

// })
// const urlgeo="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibml0aXNoMTUiLCJhIjoiY2t1bTV4eXYwMGJhejJwcDFwOGtuMWFueiJ9.nGlxwqiHUFNMBOn_Bp1EKA"
// request({url:urlgeo,json:true},(error,response)=>{
// console.log(response.body)

// })


const forcast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=0f6bcf155355ebe6340394c868a675cb&query='+latitude+','+longitude

request({url:url,json:true},(error,response)=>{
   if(error){
       callback("network error",undefined)
   }
    else if(response.body.error)
    {
        callback(" data entered incorrectly",undefined)
    }else {
           callback(undefined,"right now the temperature is "+response.body.current.temperature)}
    })
}
    module.exports=forcast 
// forcast(22.877300,84.137200,(error,data)=>{
//     console.log('error=',error)

// console.log('data=',data)
// })
