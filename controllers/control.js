const contacts = require("./contacts.js");

const getContactsController = (req, res) => {
  return res.send({
    data: contacts,
  });
};
const postContactsController = (req, res) => {
  contacts.push({
    id: 4,
    title: "this is contact 4",
    isPublic: false,
  });
  return res.send({
    name: contacts,
  });
};
module.exports = {
  getContactsController,
  postContactsController,
};
