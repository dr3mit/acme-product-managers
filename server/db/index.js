const db = require('./db'); 
const User = require('./User');
const Product = require('./Product')

Product.belongsTo(User, {as: 'Manager'});

module.exports = {db, User, Product};