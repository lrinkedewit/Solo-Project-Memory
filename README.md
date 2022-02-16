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

