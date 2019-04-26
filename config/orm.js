const connection = require("./connection");

class Model {
    constructor(tableName, fields) {
        if (!tableName) {
            this.error = 'No table name provided when creating model.';
            return this;
        }
        this.tableName = tableName;
        let tableFields = '';
        try {
            fields.forEach((field, index) => {
                const { name, type, size, notNull } = field;
                if (!name) throw { error: `Missing field name [${index}]`}
                let fullType;
                switch (type) {
                    case 'text':
                        fullType = size && size < 256 ? `VARCHAR(${size})` : 'TEXT';
                        break;
                    case 'integer':
                        fullType = size ? `INT(${size})` : 'INT';
                        break;
                    case 'double':
                        fullType = size ? `DOUBLE(${size})` : 'DOUBLE';
                        break;
                    case 'boolean':
                        fullType = 'BOOLEAN';
                        break;
                    default:
                        throw `No type specified for ${field.name + ' '}(${index})`;
                }
                tableFields += (`${index > 0 ? ', ' : ''}${name} ${fullType}${notNull ? ' NOT NULL' : ''}`);
            });
            connection.query(`CREATE TABLE IF NOT EXISTS ${tableName}(
                id INT(5) AUTO_INCREMENT NOT NULL, ${tableFields}, PRIMARY KEY(id)
            )`);
        }
        catch(err) {
            this.error = err || 'Unknown error creating model.';
        }
    }

    // generic query method to avoid repeating code in following methods
    _query(queryString, valuesExceptTableName) {
        let values = valuesExceptTableName;
        values.unshift(this.tableName);
        return new Promise((resolve, reject) => connection.query(
            queryString,
            values,
            (err, results) => err ? reject(this.error || err) : resolve(results)
        ));
    }

    selectAll() {
        return this._query("SELECT * FROM ??", []);
    }

    insertOne(entryObject) {
        return this._query("INSERT INTO ?? SET ?", [entryObject]);
    }

    updateOne(updatedPropertiesObject, idObject) {
        return this._query("UPDATE ?? SET ? WHERE ?", [updatedPropertiesObject, idObject]);
    }
}

module.exports = { Model };