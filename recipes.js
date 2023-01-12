const recipes = [
  {
    id: 1,
    name: '"New Bacon-ings" - Comes with Bacon',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'A classic all-beef patty topped with lettuce, cheddar cheese, onion, tomato, and bacon. It\’s what George Washington was fighting for. It\’s what the Statue of Liberty wishes it was holding instead of a dumb torch. So use the freshest ingredients you can find, down to the bun.',
    ingredients: ['1 lb bacon', 'russet potatoes', 'cooking oil (peanut recommended)', '1 lb ground beef', '1 cup whole milk', '1 large egg', '4 buns', 'green leaf lettuce', '1 tomato, sliced', '1 red onion'],
    instructions: [
      {
        step: 1,
        instruction: 'Preheat your oven to 400\u00B0F. If you prefer to cook your bacon in a skillet, chop all but 8 slices and fry over medium heat until almost crisp and most of the fat has rendered. Drain the chopped bacon on paper towels, wipe out the skillet, and fry the remaining slices till crisp. Drain and reserve. Or, spread the strips onto a rack placed in a rimmed baking sheet and bake in the oven until brown and crisp, about 15-20 minutes. Reserve 8 slices and finely chop the rest.Keep the oven on.'
      },
      {
        step: 2,
        instruction: 'Wash your russet potatoes (peeling optional). Cut your potato into 1/4 inch sticks. Heat your oil to 325\u00B0F in a heavy, high-walled pot. Use enough oil to cover your fries. In batches, drop in the potato sticks and cook for 5 minutes until limp. Do not cover. Let them brown. Remove carefully with a long-handled slotted spoon or metal stainer and place on paper towels. Drain and let cool.'
      },
      {
        step: 3,
        instruction: 'Combine the milk and egg in a large bowl. Coat the blanched, cooled fries in the mixture and spread on a parchment-lined baking sheet. Toss the coated fries with the chopped bacon and return to the oven for 10-15 minutes, until the bacon-y fries are extra crispy.'
      },
      {
        step: 4,
        instruction: 'Meanwhile, make 4 patties, season both sides with salt and pepper, and cook your burgers. When they\'re just about done, top with cheese.'
      },
      {
        step: 5,
        instruction: 'Build your burger: Bottom bun, lettuce, cheeseburger, tomato, bacon slices, onion, top bun. Serve with bacon-y fries.'
      }
    ],
  },
  {
    id: 2,
    name: 'Eggers Can\'t Be Cheesers Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'An all-beef patty topped with American cheese and a fried egg sunny-side up. Served with hot sauce and a piece of lettuce on a plain bun. It\’s eggsactly as eggstraordinary as it sounds. Eggs.',
    ingredients: ['1 lb ground beef', '8 slices American cheese', '4 large eggs', 'butter', '4 English muffins', 'green leaf lettuce', 'hot sauce (optional)'],
    instructions: [
      {
        step: 1,
        instruction: 'Make 4 patties, season both sides with salt and pepper, and cook the burgers. When they/’re just about done, top with the cheese (2 slices per burger).'
      },
      {
        step: 2,
        instruction: 'In a large frying pan, cook your eggs sunny-side up over a bit of butter. No flipping these guys—that\’s what sunny side up means. It\’s also a good way to describe your attitude these days.'
      },
      {
        step: 3,
        instruction: 'Toast your Engish muffins.'
      },
      {
        step: 4,
        instruction: 'Build your burger: Spread a tiny bit of butter on your toasted English muffins, then bottom muffin, cheeseburger, and egg on top. Finish it off with hot sauce, and the muffin on top. YOUR muffin top is gonna love it!'
      },
      {
        step: 5,
        instruction: 'Grab a napkin - you\'ll need it!'
      }],
  },
  {
    id: 3,
    name: 'A Good Manchego is Hard to Find Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'A burger topped with caramelized shallots, Manchego cheese, and a generous helping of fig jam. Fig jam! Banned. Banned!! Remember? From the show?',
    ingredients: ['2 tablespoons butter', '6 shallots, peeled and thinly sliced', '1 lb ground beef', '1 small block Manchego cheese, sliced', 'fig jam', '4 buns', 'arugla or boston lettuce'],
    instructions: [
      {
        step: 1,
        instruction: 'Melt the butter in a wide frying pan over medium-low heat. Add the shallots and stir to coat. Cook over faily low heat, stirring occasionally, until the shallots are very soft and a deep, sticky golden brown, about 15-20 minutes.'
      },
      {
        step: 2,
        instruction: 'Form 4 patties, season both sides with salt and pepper, and cook the burgers, melting a few slices of Manchego over each burger. Cover the pan or tent with foil to help the cheese melt.'
      },
      {
        step: 3,
        instruction: 'Build your burger: Bottom bun, then the cheeseburger, arugula, and sautéed shallots. Spread the fig jam on the top bun. Spread happiness in your face.'
      }
    ],
  },
  {
    id: 4,
    name: 'Totally Radish Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'An all-beef patty topped with a refreshingly crunchy-creamy-spicy mix of crème fraîche, cucumbers, dill, and radishes. Slice any leftover radishes for a fancy garnish. Your friends will say “Hey, nice garnish.”',
    ingredients: ['1 cucumber, peeled', '10-12 radishes', '1/3 cup crème fraîche', '1 tablespoon chopped fresh dill', '1 lb ground beef', 'green leaf lettuce', '4 french rolls (plain buns are fine, too)'],
    instructions: [
      {
        step: 1,
        instruction: 'Use a microplane to grate the cucumber and the radishes into a medium bowl. Add the crème fraîche and the dill and mix.'
      },
      {
        step: 2,
        instruction: 'Form 4 patties, season both sides with salt and pepper, and cook your burgers.'
      },
      {
        step: 3,
        instruction: 'Build your burger: put some lettuce and a burger on the bottom roll, some of that delicious radish-cucumber mixture, top bun.'
      },
      {
        step: 4,
        instruction: 'Add the garnish. Did you forget? We just talked about it. You know what, it\'s fine. I don\'t know why I\'m making such a big deal about it.'
      },
    ],
  },
  {
    id: 5,
    name: 'Poblano Picasso Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'An all-beef patty topped with a spicy poblano salsa verde, fresh tomatoes, and Monterey Jack cheese. A Picasso never tasted so good. I mean, we\’re assuming his paintings tasted terrible. Anyway, this burger is delicious.',
    ingredients: ['1/4 cup chopped white onions', '1 teaspoon butter', '1 large pablano pepper, stemmed, halved lengthwise, and seeded', '4 tomatillos, husked and quarter', '1 Jalapeño pepper', '1 lb ground beef', '4 slices Monterey Jack cheese', '4 buns', 'green leaf lettuce', '1 large tomato, thickly sliced'],
    instructions: [
      {
        step: 1,
        instruction: 'Preheat your broiler.'
      },
      {
        step: 2,
        instruction: 'Cook the onions in a small frying pan with butter over medium-high heat until translucent.'
      },
      {
        step: 3,
        instruction: 'Put the pablano and tomatillos in a small casserole dish and place 6 inches under the broiler for 5-10 minutes, until the skins start to brown.'
      },
      {
        step: 4,
        instruction: 'Add the cooked onions, broiled poblano and tomatillos, and the jalapeño to a food processor or blender, and puree; set aside.'
      },
      {
        step: 5,
        instruction: 'Form 4 patties, season both side with salt and pepper, and cook the burgers as you normally would, making sure to melt a heavy helping of Monterey Jack on top.'
      },
      {
        step: 6,
        instruction: 'Build your burger: Bottom bun, cheeseburger, a generous helping of salsa verde, tomato, and the top bun. You\'re poblano-ly gonna love this one. Get it? Like probably?'
      }
    ],
  },
  {
    id: 6,
    name: 'Do the Brussel Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'Brussels sprouts. As kids, we hid them in potted plants close so we wouldn\’t have to eat them, and as adults, we love \‘em. Life\’s funny, isn\’t it? This lightly seasoned bacon burger topped with sautéed sprouts and pistachios will have you “doin\’ the brussel” right at the table.',
    ingredients: ['1/2 lb bacon', '1/3 lb brussel sprouts, thinly sliced,', '1/4 cup shelled pistachios, roughly chopped', '1 lb ground beef', '4 buns', 'green leaf lettuce', 'sour cream'],
    instructions: [
      {
        step: 1,
        instruction: 'Cook your bacon on the stove in a large frying pan set over low heat. Cook the bacon until it\'s crispy, but not too crispy.'
      }, 
      {
        step: 2,
        instruction: 'Transfer your bacon to paper towels, and throw your brussel sprouts into that delicious bacon fat; increase the heat to medium-high. You could cook garden tools in bacon fat and they would taste good. That\'s a fact! Disclaimer: Don\'t eat garden tools.'
      }, 
      {
        step: 3,
        instruction: 'Once the sprouts start to brown a bit, add the pistachios. Stir for about a minute, then remove from heat and set aside.'
      }, 
      {
        step: 4,
        instruction: 'Season the beef with salt and pepper, form 4 patties, and cook your burgers in the same pan.'
      }, 
      {
        step: 5,
        instruction: 'Build your burger: Bottom bun, burger, bacon, brussel sprouts mixture, a dallop of sour cream, and your top bun. Dollop. Dollop. That\'s a great word, dollop.'
      }, 
    ],
  },
  {
    id: 7,
    name: 'It\'s Fun to Eat at the Rye-Mca Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'All-beef patties on rye bread topped with cheddar cheese, brown mustard, caramelized onions and horseradish. Or, if you\’re a stickler for episode accuracy, you can substitute sliced avocado for the horseradish.',
    ingredients: ['1 tablespoon butter', '1/2 medium onion, sliced', '1 lb ground beef', 'thickly sliced cheddar cheese', 'sliced rye bread', 'boston or green leaf lettuce', '4 teaspoons prepared horseradish (or 1 avocado, sliced', 'brown mustard'],
    instructions: [
      {
        step: 1,
        instruction: 'Melt the butter in a wide frying pan over medium-low heat. Add the onion and stir to coat. Cook over low heat, stirring occasionally, until the onions are soft and a sticky golden-brown, about 20-30 minutes.'
      },
      {
        step: 2,
        instruction: 'Make the patties, season both sides with salt and pepper, and cook them as you normally would. Just before they finish cooking, lay a thick slice of cheddar cheese over each patty, and cover or tent to help cheese melt.'
      },
      {
        step: 3,
        instruction: 'Build your burger: Rye bread, lettuce, cheeseburger, carmelized onions, a spoonful of horseradish (or a couple of slices of avocado), and another piece of rye bread with honey mustard slathered all over it. Tastes better when eaten with a cowboy, a police officer, a Native American, a construction worker, someone in leather, and an army guy.'
      },
    ],
  },
  {
    id: 8,
    name: 'If Looks Could Kale Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'This all-beef patty is topped with deliciously complex Gruyère cheese and crispy roasted kale. Serve on a toasted whole wheat bun with a side of rosemary orzo salad. This burger gives you instant kale-bragging rights—you jumped on the kale train and you\’re riding it all the way to flavor town.',
    ingredients: ['3 1/4 cups low-sodium chicken stock', '2 cups orzo', '1/3 cup diced tomatoes', '2 sprigs fresh rosemary, leaves finely chopped', 'olive oil', '1 lb ground beef', '1 cup grated Gruyère cheese', '4 whole wheat or whole grain buns', '1 big bunch kale, setms removed and leaves cut into ribbons', '4 cloves garlic, minced', 'olive oil', '2 tablespoons red wine vinegar'],
    instructions: [
      {
        step: 1,
        instruction: 'Make Orzo Salad: Bring chicken stock to a boil and drop in the orzo. Cook for 10 minutes, stirring occasionally, and then drain. Mix in the tomatoes and rosemary and set aside. Serve orzo hot or cold.'
      }, 
      {
        step: 2,
        instruction: 'Make the Kale: Preheat your oven to 300\u00B0F. Wash and dry the kale. Pull the leaves off of the stem and shred them into pieces about the size of playing cards. Cover a baking pan with a piece of parchment paper, lay the kale on the paper, brush with olive oil, sprinkle with salt, and bake for 20 minutes (Rotate the pan halfway through.). Watch your kale closely during the last few minutes as you want it crispy, but not burnt. Set aside.'
      }, 
      {
        step: 3,
        instruction: 'Make the burgers: Form 4 patties, season both sides with salt and pepper, and cook your burgers as you usually would. Cover each burger with Gruyère. Toast your buns. No, not those buns. The burger buns.'
      }, 
      {
        step: 4,
        instruction: 'Build your burger: Bottom bun, cheeseburger, crispy kale, top bun. It\'s a burger to relieve whatever kales you. Sorry.'
      }
    ],
  },
  {
    id: 9,
    name: 'The Final Kraut Down Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'Sweet Bavarian sauerkraut, caramelized onions, Swiss cheese, and burger, served on a Kaiser roll. Bavarian style is a much milder, sweeter style of sauerkraut, so quit fighting it! Give in! Give in to Bavaria!',
    ingredients: ['1 tablespoon butter', '1 vidalia onion, chopped', '1 14.5 ounce can Bavarian-style sauerkraut, drained and rinsed', '1 lb ground beef', 'Swiss chesse, sliced', '4 kaiser rolls', 'dijon mustard'],
    instructions: [
      {
        step: 1,
        instruction: 'Melt the butter in a wide frying pan over medium-low heat. Add the onion and stir to coat. Cook over fairly low heat, stirring occasionally, until the onions are very soft and a deep sticky golden-brown, about 20-30 minutes. They\'ll smell amazingly rich and sweet. So will you. I mean, you did already, but now you will even more.'
      },
      {
        step: 2,
        instruction: 'Mix the sauerkraut in with the caramelized onions and stir to combine. You;re only heating up the sauerkraut. That\'s all. Nothing to be scared of. You\'re doing great.'
      },
      {
        step: 3,
        instruction: 'Make your burgers: Season the beef with the salt and pepper, from 4 patties, and cook. Melt the cheese on top as you normally would.'
      },
      {
        step: 4,
        instruction: 'Build your burger: Bottom roll, cheeseburger, sauerkraut-onion mixture, mustar, top roll'
      }
    ],
  },
  {
    id: 10,
    name: 'Bruschetta Bout It Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'An all-beef patty topped with bruschetta and fresh mozzarella cheese, dressed with balsamic vinegar, and served on toasted French bread. Delicious, easy, and full of bold bright flavors. Just like the mafia!',
    ingredients: ['5 roma tomatoes, seeded and chopped into 1/4 inch cubes', '1 clove garlic, minced', '1 bunch fresh basil, leaves stacked, rolled, and cut into thin ribbons', '2 tablespoons olive oil', '1 tablespoon balsamic vinegar', '1 lb ground beef', '1 ball fresh mozzarella, cut into thick slices', 'french bread'],
    instructions: [
      {
        step: 1,
        instruction: 'Set the tomatoes, garlic, and basil in a large mixing bowl. Add the olive oil, balsamic vinegar, and a dash of salt and pepper to the bowl and stir to combine. Set aside.'
      },
      {
        step: 2,
        instruction: 'Form 4 pattties, season both sides with salt and pepper, and cook them. Just before they\'re cooked to your liking melt the mozzarella slices over the burgers. Toast 2 slices of french bread for each burger.'
      },
      {
        step: 3,
        instruction: 'Toasted french bread, cheeseburger, a heavy scoop of bruschetta, top slice of toasted French bread.'
      },
      {
        step: 4,
        instruction: 'Eat it. Think about all you\'ve accomplished. That burger you just made, other stuff...It\'s been a good day.'
      }
    ],
  },
  {
    id: 11,
    name: 'Sweaty Palms Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'An all-beef patty topped with Parmesan and a spicy hearts of palm and artichoke tapenade. It’s like a tap(enade) dance in your mouth! Ha cha cha!',
    ingredients: ['1 lb ground beef', '1 cup greated Parmesan chees', '1 14-ounce can sliced hearts of palm, whole or sliced', '1 14-ounce can artichoke hearts', '2 cloves garlic', '10 pitted green olives', '8 pitted kalamata olives', '1 Serrano chili', '5 leaves fresh basil', '2 tablespoons olive oil', '1 tablespoon balsamic vinegar', '4 buns'],
    instructions: [
      {
        step: 1,
        instruction: 'Form 4 patties, season both sides with salt and pepper, and cook them as you normally would. Before they finish, pile about 1/4 cup of grated Parmesan cheese onto each burger and cover or tent to help it melt.'
      },
      {
        step: 2,
        instruction: 'Put everything else (except buns) into a food processor (or mini chopper) and pulse until the mixtture is chunky but spreadable. Then put Chunky But Spreadable on a bumper sticker and watch the money come rolling in.'
      },
      {
        step: 3,
        instruction: 'Toast the buns and build your burger: Bottom bun, cheeseburger, tapenade, top bun.'
      },
    ],
  },
  {
    id: 12,
    name: 'Poutine on the Ritz Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'Oh, Canada! This friends-from-the-north-inspired recipe is made up of an all-beef patty topped with fresh cheese curds, brown gravy, and Ritz cracker crumbs. And it comes with a side of poutine fries. It\’s the kind of meal that makes your heart say, “Why do you hate me?” But it\’s delicious enough for you to say to your heart, “Deal with it, you baby!” Like a good man, fresh cheese curds may be a bit hard to find, but you can usually get them at higher end grocery stores or local dairies.',
    ingredients: ['3 tablespoons black pepper, divided', '2 tablespoons paprika', '2 teaspoons cayenne pepper', 'russet potatoes', '4 tablespoons butter', '6 tablespoons flour', '3 cups beef stock', '1 lb ground beef', 'salt', '4 buns', 'fresh cheese curds', '1 sleeve Ritz crackers'],
    instructions: [
      {
        step: 1,
        instruction: 'Combine 2 tablespoons of black pepper with the paprika and caynee in a large bowl.'
      },
      {
        step: 2,
        instruction: 'Fries: Wash your russet potatoes (peeling optional). Cut your potato into 1/4 inch sticks. Heat your oil to 325\u00B0F in a heavy, high-walled pot. Use enough oil to cover your fries. In batches, drop in the potato sticks and cook for 5 minutes until limp. Do not cover. Let them brown. Remove carefully with a long-handled slotted spoon or metal stainer and place on paper towels. Drain and let cool.'
      },
      {
        step: 3,
        instruction: 'Fries: After the blanched potato sticks have cooled to room temperature, bring the oil up to 375\u00B0F. In small batches, drop the blanched sticks back into the oil for about 3 more minutes, or until golden brown. Remove from pot and drain on paper towels. Toss the fries in with the pepper mixture and a pinch of salt. Keep warm.'
      },
      {
        step: 4,
        instruction: 'Gravy: melt butter in a saucepan over medium heat and then whisk in the the flour. Keep whisking until the mix starts to turn light brown and you can smell the toasty aroma. This is now a roux. Add in 2 cups of the beef stock and stir until completely combines. Stir in remaining 1 tablespoon black pepper, and then slowly add the remaining stock. It\'s okay to leave some out if you like thicker gravy.'
      },
      {
        step: 5,
        instruction: 'Make 4 patties, season both sides with salt and pepper and cook your burgers.'
      },
      {
        step: 6,
        instruction: 'Build your burger: Bottom bun, burger, a bunch of cheese curds, brown gravy, a gratuitous amount of crumbled Ritz crackers, top bun.'
      }, 
      {
        step: 7,
        instruction: 'For the fries, simply mix in some cheese curds and pour some gravy on top. You can do this with loose change or a bucket of golf balls too, but do not eat - it would just be for fun in that situation.'
      }
    ],
  },
  {
    id: 13,
    name: 'Every Breath You Tikka Masala Burger',
    price: '$5.95',
    servings: "8 burgers", 
    description: 'A delicious Indian-inspired burger topped with masala basmati rice and Thai basil. We suggest lamb. Ground lamb sounds cruel, like something an ogre would eat, but lamb might become your new favorite exotic burger meat. The contrast between the basil and the masala is also delicious. Serve with a side of sweet and spicy potatoes.',
    ingredients: ['2 cups basmati rice', '3 large potatoes, diced', '4 sweet peppers (not bell peppers), finely diced', '1 hot chile pepper, seeded and finely diced', '2 tablespoons butter', 'paprika', '1 large onion, coarsely diced', '1 clove garlic, minced', '2 14.5-ounce cans whole plum tomatoes', '1 teaspoon ground cumin', '1 teaspoon ground curry powder', '1 teaspoon ground ginger', '1 teaspoon salt', '1 tablespoon garam masala', '1 cup plain yogurt', '2 lb ground beef or lamb', '8 buns', 'fresh Thai basil leaves (1 cup)'],
    instructions: [
      {
        step: 1,
        instruction: 'Rice: Rinse your rice until the water runs clear, then let it soak in clean water for at least 30 minutes. Bring 3 1/2 cups of water to a boil in a large saucepan. Add the rice and stir. Reduce the heat to a simmer and cook, covered, until done (until all the water is absorbed and the rice is moist but not sticking to the pot.)'
      },
      {
        step: 2,
        instruction: 'Potatoes: Preheat the oven to 200\u00B0F. Cover the potatoes in a large saucepan with water and season with salt. Bring the potatoes to a boil, reduce the heat to a simmer, and cook just until tender.'
      },
      {
        step: 3,
        instruction: 'Potatoes: In a large ovenproof frying pan, sauté the peppers in a tablespoon of butter until the chili pepper heat hits your eyes and your kitchen smells delicious.'
      },
      {
        step: 4,
        instruction: 'Potatoes: Drain the potatoes and add them to the pan with the peppers. Sprinkle with a generous amount of paprika and bake for about 20 to 30 minutes (or until the sauce is done and you\'re ready to eat).'
      },
      {
        step: 5,
        instruction: 'Masala: Sauté the onion over medium-high heat in the remaining tablespoon of butter until translucent. Add the garlic. Add the tomatoes and their juice to the onions and keep the mixture at a simmer. Add in the cumin, curry powder, and ginger. Wait for the tomatoes "to sweat" - release their liquid. Add in the salt and masala. Let the mixture reduce for about 10 minutes, and then remove from heat. Give it some time to cool (unit you can touch it without burning your finger).'
      },
      {
        step: 6,
        instruction: 'Masala: Add the yogurt and mix it up. The yogurt will curdle but you didn\'t ruin anything! Mix enough masala with the rice so that it is saturated a bit but not soupy; reserve remaining masala for the potatoes.'
      },
      {
        step: 7,
        instruction: 'Burgers: Form 8 patties, season both sides with salt and pepper, and grill or cook the burgers as you normally would. Toast the buns.'
      },
      {
        step: 8,
        instruction: 'Build your burger: Bottom buns, burger, masala-rice mixture, basil leaves, top buns.'
      },
      {
        step: 9,
        instruction: 'Pour the remaining masala over the potatoes and serve on the side.'
      },
    ],
  },
  {
    id: 14,
    name: 'Hit Me with Your Best Shallot Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'How French can we get? This French! This thyme-seasoned burger is topped with caramelized shallots, has a creamy chèvre spread, and is served on a fresh French bread-style roll.',
    ingredients: ['10 small shallots', '3 tablespoons butter', '1 tablespoon red wine vinegar', '2 sprigs rosemary', '2 sprigs sage', '1 lb ground beef', '1 teaspoon chopped fresh thyme', '1 4-ounce log chèvre', '4 French rolls', 'Arugula'],
    instructions: [
      {
        step: 1,
        instruction: 'This is a garlic peeling technique that works for shallots too: Put your shallots in a bowl and cover them with boiling water. Let them sit for about 10 minutes. Remove from the water, cut the root end off, peel them, and then slice into slivers.'
      },
      {
        step: 2,
        instruction: 'In a frying pan, melt the butter over medium heat. Put your shallots in, along with the rosemary and sage. Cook, stirring once in a while, until the shallots are dark brown. Stir in the red wine vinegar at this point. Remove the shallots and set aside, leaving any liquid in the pan.'
      },
      {
        step: 3,
        instruction: 'Form 4 patties and season both sides with the fresh thyme, salt, and pepper. Cook your patties in the pan that you used for your shallots.'
      },
      {
        step: 4,
        instruction: 'Spread some chèvre on your top bun. Build your burger: Bottom bun, arugula, burger, a couple of shallots, top bun. "Best Shallot? More like new best friend, right?'
      }
    ],
  },
  {
    id: 15,
    name: 'I\'ve Created a Muenster Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'Perfect patties topped with sautéed mushrooms and smothered in muenster cheese, with a dollop of ketchup and lettuce for a bit of color. Muenster is a pretty subtle cheese, but it adds a lot of texture to this burger. (Muenster also happens to be number four on Gene\’s “Cheeses That Please Me” list. Check often, he updates that list frequently.)',
    ingredients: ['1 10-ounce package white button mushrooms, sliced', '2 tablespoons butter', '1 lb ground beef', '8 thick slices of Muenster cheese', '4 buns', 'green leaf lettuce', 'ketchup'],
    instructions: [
      {
        step: 1,
        instruction: 'Sauté the mushrooms in the butter over medium-high heat until they are limp and light brown.'
      },
      {
        step: 2,
        instruction: 'Form 4 patties and season both sides with salt and pepper. Cook the burgers.'
      },
      {
        step: 3,
        instruction: 'While the burgers are over the heat, put one slice of Muenster on each burger. Then pile on a healthy scoop of mushrooms and then a second slice of Muenster to hold the mushrooms in place.'
      },
      {
        step: 4,
        instruction: 'Build your burger: Bottom bun, lettuce, a cheesy mushroomy burger, a dash of ketchup to taste, top bun.'
      },
    ],
  },
  {
    id: 16,
    name: 'The Jack-O\'-Lentil Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'An all-beef patty topped with a mixture of orange lentils, serrano chiles, garlic, and onions. A light spread of herb-coated chèvre cheese and some fresh spinach finish it off with a rich, over-the-top flavor. We\’re talking about Over the Top, the movie—this hamburger tastes like arm wrestling. Adding ginger, honey, garlic, serrano chiles, and onions makes the lentils come alive with flavor (once the lentils come to life, you must feed them three times a day).',
    ingredients: ['1 cup dried orange lentils', '5 cloves garlic, minced', '1/2 green bell pepper, diced', '2 celery stalks, finely diced', '1/2 onion, diced', '3 serrano chiles, seeded and finely diced', 'olive oil', '1 tablespoon honey', '2 teaspoons ground ginger', '1 lb ground beef', '4 buns', '1 4-ounce log chèvre, room temperature', '1 bag baby spinach'],
    instructions: [
      {
        step: 1,
        instruction: 'Cook your lentils according to package directions. Put them in water, and simmer until firm but not mushy. It\s super-easy to overcook them - don\'t do that.'
      },
      {
        step: 2,
        instruction: 'Sauté the garlic, pepper, celery, onion, and chiles in olive oil until aromatic.'
      },
      {
        step: 3,
        instruction: 'When the lentils are cooked, drain them, and add the honey and sautéed vegetables. Add in the ginger and thoroughly combine.'
      },
      {
        step: 4,
        instruction: 'Form 4 patties and season both sides with salt and pepper, then cook the burgers.'
      },
      {
        step: 5,
        instruction: 'Build your burger: Spread the chèvre on the bottom bun, add a handful of baby spinach, the burger, a heaping pile of lentils, and the top bun. Give this burger out at Halloween instead of candy.'
      }
    ],
  },
  {
    id: 17,
    name: 'Itsy Bitsy Teeny Weenie Yellow Polka-Dot Zucchini Burger',
    price: '$5.95',
    servings: "6 sliders", 
    description: 'All-beef sliders topped with sautéed zucchini, yellow bell pepper, and a dill infused yogurt sauce. Serve with a side of sweet potato fries.',
    ingredients: ['sweet potatoes', '1 lb ground beef', '2 zucchini, sliced into rounds', '1 tablespoon olive oil', '1 yellow bell pepper, finely diced', '1 tablespoon chopped fresh dill', '1 cup plain yogurt', '6 slider buns - look for mini Brioche slider buns'],
    instructions: [
      {
        step: 1,
        instruction: 'Fries: Wash your sweet potatoes (peeling optional). Cut your potato into 1/4 inch sticks. Heat your oil to 325\u00B0F in a heavy, high-walled pot. Use enough oil to cover your fries. In batches, drop in the potato sticks and cook for 5 minutes until limp. Do not cover. Let them brown. Remove carefully with a long-handled slotted spoon or metal stainer and place on paper towels. Drain and let cool.'
      },
      {
        step: 2,
        instruction: 'Fries: After the blanched potato sticks have cooled to room temperature, bring the oil up to 375\u00B0F. In small batches, drop the blanched sticks back into the oil for about 3 more minutes, or until golden brown. Remove from pot and drain on paper towels. Season and keep warm.'
      },
      {
        step: 3,
        instruction: 'Form the beef into 6 small patties. As ususal, make them a little bigger than your bun, as they will shrink, but it\'s OK to make them a little thicker, or to leave out the center divot. Season each side with salt and pepper and cook the burgers.'
      },
      {
        step: 4,
        instruction: 'Sauté the zucchini in the olive oil and add a dash of salt. Cook over medium-high heat until the outside has browned. You want them to look like they got a nice even tan. Think Tom Selleck, August, 1987.'
      },
      {
        step: 5,
        instruction: 'In a small bowl, mix the bell pepper, dill, and yogurt.'
      },
      {
        step: 6,
        instruction: 'Build your slider: Bottom bun, slider, sautéed zucchini, bell-pepper yogurt sauce, top bun. Yogurt and burgers don\'t meet very often, so congratulate yourself on bringing them together. Let\'s hope it all works out because they both deserve to be happy. Serve alongside a pile of sweet potato fries.'
      },
    ],
  },
  {
    id: 18,
    name: 'Pickle Me Funny Bone Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'Pickles are good. Fried pickles are even better. Which means that a burger with fried pickles is the greatest thing in the history of the world. This all-beef patty is topped with delicious dill chips coated in an herb and red pepper batter and served with a creamy mayo–ketchup–hot sauce combo.',
    ingredients: ['vegetable or canola oil for frying', '1/3 cup flour', '1/3 cup cornmeal', '1 egg', '1 tablespoon Italian seasoning', '1 teaspoon crushed red pepper flakes', '1 16-ounce jar kosher dill pickle chips', '4 buns', '1/2 cup mayonnaise', '1 tablespoon Frank\'s Red Hot sauce, or to taste', '1 teaspoon ketchup, or to taste', '1 lb ground beef', 'green leaf lettuce'],
    instructions: [
      {
        step: 1,
        instruction: 'In a deep saucepan, heat about an inch of oil to 350\u00B0F. Mix the flour, cornmeal, seasoing, and red pepper flakes in a large bowl.'
      },
      {
        step: 2,
        instruction: 'Drain the pickle chips and pat them dry with paper towels. Crack the egg into a small bowl and beat it. This is your bonding agent. Dunk the pickles in the egg and then dredge them in the seasoned flour. Dunk and dredge, just like in college.'
      },
      {
        step: 3,
        instruction: 'Fry the coated pickle chips in small batches until they turn golden brown. Remove from the oil with a slotted or spider spoon. Check your oil temperature between batches.'
      },
      {
        step: 4,
        instruction: 'In a bowl, mix together the mayo, hot sauce, and ketchup, adjusting the temperature to your taste.'
      },
      {
        step: 5,
        instruction: 'Form the beef into 4 patties, season both sides with salt and pepper, and cook.'
      },
      {
        step: 6,
        instruction: 'Build your burger: Bottom bun, lettuce, burger, fried pickles, prepared mayo, top bun.'
      }
    ],
  },
  {
    id: 19,
    name: '50 Ways to Leave Your Guava Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'This sweet burger comes with bacon and a tropical guava barbecue sauce. To make it even sweeter and even more tropical, you can optionally add a ring of grilled pineapple.',
    ingredients: ['4 tablespoons tomato paste', '1 10-ounce jar guava jelly', '1/4 cup rum', '1 teaspoon Worcestershire sauce', '1 teaspoon tamari (or soy sauce)', '1 tablespoon ground ginger', '1/2 lb bacon', '1 lb ground beef', '4 buns', '4 pineapple rings, sliced 1/4-inch thick', 'green leaf lettuce'],
    instructions: [
      {
        step: 1,
        instruction: 'Stir the tomato paste, guava jelly, rum, Worcestershire, and tamari (or soy sauce) together in a saucepan on low heat until the guava jelly fully liquefies. Up the heat to medium and bring it to a simmer. Mix in the ginger and stir for about a minute. Set aside.'
      },
      {
        step: 2,
        instruction: 'Cook your bacon in the oven or on the stovetop.'
      },
      {
        step: 3,
        instruction: 'Form your beef into 4 patties, season both sides with salt and pepper, and cook. If you\'re adding pineapple, put your pineapple rings on the grill or in a pan at the same time as your burgers. you want them to be a little caramelized and hot, with nice grill lines. Grill lines say to the world, "Hey, I grilled this!"'
      },
      {
        step: 4,
        instruction: 'Build your burger: Bottom bun, lettuce, bacon, burger, guava barbecue sauce, top bun.'
      }
    ],
  },
  {
    id: 20,
    name: 'Chile Relleno-You-Didn\'t Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'This burger is a bit of a challenge—like breathing quietly through your nose—but it definitely is tasty. Cheese-stuffed poblano peppers, grilled, battered, and fried, served on top of a hamburger, all on a toasted bun. It\’s a great combo, even if it does look like a pepper got confused and took a nap on a burger.',
    ingredients: ['2 large poblano peppers, halved and seeded', '4 eggs, at room temperature', '1 cup shredded Monterey Jack cheese', 'canola oil, for frying', '1 lb ground beef', '1/2 teaspoon salt', '1 tablespoon paprika', '2 teaspoons cumin', '4 buns', 'green leaf lettuce'],
    instructions: [
      {
        step: 1,
        instruction: 'Roast your poblanos either under the broiler or on a grill until the skin starts to bubble; set aside.'
      },
      {
        step: 2,
        instruction: 'In a medium pot, heat enough oil to cover your pepper halves to 350\u00B0F.'
      },
      {
        step: 3,
        instruction: 'Crack the eggs and separate the whites from the yolks. Whip the egg whites with a hand mixer until they form stiff peaks. In a separate bowl, whip the egg yolks, then gently fold in to with the egg whites to form at batter.'
      },
      {
        step: 4,
        instruction: 'Stuff each poblano half with cheese, and dip in the batter. Cover so the batter holds in the filling while frying.'
      },
      {
        step: 5,
        instruction: 'Carefully lower each green pepper half into the oil and fry until golden brown.'
      },
      {
        step: 6,
        instruction: 'Season your beef with the salt, paprika, and cumin, and form into 4 patties. Cook your burgers.'
      },
      {
        step: 7,
        instruction: 'Build your burger: Bottom bun, lettuce, burger, chile relleno, top bun. Alternatively, put all the ingredients in a big piñata and let them fall where they may.'
      },
    ],
  },
  {
    id: 21,
    name: 'Is This Your Chard? Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'This delicious all-beef burger comes with wilted red Swiss chard, caramelized onions, and creamy chèvre cheese on a French roll. You\’ll appreciate how the creamy cheese pairs with the wet and wilted Swiss chard so much, you\’ll wonder why France and Switzerland don\’t do more stuff together.',
    ingredients: ['1 big bunch of Swiss chard, stalks removed, leaves cut into wide ribbons', '1 large yellow onion, chopped', '2 tablespoons butter, divided', '1 lb ground beef', '3 cloves garlic, minced', '4 tablespoons red wine vinegar', '1 4-ounce log chèvre, at room temperature', '4 French rolls'],
    instructions: [
      {
        step: 1,
        instruction: 'Melt 1 tablespoon butter in a wide frying pan over medium-low heat. Add the onion and stir to coat. Cook over medium-low heat, stirring occasionally, until the onions are very soft and a deep, sticky golden-brown, about 20-30 minutes.'
      },
      {
        step: 2,
        instruction: 'Form the beef patties into 4 patties, season both sides with salt and pepper, and sear and cook as you normally would.'
      },
      {
        step: 3,
        instruction: 'Combine the garlic and 1 tablespoon butter in a frying pan and set over medium-high heat. When the garlic becomes aromatic, throw in all of the chard leaves. How will you know when the garlic has become aromatic? Your kitchen will smell like an amazing garlic storm just blew in. Cook the chard down until the leaves are dark green, wilted, and wet. Remove from heat and mix the vinegar in with the chard and garlic.'
      },
      {
        step: 4,
        instruction: 'Spread a chunk of chèvre on your top bun, then build your burger: Bottom bun, burger, sautéed chard, caramelized onions, top bun.'
      },
    ],
  },
  {
    id: 22,
    name: 'Enokie Dokie Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'This is an all-beef burger served on a bed of fresh baby spinach topped with enoki mushrooms and carrots braised in a soy-ginger-sake broth. You could also substitute a tuna burger here. If you do, use freshly ground tuna from your fishmonger. Don\’t have a fishmonger? Get one. Who are you going to trust to mong your fish if not a fishmonger. Enoki mushrooms are definitely odd-looking and their mild taste is hard to describe, but their deliciousness once infused with these amazing Asian flavors will have you thinking that enoki mushrooms look normal and it\’s everything else that looks weird.',
    ingredients: ['1 tablespoon canola oil', '2 carrots, peeled and cut into matchsticks (about 1 cup)', '1/4 cup minced or grated ginger', '6 ounces enoki mushrooms, washed well', '1/4 cup sake', '1 tablespoon soy sauce', '1 lb ground beef or tuna', '1 bag baby spinach', '4 buns'],
    instructions: [
      {
        step: 1,
        instruction: 'Heat the canola oil in a frying pan set over medium-high heat, then toss in the carrots and ginger. When aromatic, add the enoki mushrooms, sake, and soy sauce and stir. Cook until most of the liquid has cooked off. Set aside (somewhere special).'
      },
      {
        step: 2,
        instruction: 'Form the beef into 4 patties, season both sides with salt and pepper, and cook the burgers as you normally would.'
      },
      {
        step: 3,
        instruction: 'Build your burger: Bottom bun, baby spinach leaves and burger, a heavy scoop of the mushroom-carrot mix (that you retrieved from your special place), and the top bun.'
      }
    ],
  },
  {
    id: 23,
    name: 'Sympathy for the Deviled Egg Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'This burger features an all-beef patty topped with egg salad, served on a kaiser roll. Flavor and protein. That sums up this burger and is also a good name for a ventriloquism act.',
    ingredients: ['7 eggs', '1 teaspoon vinegar', '1/3 cup mayo', '1 teaspoon juice from a jar of sweet pickles', '1 teaspoon spicy brown mustard', '1 teaspoon paprika', '1 lb ground beef', '1 teaspoon pepper', '4 buns'],
    instructions: [
      {
        step: 1,
        instruction: 'Cover the eggs with cold water in a medium sized pot. Add a pinch of salt and 1 teaspoon vinegar. Heat uncovered on medium high until the water reaches a rolling boil. Remove from heat and cover for 10 minutes before draining.'
      },
      {
        step: 2,
        instruction: 'Once the eggs are cool enough to handle (running cold water over them helps, putting tiny sunglasses on them really helps), peel them, and then separate the yolks from the whites. Hold on to the egg whites, we\'ll use those later. Dump the egg yolks into a medium bowl. Using a fork, mash them as fine as you can.'
      },
      {
        step: 3,
        instruction: 'Add the mayo, pickle juice, and mustard to the mashed egg yolks. Mix until creamy. Add in the paprika and give it another stir.'
      },
      {
        step: 4,
        instruction: 'Dice up about 3/4 of the egg whites, and mix them in with the yolks. Salt to taste. Discard or eat the rest (or mail them to friends).'
      },
      {
        step: 5,
        instruction: 'Form the beef into 4 patties and season both sides lightly with salt and pepper - a little less than you\'d usually use. Cook the burgers in your normal fashion.'
      },
      {
        step: 6,
        instruction: 'Toast the buns and build your burger: Bottom bun, burger, lettuce, a large schmear of the egg mixture, a last dash of paprika, top bun.'
      }
    ],
  },
  {
    id: 24,
    name: 'Hummus a Tune Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'An all-beef patty topped with Mediterranean meze-platter favorites: homemade roasted red peppers and garlicky hummus. This turns your burger into a real chickpea magnet. Get it? Because hummus is made from chickpeas? Never mind. Optionally, you could use a mixture of ground beef and lamb called lula, found at Middle Eastern butchers or markets, for this recipe.',
    ingredients: ['2 large red peppers, stemmed, halved, cored, and seeded', '1 14.5-ounce can cannellini beans', '1 14.5-ounce can garbanzo beans', '1 1/2 teaspoons lemon juice', '1 tablespoon minced garlic', '1/4 cup olive oil', '2 tablespoons sesame oil (or tahini, if you have it)', '1 teaspoon salt', '1 teaspoon black pepper', '1 lb ground beef', 'green leaf lettuce', '4 buns'],
    instructions: [
      {
        step: 1,
        instruction: 'Preheat oven to 450\u00B0F. Roast the peppers for 35 minutes. Out of the oven, transfer them to a bowl, cover with plastic wrap, and set aside for 20 minutes to steam. Remove the skin and slice into 1/4-inch thick slivers.'
      },
      {
        step: 2,
        instruction: 'Hummus: Puree the beans (ahem, chick-peas), lemon juice, garlic, olive oil, sesame oil, salt, and pepper in a food processor till smooth.'
      },
      {
        step: 3,
        instruction: 'Burgers: Form the beef into 4 patties, sesason lightly with salt and pepper, and cook them like the pro you are.'
      },
      {
        step: 4,
        instruction: 'Build your burger: Bottom bun, lettuce, burger, big scoop of hummus, a few roasted red peppers, top bun.'
      }
    ],
  },
  {
    id: 25,
    name: 'The Cauliflower\'s Cumin from Inside the House Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'Be hungry. Be very hungry. You\’ll want to savor this all-beef patty topped with pepper jack cheese, lettuce, tomato, and of course, the “3 C\’s”—a combo of: cauliflower, cumin, and cilantro.',
    ingredients: ['1 head cauliflower', '1 generous tablespoon olive oil', '1/2 cup whole milk', '2 tablespoons chpped cilantro', '1 tablespoon cumin', '3 teaspoons fresh lime juice', '1 lb ground beef', '4 slices pepper jack cheese', '4 buns', 'green leaf lettuce', '1 large tomato, thickly sliced'],
    instructions: [
      {
        step: 1,
        instruction: 'Preheat your oven to 400\u00B0F. Wrap the head of cauliflower in a clean kitchen towel, and smash it on the counter until the florets have all been separated from the stem.'
      },
      {
        step: 2,
        instruction: 'Spread the cauliflower florets on a baking sheet and drizzle with olive oil. Roast in oven for about 15 minutes. Toss and then roast for another 15 minutes.'
      },
      {
        step: 3,
        instruction: 'Transfer the cauliflower to a large bowl and add the milk, cilantro, and cumin. Mash until you have a chunky mashed potato-like texture. Add one teaspoon of the lime juice and mix.'
      },
      {
        step: 4,
        instruction: 'Form the beef into 4 patties, season both sides with salt and pepper, and cook the burgers. While the burgers cook, drizzle the remaining lime juice over them. Melt a slice of pepper jack cheese on each.'
      },
      {
        step: 5,
        instruction: 'Build your burger: Bottom bun, lettuce, cheeseburger, tomato, cauliflower mash, top bun. If the phone rings, don\'t answer it. Just keep eating. Seriously, why would you answer the phone during dinner? It\'s rude. Sorry, I didn\'t mean to get you upset, I just thought we were trying to have a nice meal here.'
      }
    ],
  },
  {
    id: 26,
    name: 'Human Polenta-Pede Burger',
    price: '$5.95',
    servings: "4 sets of 3 sliders", 
    description: 'Three unique, totally delicious sliders, all on polenta “buns”: First, an all-beef slider topped with delicious roasted grape tomatoes and mozzarella cheese, dusted with herb-infused olive oil. Second, a grilled portobello mushroom topped with a red wine reduction, mozzarella cheese, and a layer of fresh arugula. Third, we go back to the beef, with a slider topped with a creamy spinach and artichoke dip.',
    ingredients: ['1 cup grape tomatoes', '4 tablespoons olive oil, divided', '4 sprigs fresh rosemary', '2 sprigs fresh thyme', '4 cloves garlic, minced', '1 cup red wine', '2 tablespoons butter', '8 ounces cream cheese', '1/4 cup mayo', '1/4 cup sour cream', '1/4 cup grated Parmesan', '1/2 teaspoon garlic powder', '1/4 teaspoon cayenne pepper', '1 bag spinach, roughly chopped', '1 14-ounce can quartered artichoke hearts, roughly chopped', '1 1/2 lb ground beef', '8 portebllo mushrooms, stemmed', '1 tablespoon balsamic vinegar', '2 tubes prepared polenta', '4 slices mozzarella cheese', '1 bag arugula'],
    instructions: [
      {
        step: 1,
        instruction: 'Preheat your oven to 400\u00B0F. Put the grape tomatoes in a small casserole dish with 3 tablespoons of the olive oil, 2 rosemary sprigs, 1 sprig of thyme, and the garlic. Roast for 20 minutes, or until the tomato skins burst. Transfer the tomatoes to a bowl with a slotted spoon; set aside. Strain the oil and reserve.'
      },
      {
        step: 2,
        instruction: 'Pour the wine into a small saucepan with the butter, and the remaining rosemary and thyme. Simmer over low heat, stirring often, until reduced to 1/4 cup. Discard solids.'
      },
      {
        step: 3,
        instruction: 'Heat the cream cheese in a small sauce pan just until very soft. Add the mayo, sour cream, grated parmesan, garlic powder, and cayenne, and stir to combine.'
      },
      {
        step: 4,
        instruction: 'In a dry frying pan, cook the bag of spinach down until soft and tender. The leaves will wilt quickly and provide their own moisture. Gently toss with tongs to make sure fresh leaves come in contact with the pan. Mix in with the cream cheese.'
      },
      {
        step: 5,
        instruction: 'Sauté the artichoke hearts in the same pan just to heat them up, and then add them to the spinach and cream cheese mixture. Combine well with a hand mixer.'
      },
      {
        step: 6,
        instruction: 'Form 8 small slider patties from the beef and season each side with salt and pepper. Cook as usual.'
      },
      {
        step: 7,
        instruction: 'Cook the portobello mushrooms in a frying pan with the remaining 1 tablespoon olive oil and the balsamic vinegar.'
      },
      {
        step: 8,
        instruction: 'Cut the polenta into 24 (3/4-inch thick) rounds. Grill or cook in a frying pan with a small bit of oil until browned, about 5 minutes per side.'
      },
      {
        step: 9,
        instruction: 'Build your sliders: 1. Bottom polenta bun, beef slider, roasted grape tomatoes, 1 slice mozzarella cheese, a drizzle of reserved olive oil, top polenta bun. 2. Bottom polenta bun, portobello mushroom, arugula, drizzle of red wine reduction, top polenta bun. 3. Bottom polenta bun, beef slider, heavy helping of spinach-artichoke mixture, top polenta bun.'
      },
    ],
  },
  {
    id: 27,
    name: 'Parnsips-Vous Francais Burger',
    price: '$5.95',
    servings: "8 sliders", 
    description: 'An all-beef burger served on a baguette with sprouts, bleu cheese aïoli (that\’s a fancy term for fancy mayo), and a dash of Dijon mustard. Comes with rosemary-lavender parsnip fries.',
    ingredients: ['6 parsnips', '2 teaspoons herbes de Provence', '1 teaspoon dried lavendar', '1 tablespoon olive oil', '1/4 cup bleu cheese', '1/4 cup mayo', '1 to 1 1/2 lb ground beef', '1 baguette', 'Dijon mustard', '2 cups alfalfa sprouts'],
    instructions: [
      {
        step: 1,
        instruction: 'Preheat your oven to 400\u00B0F. Put the parsnips in a large bowl with the herbes de Provence, lavendar, and olive oil. Toss to coat evenly, and spread on a baking sheet. Cook for 10-15 minutes, until the parsnips start to form some brown spots. Flip the parsnips, and cook 10-15 minutes longer. Set aside.'
      },
      {
        step: 2,
        instruction: 'You can melt the bleu cheese in a small saucepan and then combine with the mayo or crumble it cold and stir the two together.'
      },
      {
        step: 3,
        instruction: 'Form the beef into 8 small slider-sized patties, season each side with salt and pepper, and cook them as usual.'
      },
      {
        step: 4,
        instruction: 'Cut your baguette into 16 slider-sized "rounds." Spread the bleu cheese aioli on 8 rounds, adn a layer of Dijon on the remaining 8 rounds.'
      },
      {
        step: 5,
        instruction: 'Build your sliders: Dijon round, slider, alfalfa sprouts, aioli round. Serve with parsnip fries.'
      }
    ],
  },
  {
    id: 28,
    name: 'Bet It All on Black Garlic Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'Winner winner, burger dinner! This all-beef patty is topped with fresh mozzarella, spinach, homemade black garlic mayo and a dash of Sriracha hot sauce. Black garlic is soft and chewy, incredibly sweet, with an earthy aroma, and you don\’t need a pig to sniff it out. Those are truffles. You can find black garlic in specialty food markets and online.',
    ingredients: ['1 bulb black garlic, peeled', '1/2 cup mayonnaise', 'salt', 'Sriracha', '1 lb ground beef', 'black pepper', '1 ball mozzarella cheese, sliced', '4 buns', '1 bag baby spinach'],
    instructions: [
      {
        step: 1,
        instruction: 'Use a food processor to puree the black garlic. Mix in the mayo and add 1/4 teaspoon of salt - add more as needed. This mayo will be very strong, so add in Sriracha to taste.'
      },
      {
        step: 2,
        instruction: 'Form the beef into 4 slightly larger than usual patties. Season both sides lightly with salt and pepper. Cook the burgers as you normally would. Tent or cover to melt the mozzarella on top.'
      },
      {
        step: 3,
        instruction: 'Build your burger: Bottom bun, a handful of baby spinach, cheeseburger, a schmear of black garlic-Sriracha mayo, top bun.'
      },
    ],
  },
  {
    id: 29,
    name: 'Mission A-Corn-Plished Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'This all-beef patty is grilled and served with a sweet corn salsa on a roll. The sweetness of the corn salsa makes a tasty contrast with the savory taco seasoning. Also, the corn salsa is going to fall all over the place. Our advice? Relax and enjoy it both on the burger and on the side. Or melt some Mexican-style cheese onto your patties to hold the salsa in place, like a creamy little car seat for corn salsa.',
    ingredients: ['1 lb ground beef', '6 ounces or so of queso fresco (substitutions: mild French feta)', '4-6 tablespoons taco seasoning', '1 11-ounce can white shoepeg corn, drained', '1/2 yellow onion, diced', 'butter', '1 14.5-ounce can diced tomatoes, drained', '1/2 teaspoon salt', '1 tablespoon pepper', '1 bag arugula', '8 Vienna rolls'],
    instructions: [
      {
        step: 1,
        instruction: 'Season the beef with the taco seasoning and form into 4 patties; set aside.'
      },
      {
        step: 2,
        instruction: 'Place the corn in a dry frying pan set over high heat. Cook until the corn starts to blacken. Transfer to a large mixing bowl.'
      },
      {
        step: 3,
        instruction: 'Add the onions to the frying pan with a small bit of butter. Cook over medium heat until translucent. Add the diced tomatoes and cook until hot, then add to the corn, and toss together. Season with salt and pepper.'
      },
      {
        step: 4,
        instruction: 'Cook your burgers as you normally would. If you\'re using cheese, add it before the burgers finish cooking and tent or cover the patties to help it melt.'
      },
      {
        step: 5,
        instruction: 'Build your burgers: Bottom roll, burger, arugula, a heaping giant spoonful of corn salsa, top roll. Watch out! The corn salsa is going everywhere! Get under the table! Just kidding, you\'re fine.'
      }
    ],
  },
  {
    id: 30,
    name: 'Shoot Out At The Okra Corral Burger',
    price: '$5.95',
    servings: "4 burgers", 
    description: 'Fried green tomatoes and a homemade dill ranch dressing top a well-seasoned all-beef patty, all on a hot buttered bun. The heat from the combination of black, white, and cayenne peppers is cooled by the creamy ranch and fresh dill. Serve with a side of fried okra and ranch. So it\’s kind of a Shoot Out at the Okra Ranch Burger, but that\’s fine, right?',
    ingredients: ['2 cups buttermilk', '1/2 cup mayonnaise', '2-3 tablespoons chopped fresh dill (based on preference)', 'vegetable or canola oil, for frying', '4-5 green tomatoes, cut into 1/4-inch slices', '1 lb okra, cut into 1/2-inch pieces', '1 cup all purpose flour', '1/2 cup white cornmeal', '1 teaspoon cayenne pepper', '1 1/2 teaspoon onion powder, divided', '1 lb ground beef', '1/2 teaspoon white pepper', '4 buns', 'green leaf lettuce'],
    instructions: [
      {
        step: 1,
        instruction: 'Ranch dressing: Mix 1 cup buttermilk with 1/2 cup mayo in a bowl and stir vigorously. If it\'s too thin, add more mayo; if too thick, more buttermilk. Add 1/2 teaspoon salt, 1 teaspoon black pepper, and the chopped dill. Mix well.'
      },
      {
        step: 2,
        instruction: 'Heat your oil to about 350\u00B0F. Combine the flour and cornmeal in a large bowl. Mix in 1/2 teaspoon salt, 1/2 teaspoon black pepper, cayenne, and 1 teaspoon onion powder.'
      },
      {
        step: 3,
        instruction: 'Tomatoes: Put the remaining cup of buttermilk in a shallow bowl, coat the tomatoes with it, adn then dredge them across the flour/corn meal mixture (keep the buttermilk for the okra in the next step). Frry them until they are light brown in color. Using a slotted spoon, transfer the fried tomatoes to paper towels to drain.'
      },
      {
        step: 4,
        instruction: 'Okra: Coat them in the buttermilk, and dredge them in the flour/cornmeal mixture. Fry them until they are a golden brown color. Using a slotted spoon, transfer to paper towels to drain.'
      },
      {
        step: 5,
        instruction: 'Burgers: Season the beef with 1/2 teaspoon salt, 1 teaspoon black pepper, remaining 1/2 teaspoon onion powder, and the white pepper. Carefully form 4 patties. Cook them whichever way you like best.'
      },
      {
        step: 6,
        instruction: 'Build your burger: Bottom bun, lettuce, burger, fried tomatoes, ranch dressing, top bun. Serve the fried okra on the side, topped with even more ranch. Too much ranch? No such thing. Ever.'
      },
    ],
  },
];

module.exports = recipes;