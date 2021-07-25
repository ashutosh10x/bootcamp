const express = require('express');
const router = express.Router();
const {
  getAllBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamps,
  deleteBootcamps,
} = require('../controller/bootcamps');

router.route('/').get(getAllBootcamps).post(createBootcamps);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamps)
  .delete(deleteBootcamps);

module.exports = router;
