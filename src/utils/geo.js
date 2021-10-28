const request=require('request')

const getcode=(na,callback)=>{
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+na+'.json?limit=2&access_token=pk.eyJ1Ijoibml0aXNoMTUiLCJhIjoiY2t1bTV4eXYwMGJhejJwcDFwOGtuMWFueiJ9.nGlxwqiHUFNMBOn_Bp1EKA'
request({url:url,json:true},(error,response)=>{
if(error)
{
    callback('data not connected',undefined)
 }else if(response.body.features.length===0)
 {
     callback('no place found',undefined)
 }else
 {
     const data={
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location:response.body.query[0]
     }
     callback(undefined,data)
 }
})
}
module.exports=getcode
// getcode('nitish987',(error,data)=>{
//     console.log('error=',error)
//     console.log('data=',data)
   
// })
