const Game = require('../models/game.models');
const gameControllers = {
    //CRUD Methods
        //Get students method
    getGames: async (req, res)=>{
        Game.find((err,foundGame) =>{
            if (err){
                return res.status(500).send({message: "There's been an error in the process"})
            }
            else {
                if (!foundGame){
                    return res.status(500).send({message: "Error: Data not found"})
                }
                else {
                    return res.status(200).send(
                    {   message: "",
                        statusCode: 200,
                        games: foundGame
                    })
                }
            }
        })
    },
        //Create student method
    createGame: (req, res)=>{
        var gameData = req.body;
        var newGame = new Game(gameData);
        newGame.save((err, gameStore)=>{
            if (err){res.status(500).send({message: "There's been an error in the saving process"})};
            if (!gameStore){res.status(404).send({message: "Error: The student data is not valid"})};
            res.status(200).send({message: `Game ${newGame.titulo} has been saved correctly`, 
            statusCode: 200, 
            gameStore: gameStore});
        })    
    },

        //Get student method
    getGame: async (req, res)=>{
        const {id} = req.params;
        const game = await Game.findById(id);
        res.send({
            message: "Bingo!",
            statusCode: 200,
            game: game
        });
    },

        //Edit student method
    editGame: async (req, res)=>{
        const {id} = req.params;
        var gameData = req.body;
        const game =  {
            titulo: gameData.titulo,
            plataforma: gameData.plataforma,
            precio: gameData.precio,
            tipo: gameData.tipo,
            descripcion: gameData.descripcion
        }
        await Game.findByIdAndUpdate(id, {$set: game}, {new: true});
        res.send({
            message: `${game.titulo} has been updated correctly`,
            statusCode: 200,
            updateGame: game
        });
    },

        //Delete student method
    deleteGame: async (req, res)=>{
        const {id} = req.params;
        await Game.findByIdAndRemove(id);
        res.send(
            {   message: `Game deleted`,
                statusCode: 200,
            });
    }
};

//Module creation
module.exports = gameControllers;