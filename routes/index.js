const router = require('express').Router();

const burgerController = require("../controllers/burger");

router.get("/", (req, res) => {
  burgerController.getList()
    .then(results => res.render("index", { burgers: results }))
    .catch(err => res.render("index", { burgers: [], err }));
});

router.use('/api', require('./api'));

module.exports = router;