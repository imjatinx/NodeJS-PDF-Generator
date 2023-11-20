const express = require("express");
const cors = require('cors');

const pdfGenerator = require("./routes/pdfGenerator")
const bodyParser = require('body-parser')
require("dotenv").config()

const app = express();

app.use(bodyParser.json())

app.use(cors({
   origin: ['https://wrirk-quotation2.netlify.app', 'http://localhost:3000', 'https://quotation-test.netlify.app'],
   methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));


app.use("/", pdfGenerator)

app.listen(process.env.PORT, () => {
   console.log("server is running...");
});


