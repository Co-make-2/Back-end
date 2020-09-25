const jwt = require("jsonwebtoken");
const db = require("../data/dbConfig")

function validateUserId() {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await db("users").where({ id }).first();

      if (!user) {
        return res.status(404).json({ mesage: "User not found" });
      }
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      return res.status(404).json({ mesage: "User not found" });
    }
  };
}

function validateUserProfile() {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await db("user-profiles").where({ userId: id }).first();

      if (!user) {
        return res.status(404).json({ mesage: "User not found" });
      }
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      return res.status(404).json({ mesage: "User not found" });
    }
  };
}

async function restrict(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "no token!" });
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET || "it can't rain all the time",
      (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "invalid token" });
        }
        req.token = decoded;
        next();
      }
    );
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "You shall not pass!!" });
  }
}

module.exports = {
  validateUserId,
  validateUserProfile,
  restrict,
};
