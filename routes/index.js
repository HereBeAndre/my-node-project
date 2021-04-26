const express = require("express");
const router = express.Router();

const profiles = {
  drose: {
    image: "/images/drose.jpg",
    name: "Derrick Rose",
    role: "Playmaker",
    jersey: 1,
    team: "Chicago Bulls",
  },
  kbryant: {
    image: "/images/kbryant.jpg",
    name: "Kobe Bryant",
    role: "Point Guard",
    jersey: 24,
    team: "Los Angeles Lakers",
  },
  skemp: {
    image: "/images/skemp.jpg",
    name: "Shawn Kemp",
    role: "Power Forward",
    jersey: 40,
    team: "Seattle Supersonics",
  },
};

// START: Handle query parameters
router.get("/names", (req, res) => {
  // Within nodeJS, every request has a query object
  const { name, occupation } = req.query;

  const data = {
    name,
    occupation,
  };

  res.render("profile", data);
});
// END: Handle query parameters

// START: Dynamic data examples
router.get("/profile/:username", (req, res) => {
  const { username } = req.params;
  const currentProfile = profiles[username];
  currentProfile.timestamp = req.timestamp;

  if (currentProfile == null) {
    res.json({
      status: "failure",
      message: `Profile ${username} not found`,
    });
    return;
  }

  res.render("player", currentProfile);

  // res.json({
  //   status: "success",
  //   profile: currentProfile,
  // });
});

router.get("/:dynamic1/:dynamic2", (req, res) => {
  const { dynamic1, dynamic2 } = req.params;
  const dynamicData = {
    dynamic1,
    dynamic2,
  };
  res.render("dynamic", dynamicData);
});
// END: Dynamic data examples

router.post("/add-profile", (req, res) => {
  const { body } = req;
  res.json({
    body,
  });
});

router.get("/home", (req, res, next) => {
  res.render("home", null);
});

module.exports = router;
