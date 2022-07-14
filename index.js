const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database Connected Successfully'))
.catch((err) => console.error(err+'Database Connection Failed'));

app.get("/",(req, res)=>{
    res.send("Welcome to Codeish Server");
});

const user = require('./routers/user/user');
const creator = require('./routers/creator/creator');
const article = require('./routers/article/article');
const category = require('./routers/category-subject/category');
const subject = require('./routers/category-subject/subject');
const bookmark = require('./routers/bookmark/bookmark');
const like = require('./routers/like/like');
const feedback = require('./routers/feedback/feedback');

app.use('/', user);
app.use('/', creator);
app.use('/', article);
app.use('/', category);
app.use('/', subject);
app.use('/', bookmark);
app.use('/', like);
app.use('/', feedback);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("server is running on port "+PORT));
