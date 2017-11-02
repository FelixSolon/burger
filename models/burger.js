var orm = require('../config/orm.js');

var burger = {

    select: function(callback){
        orm.selectWhere(),
        insert: orm.insertOne(),
        update: orm.updateOne()
}

module.exports = burger;