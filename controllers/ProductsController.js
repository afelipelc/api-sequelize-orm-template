const { Product } = require('../models');

exports.add = async(req, res, next) => {
  try {
    const productData = {...req.body};

    const product = await Product.create(productData);
    res.json({
      message: "Producto registrado.",
      product,
    });

  }catch(error) {

    let errores = [];
    if (error.errors) {
      errores = error.errors.map((errorItem) => ({
        error: errorItem.message,
        field: errorItem.path,
      }));
    }

    res.status(500).json({
      message: 'Error al registrar producto.',
      errors: errores,
    });
  }
};

exports.list = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: ['productCategory'],
    });
    res.json(products);

  } catch(error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al leer productos',
    });
  }
};

exports.show = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {id: req.params.id},
      include: ['images'],
    });
    res.json(product);

  } catch(error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al leer producto',
    });
  }
};
