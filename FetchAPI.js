
//Using FetchAPI to get endpoints easily

fetch('todos/Async.json').then((response)=>{
    console.log('resolved',response);
    return response.json();
}).then(data =>{
    console.log(data);
}).catch((err) =>{
    console.log("Rejected",err)
})