bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password, profile_pic } = req.body;
    // let profile_pic = `https://robohash.org/${username}.png`;
    const db = req.app.get("db");

    const [userExists] = await db.user.find_user_by_username({ username });
    if (userExists) {
      return res.status(400).send("This username already exists.");
    }

    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);

    const [newUser] = await db.user.create_user({
      username,
      hash,
      profile_pic,
    });

    req.session.user = newUser;
    res.status(201).send(req.session.user);
    console.log(req.session.user);
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    const [userExists] = await db.user.find_user_by_username({ username });
    if (!userExists) {
      return res.status(404).send("Username not found");
    }

    const verifyCredentials = bcrypt.compareSync(password, userExists.password);
    if (!verifyCredentials) {
      return res.status(401).send("Password is incorrect.");
    }

    delete userExists.password;
    req.session.user = userExists;
    res.status(202).send(req.session.user);
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  getUser: (req, res) => {
    userExists = req.session.user;
    if (userExists) {
      return res.status(202).send(req.session.user);
    } else {
      return res.status(404).send("User not found");
    }
  },
};
