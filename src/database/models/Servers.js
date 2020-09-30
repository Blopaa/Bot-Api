const { strict } = require('assert')
const {Schema, model} = require('mongoose')

const serverSchema = new Schema({
    serverID: {
        type: String,
        required: true
    },
    name: String,
    bot: {
        prefix: String,
        color: {
            primary: {
                type: String,
                default: "#ffffff"
            }
        }
    },
    channels: {
        sugerencias: String,
        bienvenidas: String,
        advertisments: String
    },
    roles: {
        warning: String,
        admin: String,
        invitado: String,
        everyone: String
    },
    categories:{
        SOPORTE: String
    }
})

module.exports = model('Server', serverSchema)