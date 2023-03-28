const express = require('express');
const guestController = require('../controllers/guestController');

const router = express.Router();

router.route('/').get(guestController.getAllGuests);
// .post(guestController.createUser);

/*
router
  .route('/:id')
  .get(guestController.getUser)
  .patch(guestController.updateUser)
  .delete(guestController.deleteUser);
*/

module.exports = router;
