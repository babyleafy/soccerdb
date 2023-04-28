const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();
app.use(cors({
  origin: '*',
}));

// We use express to define our various API endpoints and
// provide their handlers that we implemented in routes.js
app.get('/players', routes.players);
app.get('/player_id/:player_id', routes.player_id);
app.get('/player_name/:player_name', routes.player_name);
app.get('/clubs', routes.clubs);
app.get('/club_id/:club_id', routes.club_id);
app.get('/club_name/:club_name', routes.club_name);
app.get('/top_clubs/:orderBy', routes.top_clubs);
app.get('/player_goals/:player_id', routes.player_goals);

app.listen(config.server_port, () => {
  console.log(`Server running at http://${config.server_host}:${config.server_port}/`)
});


module.exports = app;
