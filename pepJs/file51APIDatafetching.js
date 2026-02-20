const url = "http://localhost:8080/"; //API link

async function fetchData(){
    const response = await fetch(url)
    const result = await response.json()
    console.log(result);

}

fetchData()