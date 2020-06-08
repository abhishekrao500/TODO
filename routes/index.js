const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');


// Router for Home Page
router.get('/', homeController.home);

// Router for creating task
router.post('/create-task', homeController.createTask);


module.exports = router;