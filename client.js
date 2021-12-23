const ts = require("typesense");
const setting = require("./setting");

const client = new ts.Client(setting);

module.exports = client;
