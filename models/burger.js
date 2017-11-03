var orm = require('../config/orm.js');

var burger = {

    select: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    create: function(name, callback){
        orm.insertOne("burgers", name, callback);
    },
    update: function(id, callback){
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, callback);
    }
};

module.exports = burger;