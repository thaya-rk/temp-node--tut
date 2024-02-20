
//POST method in FetchAPI

const joke1= {
  id: 'Im31ozkVnjb',
  joke: 'A boy dug three holes in the yard. When his mother saw, she exclaimed: "well, well, well"'
}

const postjoke = async (anyjoke)=>{
    const response = await fetch("https://httpbin.org/post",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(anyjoke)
    })
    const responseData = await response.json()
    console.log(responseData.data)
}
postjoke(joke1)