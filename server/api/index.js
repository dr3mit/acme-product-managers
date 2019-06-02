const router = require('express').Router();
const { db, User, Product } = require('../db');

router.get('/users', (req, res, next) => {
    return User.findAll()
    .then(users => res.send(users))
    .catch(e => console.error(e));
});

router.get('/products', (req, res, next) => {
    return Product.findAll()
    .then(products => res.send(products))
    .catch(e => console.error(e));
});

router.get('/products/:id', (req, res, next) => {
    return Product.findByPk(Number(req.params.id), {include: User})
    .then(product => res.send(product))
    .catch(e => console.error(e));
});


module.exports =  router ;