const {readFileSync,writeFileSync, writeFile}=require('fs')

const john ='john';
const adam= 'adam';

module.exports={john,adam}

const first = readFileSync("./filesync/first.txt","utf-8")
const second = readFileSync("./filesync/second.txt","utf-8")

console.log(first,second);

writeFileSync(
    "./filesync/result.txt",
    `the result will be : ${first},${second}`,
    {flag:'a'}
)

readFile("./filesync/first.txt",'utf-8',(err,result)) =>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    readFile("./filesync/second.txt",'utf-8',(err,result)) =>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile(
            './filesync/result-async.txt',
            `Here is the result  of async operation: \n ${first}\n ${second}`,
            (err,result)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    console.log(result)

            }

        )

}}
