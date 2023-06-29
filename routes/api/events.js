const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', eventsCtrl.create);

router.get('/:id', eventsCtrl.show);

router.get('/:id/edit', eventsCtrl.edit);

router.get('/:id', eventsCtrl.update);

module.exports = router;