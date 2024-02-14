// require("./bomb-grenade")
const os=require('os')
const path =require("path")
const name=require("./one")

const user=os.userInfo()
console.log(user)
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)


const testpath= path.join('/content','subfolder','test.txt')
console.log(testpath)


const base=path.basename(testpath)
console.log(base)

const abs=path.resolve(__dirname,'test.txt')
console.log(abs)

console.log(name.adam);