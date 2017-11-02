var orm = require('../config/orm.js');

var burger = {

    select: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insert: function(name, callback){
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], callback);
    },
    update: function(id, callback){
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, callback);
    }
};

module.exports = burger;