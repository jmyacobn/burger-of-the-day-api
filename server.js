const express = require('express');
const recipes = require('./recipes');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3001);

app.locals.title = 'Burger-of-the-Day';
app.locals.recipes = recipes;

app.get('/api/v1/recipes', (request, response) => {
  const recipes = app.locals.recipes;
  response.json({ recipes });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

module.exports = app;