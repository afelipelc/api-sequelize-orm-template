'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // un cliente pertenece a una categoría
      models.Customer.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'categoryId',
      });
    }
  }
  
  Customer.init({
    name: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El nombre no puede quedar vacío.',
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El email no puede quedar vacío.',
        },
        isEmail: {
          args: true,
          msg: 'Se debe proporcionar un email válido.',
        },
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El teléfono no puede quedar vacío.',
        },
      },
    },
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};