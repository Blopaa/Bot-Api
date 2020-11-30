const ServerCtrl = {};
const Server = require('../database/models/Servers');

ServerCtrl.getServers = async (req, res) => {
  const servers = await Server.find();
  res.json(servers);
};

ServerCtrl.createServer = async (req, res) => {
  const { serverID, name, bot, channels, roles, categories } = req.body;
  const newServer = new Server({
    serverID: serverID,
    name: name,
    bot: {
      prefix: bot.prefix,
      primaryColor: bot.primaryColor,
    },
    channels: {
      sugerencias: channels.sugerencias,
      bienvenidas: channels.bienvenidas,
      advertisments: channels.advertisments,
    },
    roles: {
      warning: roles.warning,
      admin: roles.admin,
      invitado: roles.invitado,
      everyone: roles.everyone,
      verificated: roles.verificated,
    },
    categories: {
      SOPORTE: categories.SOPORTE,
    },
  });

  await newServer.save();
  res.json({ message: 'server created' });
};

ServerCtrl.findServer = async (req, res) => {
  const server = await Server.find({ serverID: req.params.serverID });
  res.json(server);
};

ServerCtrl.deleteServer = async (req, res) => {
  await Server.findOneAndDelete({
    serverID: req.params.serverID,
  });
  res.json({ message: 'server deleted' });
};

ServerCtrl.updateServer = async (req, res) => {
  const { serverID, name, bot, channels, roles, categories } = req.body;
  await Server.findOneAndUpdate(
    { serverID: req.params.serverID },
    { serverID, name, bot, channels, roles, categories }
  );
  res.json({ message: 'server updated' });
};

module.exports = ServerCtrl;
