let express = require("express");
const app = express();
const port = 8000;
app.listen(port, () => console.log("Server listening port `${port}`"));
const {
  getContactsController,
  postContactsController,
} = require("./controllers/control.js");

app.get("/contacts", getContactsController);
app.post("/contacts", postContactsController);
// app.delete()
// app.put()
