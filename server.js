var express = require("express");
var app = express();
var os = require('os');
require("dotenv/config");

app.get('/', (req, res) => {
    res.json({
        ipaddress: os.networkInterfaces()['Wi-Fi'][0].address,
        language: req.headers["accept-language"],
        software: req.headers['user-agent']
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
})