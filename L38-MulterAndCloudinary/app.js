const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
require('dotenv').config()
const cloudinary = require('cloudinary');
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        let extensionName = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extensionName);
    }
})

const upload = multer({storage});

const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// const buffer = fs.readFileSync('./hello');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'public')));
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    // let IMG_URI = parser.format(path.extname(req.file.originalname), req.file.buffer);
    // console.log(IMG_URI);
    cloudinary.v2.uploader.upload(path.join(__dirname,req.file.path), (error, result) => {
        console.log(result, error);
        res.send(result);
    });
    // res.redirect('/');
    
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});