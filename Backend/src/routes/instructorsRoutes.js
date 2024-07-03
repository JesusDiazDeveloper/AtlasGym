const express = require('express');
const router = express.Router();

const instructorsController = require('../controllers/instructorsController');

router.get('/', instructorsController.getAllInstructors);
router.get('/:id', instructorsController.getInstructorById);
router.post('/', instructorsController.createInstructor);
router.put('/:id', instructorsController.updateInstructor);
router.delete('/:id', instructorsController.deleteInstructor);

module.exports = router;