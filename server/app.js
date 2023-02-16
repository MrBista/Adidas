const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Server listening to the port', PORT);
});
