const mongoose = require("mongoose");
// const env = require(`../environment/${process.env.NODE_ENV}`);
const env = require("../environment/development");

exports.clientPromise = mongoose
  .connect(env.dbUrl, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connexion db ok"))
  .catch((err) => console.log(err));
