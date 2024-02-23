const EventEmmitter = require('events');
const customEmitter = new EventEmmitter()

//.on used to add a listener function
customEmitter.on('response',(name)=>{
    console.log(`Hello ${name}`)
})

customEmitter.on('response',(age)=>{
    console.log(`Age is ${age}`)
})

//.emit is used to trigger the listener 
customEmitter.emit('response','Thaya',);
customEmitter.emit('response',22,);