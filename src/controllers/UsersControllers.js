const UserCtrl = {}

const User = require("../database/models/Users");

UserCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

UserCtrl.createUser = async (req, res) => {
    const {user, IDuser} = req.body
    const newUser = new User({
        user: {
            name: user.name
        },
        IDuser: IDuser
    })

    await newUser.save()
    await res.json(newUser)
}

UserCtrl.findUser = async (req, res) => {
    const user = await User.findOne({ IDuser: req.params.IDuser });
    res.json(user);
  };
  

UserCtrl.updateUser = async(req, res) => {
    const {user} = req.body
    await User.findOneAndUpdate({IDuser: req.params.IDuser}, {user})
    res.json({message: "User updated"})
}

UserCtrl.deleteUser = async(req, res) => {
    const user = await User.findOneAndDelete({IDuser: req.params.IDuser})
    res.json({message: "User Deleted"})
}

module.exports = UserCtrl