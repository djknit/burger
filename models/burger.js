const { Model } = require("../config/orm");

const Burger = new Model(
    'burgers',
    [
        {
            name: 'burger_name',
            type: 'text',
            size: 60,
            notNull: true
        }, {
            name: 'devoured',
            type: 'boolean',
            notNull: true
        }
    ]
);

module.exports = Burger;