## Keywords
ROLE - the role of the component
NOTE - clarifications in code
TEST - console.logs to test code is running correctly

## Set-Up
Created with `touch` in command line: a `package.json` to keep track of all installed modules, `.gitignore` for files that don't need to be committed to repo, a `webpack.config.js` to bundle code, `README.md` to keep track of work in progress.

### Directories
**server** - to work with all back-end code using Express framework
    1. `index.js` to be our server

**client** - to work with all front-end code using React framework
    1. `App.jsx` to be our outer component

## Installations:
- babel-loader (npm install --save-dev babel-loader @babel/core)
- @babel/preset-react (npm install --save-dev @babel/preset-react)
- babel terminal tool (npm install --save-dev @babel/core @babel/cli)
- babel presets for converting ES2015 + into older JS (npm install --save-dev @babel/preset-env)
