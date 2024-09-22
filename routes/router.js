const express = require('express');
const router = express.Router();

const control = require('../controller/control');
router.get('/', control.index);
router.get('/blog', control.blog);
router.get('/cart', control.cart);
router.get('/category', control.category);
router.get('/confirm', control.confirm);
router.get('/elem', control.elem);
router.get('/checkout', control.checkout);
router.get('/contact', control.contact);
router.get('/login', control.login);
router.get('/track', control.track);

module.exports = router;
