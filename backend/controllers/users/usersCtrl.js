const User = require("../../model/user/User");

//---------------------------------------------
// Register
//---------------------------------------------
const userRegisterCtrl = async (req, res) => {
  try {
    //Register user
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

//Export the function to another archive.
module.exports = { userRegisterCtrl };
