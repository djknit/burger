const router = require('express').Router();

const burgerController = require("../../controllers/burger");

router.post(
  "/burgers",
  (req, res) => {
    if (!(req && req.body && req.body.name)) return res.status(400).json({
      message: 'Missing "name" in request. Burger not created.'
    });
    burgerController.add(req.body.name)
      .then(result => result && result.insertId ?
        res.json({ id: result.insertId }) :
        res.status(500).json({ message: 'Unknown error while adding burger.'})
      )
      .catch(err => res.status(500).json({ message: err || 'Unknown error.' }));
  }
);

router.put(
  "/burgers/:id",
  (req, res) => {
    if (!req.params.id) return res.status(400).end();
    burgerController.devour(req.params.id)
      .then(result => res.status(result && result.changedRows ? 200 : 400).end())
      .catch(err => res.status(500).json({ message: err || 'Unknown error.' }));
  }
);

module.exports = router;