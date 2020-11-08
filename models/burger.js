const orm = require('../config/orm.js');

const burger = {
    all: function (cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    create: function(valuesInput, cb){
        orm.insertOne(valuesInput, function(res){
            cb(res);
        });
    },
    update: function(setInput, condition, cb){
        orm.updateOne(setInput, condition, function(res){
            cb(res);
        })
    }
};


module.exports = burger;