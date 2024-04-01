console.log("Hello");


function sendReq(){
    axios.post('/submit-form',{
        username: 'Kartik',
        password: 'kartik'
    })
    .then(({data})=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err);
    })
}

sendReq();