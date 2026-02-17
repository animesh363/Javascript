const url = "https://jsonplaceholder.typicode.com/users"; //API link

async function fetchData(){
    const response = await fetch(url)
    const result = await response.json()
    console.log(result);

}

fetchData()