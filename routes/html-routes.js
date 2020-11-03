const path = require("path");
const router = require("express").Router();

// Home page default
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

// Route to exercise.html
router.get("exercise", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

// Route to stats.html
router.get("exercise", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

// Export routes back to server
module.exports = router;
