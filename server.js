const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Routes
const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
})