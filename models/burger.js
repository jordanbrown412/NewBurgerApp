var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burgers", {
    
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
        }, {
    timestamps: false
});
      return Burgers;
        };

