const ctrl = {
    index: (req, res) => {
        res.render('index');
    },
    blog: (req, res) => {
        res.render('blog');
    },
    cart: (req, res) => {
        res.render('cart');
    },
    category: (req, res) => {
        res.render('category');
    },
    confirm: (req, res) => {
        res.render('confirm');
    },
    elem: (req, res) => {
        res.render('elem');
    },
    checkout: (req, res) => {
        res.render('checkout');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    login: (req, res) => {
        res.render('login');
    },
    track: (req, res) => {
        res.render('track');
    }
};

module.exports = ctrl;