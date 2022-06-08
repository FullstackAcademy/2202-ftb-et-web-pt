const apiRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const { getUserByUsername } = require("../db");
const { JWT_SECRET } = process.env;

// Auth the User, create a user object on req
apiRouter.use(async (req, res, next) => {
  const auth = req.header("Authorization");

// Skip if req doesn't have an "Auth" in headers
  if (!auth) {
    // nothing to see here
    next();
  } else if (auth.startsWith("Bearer ")) {
    //  If this is a Bearer token, grab just the token part
    const token = auth.slice("Bearer ".length);

    try {
    //  Break down the JWT to get the user info
      const { id, username } = jwt.verify(token, JWT_SECRET);
// If that worked, add a user key to req and move along
      if (id) {
        const userFromToken = await getUserByUsername(username);
        req.user = userFromToken
        next();
      } else {
// ELSE => Throw an Error
        next({
          name: "AuthorizationHeaderError",
          message: "Authorization token malformed",
        });
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${"Bearer "}`,
    });
  }
});




// api/pokemon OR api/users
apiRouter.use("/pokemon", require("./pokemon"));
apiRouter.use("/users", require("./users"));

module.exports = apiRouter;
