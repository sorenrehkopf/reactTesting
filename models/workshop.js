'use strict';
module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define('Category', {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                models.Category.belongsToMany(models.Scenario, {
                    through: 'ScenariosCategories'
                });
            }
        }
    });
    return Category;
};
