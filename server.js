const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

// body parser
app.use(express.json());

mongoose
  .connect(config.get("mongodburl"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("mongodb connected ...");
  })
  .catch(err => console.log(err));

//     , (err, client) => {
//     assert.equal(err, null, 'data base connexion failed')
//     const db = client.db(dataBase)

//     app.post("/addContact", (req, res) => {
//         let newContact = req.body
//         db.collection("Contact-list").insertOne(newContact, (err, data) => {
//             if (err) res.send("cant not add new contact")
//             else res.send("new contact added")
//         })
//     })

//     app.get("/contacts", (req, res) => {
//         db.collection("Contact-list").find().toArray((err, data) => {
//             if (err) res.send('cant not get contacts list')
//             else res.send(data)
//         })
//     })

//     app.get("/contact/:id", (req, res) => {
//         db.collection('Contact-list').findOne({ _id: ObjectID(req.params.id) }).then(data => res.send(data))
//             .catch(err => res.send("cant not get contact"))
//     })

//     app.delete('/deleteContact/:id', (req, res) => {
//         let ContactRemoved = ObjectID(req.params.id)
//         db.collection('Contact-list').findOneAndDelete({ _id: ContactRemoved }, (err, data) => {
//             if (err) res.send('cant delete the contact')
//             else res.send("contact was deleted")
//         })
//     })

//     app.put("/modifyContact/:id", (req, res) => {
//         let id = ObjectID(req.params.id)
//         let ModifiedContact = req.body
//         db.collection("Contact-list").findOneAndUpdate({ _id: id }, { $set: { ...ModifiedContact } }, (err, data) => {
//             if (err) res.send('cant modify contact')
//             else res.send('contact was modified')
//         })
//     })

// })

app.use("/contact", require("./route/contact"));

const port = process.env.PORT || 4000;

app.listen(port, err => {
  if (err) console.log("server is not running");
  else console.log(`server is running on port ${port}`);
});
