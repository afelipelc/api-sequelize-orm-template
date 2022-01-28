const { Customer } = require('../models');

exports.list = async (req, res, next) => {
  try {
    
    const customers = await Customer.findAll({});
    res.json(customers);

  } catch(error) {
    res.status(500).json({
      message: 'Error al leer clientes',
    });
  }
};

