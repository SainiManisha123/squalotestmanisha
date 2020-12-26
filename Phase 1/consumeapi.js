const request=require('request')

const url='https://jsonplaceholder.typicode.com/users/'

request({ url: url, json:true},(error,response)=>{
   var data = response.body
   console.log(data) 
})
