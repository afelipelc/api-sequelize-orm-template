const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const routes = require('./routes');


// crear el servidor
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors
app.use(
  cors({
    credentials: true,
    origin: ['http://app.utim.edu.mx', 'http://localhost:3000'],
  })
);

app.use('/', routes());

// habilitar puerto de escucha
app.listen(process.env.APP_PORT, () => {
  console.log("Aplicación en ejecución");
});
