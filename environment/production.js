const path = require("path");

module.exports = {
  dbUrl:
    "mongodb+srv://alex:qwe@cluster0.ihmgk.mongodb.net/twitter?retryWrites=true&w=majority",
  cert: path.join(__dirname, ""),
  key: path.join(__dirname, ""),
  portHttp: 80,
  portHttps: 443,
};
