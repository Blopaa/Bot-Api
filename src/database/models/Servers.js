const { Schema, model } = require('mongoose');

const serverSchema = new Schema({
  serverID: {
    type: String,
    required: true,
  },
  name: String,
  bot: {
    prefix: String,
    primaryColor: {
      type: String,
    },
  },
  channels: {
    sugerencias: String,
    bienvenidas: String,
    advertisments: String,
  },
  roles: {
    warning: String,
    admin: String,
    invitado: String,
    everyone: String,
    verificated: String,
  },
  categories: {
    SOPORTE: String,
  },
});

module.exports = model('Server', serverSchema);
