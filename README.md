# Burger of the Day API
This application is the back-end server for my Burger of the Day UI project.

## Getting started

### Installation
1. Clone down this repository: `git clone git@github.com:jmyacobn/burger-of-the-day-api.git`.
2. Change into the new directory: `cd burger-of-the-day-api`.
3. Install the dependencies: `npm install`.

### Usage
To fire up the server, run `node server.js` or `nodemon server.js`.

### Endpoints

| url | verb | sample response |
| --- | ---- | --------------- |
| `http://localhost:3001/api/v1/recipes` | GET | Array of all existing recipes: `[{ id: 1, name: 'A Good Manchego is Hard to Find Burger', price: '$5.95', servings: '4 burgers', description: 'A burger topped with caramelized shallots, Manchego cheese, and a generous helping of fig jam. Fig jam! Banned. Banned!! Remember? From the show?', ingredients: ["2 tablespoons butter", "6 shallots, peeled and thinly sliced", "1 lb ground beef", "1 small block Manchego cheese, sliced", "fig jam", "4 buns", "arugla or boston lettuce"], instructions: [{ step: 1, instruction: "Melt the butter in a wide frying pan over medium-low heat. Add the shallots and stir to coat. Cook over faily low heat, stirring occasionally, until the shallots are very soft and a deep, sticky golden brown, about 15-20 minutes." }, { step: 2, instruction: "Form 4 patties, season both sides with salt and pepper, and cook the burgers, melting a few slices of Manchego over each burger. Cover the pan or tent with foil to help the cheese melt." }, { step: 3, instruction: "Build your burger: bottom bun, then the cheeseburger, arugula, and sautéed shallots. Spread the fig jam on the top bun. Spread happiness in your face." }}]` |
