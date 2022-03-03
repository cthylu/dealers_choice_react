const express = require('express');
const app = express();
const path = require('path');
const {db, seedDb, Hero, Game} = require('./db');
const port = 3000;

app.use('/client', express.static(path.join(__dirname, '.', 'client')));

app.get('/api/heroes', async(req, res, next) => {
    try {
        res.send(await Hero.findAll());
    } catch(err) {
        next(err);
    }
})

app.get('/', async(req, res, next) => {
    res.sendFile(path.join(__dirname, '.', 'client', 'index.html'));
});

async function start() {
    try {
        await db.authenticate();
        await seedDb(); 
        app.listen(port, function() {
            console.log(`Listening on port ${port}!`);
        })
    } catch(err) {
        console.log(err);
    }
}

start();