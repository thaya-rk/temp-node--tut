
//Asynchronous function,await is used to wait for the promise to be resolved and stores the data to its declared variable
//The await keyword can only be used inside an async function.
const todos = async()=>{
    const response = await fetch('todos/Async.json');

    if(response.status !== 200){
        throw new Error("cannot find the data")
    }

    const data = await response.json();

    return data;
};

//Non-Blocking code 
todos()
    .then(data=>console.log("Resolved:",data))
    .catch(err => console.log("Rejected:", err.message));