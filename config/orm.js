const connection = require("../config/connection.js");


const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (valuesInput ,cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [valuesInput], function(err, results){
            if (err) throw err;
            cb(results);
        })
    },
    updateOne: function(setInput, condition, cb){
        connection.query("UPDATE burgers SET ?? WHERE ?", [setInput, condition], function(err, results){
            if (err) throw err;
            cb(results);
        })
    }
}

module.exports = orm;