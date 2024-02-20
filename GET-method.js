//GET method in FetchAPI

//Example1
const getdadjoke = async() =>{
    const response = await fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            Accept:"text/plain"
        }
    })
    const jsonjoke =await response.text()
    console.log(jsonjoke)
}
getdadjoke()



//Example2
// const myuser = {
//     userlist : []
// }

// const users = async () =>{
//     const response =await fetch("https://jsonplaceholder.typicode.com/users")
//     const userData= await response.json();
//     console.log(userData)
//     return userData
// }

// const anofunc= async() =>{
//     const data = await users()
//     myuser.userlist=data;
//     console.log(myuser);
// }
// anofunc()










// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {return response.json()
// }).then(users =>{
//     return users

// }).then(userdet =>{
//     // console.log(`User's phone number: ${userdet[0].company.name}`)
//     return userdet
// }).then(alluser =>{
//     alluser.forEach(user =>{
//         console.log(user)
//     })
// })
