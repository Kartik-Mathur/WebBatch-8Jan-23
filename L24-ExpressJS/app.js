const express = require('express')
const path = require('path');
const app = express()
const PORT = 3000;

// let publicPath = path.join(__dirname,"public");
app.use(express.static(path.join(__dirname,"public")));

// Yaha par get type ki request aati hai agar on path '/' toh what to do? Mention krna padega
// app.get(path,callback);
app.get('/',(req,res)=>{
    // console.log(req)
    res.send("Hello, How are you?");
})

app.get('/greetings',(req,res)=>{
    res.send("<h1 style='background-color: purple; color: red'>Hey, Good Day! Sir</h1>")
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

// PARAMS req: '/greet/aman'
app.get('/greet/:name',(req,res)=>{
    console.log(req.params);
    res.send(`Aur, Kyaa Haal Chaal Hai? ${req.params.name}`);
})

// Query parameters req: '/bye?name=aman&city=delhi
app.get('/bye',(req,res)=>{
    res.send(`Aur, Chalo Milte hai baad mei? ${req.query.name} from ${req.query.city}`);
})

/* We don't want to do this manually one by one
app.get('/script.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'script.js'));
})

app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'style.css'));
})
*/
// Alternative to the above part is to send all the files inside a folder to the
// browser at once

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
}); // This will start the server