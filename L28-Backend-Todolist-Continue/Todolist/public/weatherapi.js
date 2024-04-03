// function getData(cityName) {
//     let apiKey = '64ba9fb697450c0b51c4eab0bb3fe05c';
//     let geoCodingApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
//     return new Promise((resolve, reject) => {
//         axios.get(geoCodingApi).then(({ data }) => {
//             data = data[0];
//             const { lat, lon } = data;
//             console.log(lat, lon);
//             axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
//                 .then(({ data }) => {
//                     resolve(data);
//                 })
//                 .catch(err => {
//                     reject(err)
//                 })
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }

function getData(cityName) {
    let apiKey = '64ba9fb697450c0b51c4eab0bb3fe05c';
    let geoCodingApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    return new Promise(async (resolve, reject) => {
        try{
            let {data} = await axios.get(geoCodingApi);
            data = data[0];
            const { lat, lon } = data;
            let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
            console.log(res.data);
        }
        catch(err){
            alert(err)
        }   
    })
}

getData("Uganda")
    .then((data)=>{
        console.log(data)
    })
