
const fetchDataFromApi = async () => {
    let api = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await api.json(); 
    console.log(data);
}

fetchDataFromApi();