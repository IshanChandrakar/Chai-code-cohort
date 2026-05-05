// console.log("hi");
// const data = fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5')
// data.finally(()=>console.log("promise completted"))
// data.then((res)=> console.log('data aa gaya'))
// data.catch(()=>console.log('promise reject ho gaya'))
// console.log("bye")

fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5")
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        const products = obj.data.data.length;
        console.log(products);
    })
    .catch((err) => {
        console.log("error getting the data", err);
    })
    .finally(() => {
        console.log("Promise completed!");
    });
