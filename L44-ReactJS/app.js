const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});