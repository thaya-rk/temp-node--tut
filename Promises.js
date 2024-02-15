const Todos =(resource,callback)=>{

    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status==200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            
            } else if(request.readyState === 4){
                reject("Some error occurred")
            }
        });
        
        request.open("GET",resource);
        request.send();
    });
    };
Todos('todos/Async.json').then(data =>{
    console.log("Promise 1 resolved: ",data)
    return Todos('todos/Async2.json');            //return todos2 when todos1 resolved
    }).then(data => {
    console.log("Promise 2 resolved; ",data);
    return Todos('todos/Async3.json');           //return todos3 when todos2 resolved
    }).then(data =>{
    console.log('Promise 3 resolved: ',data);
}).catch((err)=>{                                  //return catch when any error occured
    console.log('Promise Rejected:',err)
});






