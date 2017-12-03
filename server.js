var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var useragent = require("express-useragent");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

app.get('/', (req, res) => {
    res.json({
        ipaddress: req.ip, //when using localhost, ip will return ::1
        language: req.acceptsLanguages()[0],
        software: `${req.useragent.os}; ${req.useragent.browser}`
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
})