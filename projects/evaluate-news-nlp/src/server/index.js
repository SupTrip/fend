projectData = {};

const dotenv = require('dotenv');
dotenv.config();
console.log(`Your aylienapi API key is ${process.env.API_KEY}`);
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi");
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
const bodyParser = require('body-parser');
const cors = require('cors');


let envn = process.env.NODE_ENV;
const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
   //res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/api', async (req, res) => {
    const  formText  = req.body.url;
    console.log(formText);
    
    try {
        console.log("Sending request");
        textapi.sentiment({'url': formText }, 
          function(error, response) {
          if (error === null) {
            console.log(response);
            res.send(response);
        }
      });
      
    } catch(error) {
      console.log(error);
    }
  })