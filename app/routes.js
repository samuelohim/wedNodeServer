const ob = require('express');
router = ob.Router();
module.exports = router;

mainController = require('./controllers/mainController');

router.get('/', mainController.showHome);