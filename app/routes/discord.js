const express = require('express');
const router = express.Router();
const discordApp = require('../discordApp');

router.get('/', (req, res, next) => {
    console.log('Get Discord Page');
    res.render('discord');
});

router.get('/send', (req, res, next) => {
    res.render('discord_send');
})


router.post('/send/post', (req, res, next) => { 
    console.log(req.body);
    discordApp.sendMessage(req.body.message);
    res.redirect('http://127.0.0.1:8080/discord');
});

module.exports = router;