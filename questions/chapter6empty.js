
const sleep = ms => new Promise(r => setTimeout (r, ms));
    

async function printHelloworld () {
    await sleep(2000)
    console.log("hello world");
} 
// printHelloworld()


async function fetchData ()  {
    try {
        
        const res = await fetch("www.url.com")

    } catch (error) {
        console.log("error fetching Data") 
    }

}
// fetchData()



async function fetchUserData ()  {
    try {
        
        const res = await fetch('https://the-one-api.dev/v2/book')
        const data = await res.json()
                console.log(data)
    } catch (error) {
        console.log("error fetching Data") 
    }
}
// fetchUserData()



async function PostUserData ()  {
    try {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

                
            }, 
            body: JSON.stringify ({name: 'james'})
        }
        const res = await fetch('https://the-one-api.dev/v2/book', options)
    } catch (error) {
        console.log("error fetching Data") 

    }
    }
