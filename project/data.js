const db = require('./fakeDb');
const notification = require('./notifications')

module.exports.absolute = function(number){
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0;
}

module.exports.welcome = function(name){
    return 'Hello' + name;
}

module.exports.sizes = function() {
    return ['S','M','L'];
}

module.exports.getUser = function(userId) {
    return {id: userId, age: 20 };
}

module.exports.registerUser = function(email) {
    if (!email) throw new exception('Email required!');
    return {id: 1, email: email};
}

module.exports.discount = function(order){
    const customer = db.getUser(order.userId);
    if (customer.points > 10) 
        order.totalAmount *= 20;
}

module.exports.notifyUser = function(order){
   const customer = db.getUserEmail(order.userId);
   notification.send(customer.email, 'Order placed.');
}