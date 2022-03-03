const { ProductCategory } = require('../models');

exports.add = async(req, res, next) => {
  try {
    const categoryData = {...req.body};

    const category = await ProductCategory.create(categoryData);
    res.json({
      message: "Categoría registrada.",
      category,
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
      message: 'Error al registrar catregoría.',
      errors: errores,
    });
  }
};

exports.list = async (req, res, next) => {
  try {
    const categories = await ProductCategory.findAll({
      // include: ['category'],
    });
    res.json(categories);
  } catch(error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al leer categorias',
    });
  }
};

exports.show = async (req, res, next) => {
  try {
    const category = await ProductCategory.findOne({
      where: {id: req.params.id},
      include: ['products'],
    });
    res.json(category);

  } catch(error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al leer categoria',
    });
  }
};
