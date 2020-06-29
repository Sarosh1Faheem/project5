// console.log('Hello,World')

// async function fetchAPI(){
//     const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(api, 'API')
//     const json = await api.json()
//     console.log(json, 'JSON')
// }
// fetchAPI()


// async function getAPI(){
//     const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(api, 'API')
//     const json = await api.json()
//     console.log(json, 'JSON')
// }
// getAPI()


//postAPI

async function postAPI(){
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'BootCamp',
            body: 'Javascript',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    console.log(api, 'API')
    const json = await api.json()
    console.log(json, 'JSON')
}

postAPI()