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
            arr.push(key + "=" + value);
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
    insertOne: function (valuesInput, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [valuesInput], function (err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    updateOne: function (setInput, condition, cb) {
        connection.query("UPDATE burgers SET ?? WHERE ?", [setInput, condition], function (err, results) {
            if (err) throw err;
            cb(results);
        })
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