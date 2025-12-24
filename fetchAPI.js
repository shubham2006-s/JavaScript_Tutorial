// get request

let p = fetch("https://goweather.xyz/weather/surat") 
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value)=>{
    console.log(value)
})

// post request

let a = {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 11,
  })
}
fetch('https://jsonplaceholder.typicode.com/posts', a)
  .then((response) => response.json())
  .then((json) => console.log(json));

// async-await method

const createtodo = async () => {
  let a = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 11,
    })
  }
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', a)
  let response = await p.json()
  return response
}
createtodo().then((value)=>{  // this is work together
  console.log(value)
})

 // get request

const getTodo = async (id)=>{
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
  let r = await response.json()
  return r
}

const mainfunc = async () => {  // this is work also together
  let todo = await createtodo()
  console.log(todo)
  //console.log(await getTodo(1))
}
mainfunc()
