const router = require("express").Router();
let VolunteerRecord = require("../models/volunteer");

router.route("/").get((req, res) => {
  VolunteerRecord.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  VolunteerRecord.findById(req.params.id)
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const volunteerRecord = req.body.volunteerRecord;
  const userID = req.body.userID;

  const newHours = new VolunteerRecord({
    userID: userID,
    volunteerRecord: volunteerRecord,
  });
  newHours
    .save()
    .then(() => res.json("New Volunteer Record added"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/update").post((req, res) => {
  const id = req.body.userID;
  VolunteerRecord.findOne({ userID: id })
    .then((item) => {
      item.userID = req.body.userID;
      item.volunteerRecord = req.body.volunteerRecord;
      item
        .save()
        .then(() => res.json("Added volunteer record!"))
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/delete").post((req, res) => {
  const id = req.body.id;
  VolunteerRecord.deleteOne({ userID: id })
    .then((item) => {
      res.json(item);
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
