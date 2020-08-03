const mongoose = require('mongoose');
const {Schema} = mongoose;

const gamesSchema = new Schema({
    titulo: {type: String},
    plataforma: {type: String},
    precio: {type: Number},
    tipo: {type: String},
    descripcion: {type: String},
});

//Module creation
module.exports = mongoose.model('games', gamesSchema);