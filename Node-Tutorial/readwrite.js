const {readFile,writeFile}= require('fs').promises;
const util = require('util')

const start = async() =>{
    try{
        // Reading a File
        const first = await readFile('./first.txt','utf8');
        const second =await readFile('./second.txt','utf8');

        // Writing a File
        await writeFile('./resultfile.txt',
        `The result is : ${first}, ${second}`)

        console.log(first, second)
    }catch(error){
        console.log(error)
    }
}
start()