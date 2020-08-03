const express = require('express');
const gamesControllers = require('../controllers/game.controllers');
const router = express.Router();

//Creating routes
router.get('/games', gamesControllers.getGames);
router.post('/save', gamesControllers.createGame);
router.get('/games/:id', gamesControllers.getGame);
router.put('/games/:id', gamesControllers.editGame);
router.delete('/games/:id', gamesControllers.deleteGame);

//Module creation
module.exports = router;