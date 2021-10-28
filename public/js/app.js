console.log('nitish')

const form=document.querySelector('form')
const input=document.querySelector('input')

const messsage1=document.querySelector('#message-1')
const messsage2=document.querySelector('#message-2')
form.addEventListener('submit',(e)=>{
e.preventDefault()
const location=input.value
messsage1.textContent='loding...'
messsage2.textContent=''
fetch('/weather?address='+location).then((respose)=>{
respose.json().then((data)=>{

    if(data.error){
        messsage1.textContent=data.error
    }
       else
    {
        messsage1.textContent=data.location
        messsage2.textContent=data.forcast
    }  
    
    
})

})

})




