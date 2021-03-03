bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const profile_pic = `https://robohash.org/${username}.png`;
    const db = req.app.get("db");

    const userExists = await db.user.find_user_by_username({ username });
    if (userExists) {
      return req.status(400).send("This username already exists.");
    } else {
      let salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const [newUser] = await db.user.create_user({
        username,
        password,
        profile_pic,
      });

      req.session.user = newUser;
      res.status(201).send(req.session.user);
    }
  },
};
