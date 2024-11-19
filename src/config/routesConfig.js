const { Router } = require('express');
const { dashboardController } = require('../controllers/dashboardController');
const { signUpController } = require('../controllers/signUpController');

const router = Router();

router.get('/',  (req, res) => {
    res.render('dashboard');
});
router.get('/sign',  (req, res) => {
    res.render('signUp');
});

router.get('/search',  (req, res) => {
    res.render('search');
});

router.get('/login',  (req, res) => {
    res.render('login');
});


module.exports = { router }