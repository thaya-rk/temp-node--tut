// Creating a Call Back Function

const Todos =(resource,callback)=>{
    const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    if(request.readyState === 4 && request.status==200){
        const data = JSON.parse(request.responseText)
    callback(undefined,data);
    } else if(request.readyState === 4){
    callback("Could not fetch data",undefined)
    }
});

request.open("GET",resource);
request.send();

};
// Call back Hell Function

Todos("todos/Async.json",(err,data)=>{
    console.log(data);
    Todos('todos/Async2.json',(err,data)=> {
        console.log(data);
        Todos('todos/Async3.json',(err,data)=>console.log(data))
    })
});
