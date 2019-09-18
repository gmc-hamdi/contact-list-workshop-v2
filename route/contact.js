const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");

router.get("/", (req, res) => {
  Contact.find()
    .then(contacts => res.send(contacts))
    .catch(err => res.send("cannot get"));
});
router.get("/:id", (req, res) => {
  Contact.findOne(req.param.id)
    .then(contacts => res.send(contacts))
    .catch(err => res.send("cannot get"));
});
router.delete("/:id", (req, res) => {
  Contact.findOneAndDelete(req.params.id)
    .then(contacts => res.send("contact deleted"))
    .catch(err => res.send("error"));
});
router.put("/update/:id", (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.id }, { $set: { ...req.body } })
    .then(user => res.send(user))
    .catch(err => res.send(err));
});
router.post("/", (req, res) => {
  const newContact = new Contact({
    ...req.body
  });
  newContact
    .save()
    .then(user => res.send(user))
    .catch(err => res.send(err));
});

module.exports = router;
