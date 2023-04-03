const express = require('express');
const guestController = require('../controllers/guestController');

const router = express.Router();

router.route('/').get(guestController.getAllGuests);

router
  .route('/:name')
  .get(guestController.getGuest)
  .patch(guestController.updateGuest);

module.exports = router;
