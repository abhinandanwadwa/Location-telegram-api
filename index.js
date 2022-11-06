const express = require('express');
const cors = require('cors');
const { Telegraf } = require('telegraf');
const dotenv = require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
var geocoder = require('local-reverse-geocoder');

const app = express();
const PORT = process.env.PORT || 8181;

app.use(express.json());
app.use(cors());

app.post('/:lati/:longi', (req, res) => {
    // // const { location } = req.body;
    // console.log(bot);
    // // bot.start((ctx) => ctx.reply('Welcome'));
    // bot.telegram.sendMessage();
    // bot.launch();
    // process.once('SIGINT', () => bot.stop('SIGINT'));
    // process.once('SIGTERM', () => bot.stop('SIGTERM'));


    let apiToken = process.env.BOT_TOKEN;
    let chatId = "-895706484";
    // var point = { latitude: req.params.lati.toString(), longitude: req.params.longi.toString() };
    // var locationArray = [];
    // geocoder.lookUp(point, function (err, res) {
    //     locationArray = JSON.stringify(res, null, 2);
    //     const locationObject = locationArray;
    //     // console.log(locationObject);
    //     locationObject.map((element) => {
    //         console.log(element);
    //     })
    // });
    // const exactLocation = 
    // console.log(req.params.lati);
    let text = `Help Needed! Location => https://www.google.com/maps?q=${req.params.lati},${req.params.longi}`;

    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

    // let request = new XMLHttpRequest();
    xhr.open("GET", urlString);
    xhr.send();

    let response = xhr.response;

    res.json(response);


});

app.listen(PORT, () => {
    console.log(`The App is running at http://localhost:${PORT}`);
});