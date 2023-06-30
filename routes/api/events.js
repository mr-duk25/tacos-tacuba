const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', eventsCtrl.create);

router.get('/:id', eventsCtrl.show);

router.get('/:id/edit', eventsCtrl.edit);

router.put('/:id', eventsCtrl.update);

router.delete('/:id', eventsCtrl.delete);

module.exports = router;