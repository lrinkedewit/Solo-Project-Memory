## Keywords
- ROLE : the role of the component
- NOTE : clarifications in code
- TEST : console.logs to test code is running correctly

## Set-Up
Created with `touch` in command line: 
- `.gitignore` for files that don't need to be committed to repo
- `babel config.json` to compile all files into bundle.js before sending them to the browser
- `index.html` to serve our frontend and as entry point for webpack
- `package-lock.json` was created for module dependencies when running npm install
- `package.json` to keep track of all installed modules
- `README.md` to keep track of work in progress
- `webpack.config.js` to bundle code

### .gitignore
Added node modules to gitignore to ensure they are not cached every time we push our repo

### Directories
**client** - to work with all front-end code using React framework
- `App.jsx` to be our outer component
    
**server** - to work with all back-end code using Express framework
- `index.js` to be our server
- `router.js` to route all our middleware
- `controller.js` to work with specific middleware

**tests** - to test code
- `scratch.js` to play around with code

## Installations:
- babel-loader (npm install --save-dev babel-loader @babel/core)
- @babel/preset-react (npm install --save-dev @babel/preset-react)
- babel terminal tool (npm install --save-dev @babel/core @babel/cli)
- babel presets for converting ES2015 + into older JS (npm install --save-dev @babel/preset-env)
- express ($ npm install express --save)
- node-fetch (npm install node-fetch)

## Animal Breed IDs
1 = Alpaca(s)
2 = Bird(s)
3 = Cat(s)
4 = Chicken(s)
5 = Chinchilla(s)
6 = Cows
7 = Degus
8 = Dogs
9 = Donkeys
10 = Ducks
11 = Ferrets
12 = Fish
13 = Frogs
14 = Geckos
15 = Geese
16 = Gerbils
17 = Goats
18 = Groundhogs
19 = Guineapigs
20 = Hamsters
21 = Hedehogs
22 = Hermitcrabs
23 = Horses
24 = Iguanas
25 = Lizards
26 = Llama
27 = Mice
28 = Otters
29 = Pigs
30 = Ponies
31 = Prairiedogs
32 = Rabbits
33 = Rats
34 = Sheep
35 = Skunks
36 = Snakes
37 = Sugargliders
38 = Tarantulas
39 = Tortoises
40 = Turkeys
41 = Turtles

## Status of Adoption
1 = Available for Adoption
2 = Available for Sponsorship
3 = Adopted
4 = Domestication
5 = Euthenized
6 = Not Available
7 = Passed Away
8 = Released
9 = Transferred
10 = Treatement
11 = Deleted
12 = Returned
13 = Strayed
14 = Reclaimed
15 = Free Roaming
16 = Intake
17 = Hold
18 = Pending
19 = Stolen
20 = Available to Foster