const orm = require('../config/orm.js');

const burger = {
    all: function (cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    create: function(columns, valuesInput, cb){
        orm.insertOne("burgers", columns, valuesInput, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        })
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
};


module.exports = burger;