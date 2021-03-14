var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv').config();
const fetch = require('node-fetch')
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log(`Example app listening on port 8080! API_KEY = ${process.env.API_KEY}`)
})

app.get('/test', function (req, resp) {
    console.log(req.query.txt)
    fetch(BuildURL(req.query.txt))
        .then(res => {
            return res.json();
        })
        .then(myres => {
            resp.send(myres)
        })
        .catch(error => {
            console.log("error",error)
        })
})

function BuildURL(text) {
    let baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
    let lang = "lang=en";
    let article = `url=${text}`;
    let key = `key=${process.env.API_KEY}`;
    let URL = baseURL + lang + "&" + article + "&" + key;
    console.log(URL)
    return URL;
}
