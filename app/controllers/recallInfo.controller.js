const db = require("../models/index.js");
const RecallInfo = db.RecallInfo;
const Op = db.Sequelize.Op; // not sure if necessary?

db.sequelize.sync()
