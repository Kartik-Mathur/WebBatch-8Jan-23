const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000"
}));

app.get('/',(req,res)=>{
    res.send('Hi from backend app');
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});