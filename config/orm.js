const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

function objToSql(ob) {
    const arr = [];

    for (const key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + " = " + value);
        }
    }

    return arr.toString();
}

const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, columns, valuesInput, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, columns, valuesInput], function (err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    updateOne: function (table, col, val, condition, cb) {
       
        connection.query("UPDATE ?? SET ?? = ? WHERE ?", [table, col, val, condition], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}

module.exports = orm;