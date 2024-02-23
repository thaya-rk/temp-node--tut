const {createReadStream}=require('fs');
const stream =createReadStream('./first.txt')

//convert file data to buffer
stream.on('data',(result)=>{
    console.log(result)
})