const { Op } = require("sequelize");

const { Customer } = require('../models');

// post
exports.add = async(req, res, next) => {
  try {
    const clienteData = {...req.body};

    const customer = await Customer.create(clienteData);
    res.json({
      message: "Cliente registrado.",
      customer,
    });

  }catch(error) {
    res.status(500).json({
      message: 'Error al registrar cliente.',
    });
  }
};

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

exports.search = async (req, res, next) => {
  try {
    console.log(req.query);
    const customers = await Customer.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${req.query.q.toLowerCase()}%`
            },
          },
          {
            email: {
              [Op.like]: `%${req.query.q.toLowerCase()}%`
            },
          },
          {
            phone: {
              [Op.like]: `%${req.query.q.toLowerCase()}%`
            },
          },
        ]
      }
    });

    res.json({resultados: customers});

  } catch(error) {
    res.status(500).json({
      message: 'Error al leer clientes',
    });
  }
};