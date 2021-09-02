const express = require('express');
// fix  is this right?
const tennisPlayersArray = require('./modules/players');
const tournamentsArray = require('./modules/tournaments');
const winnersArray = require('./modules/winners');

const app = express();
const PORT = 5000;

// app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.get('/players', (req, res) => {
    // fix console.log('no players array');
    // fix console.log(tennisPlayersArray);
    res.send(tennisPlayersArray);
});

app.get('/tournaments', (req, res) => {
    res.send(tournamentsArray);
});

app.post('/players', (req, res) => {
    // tennisPlayersArray.push(req.body);
    const playerToAdd = req.body;
    tennisPlayersArray.push(playerToAdd);
    res.send('Player Added');
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});