const path = require("path");
const experss = require("express");

const router = experss.Router();

const rootDir = require("../utils/path");

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from Express!</h1>");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
