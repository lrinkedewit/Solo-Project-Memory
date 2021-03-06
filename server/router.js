const express = require('express');
const router = express.Router();
// requiring fetch to use in express
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = 'https://test1-api.rescuegroups.org/v5/public/animals/breeds';
// TEST: Get Request --> WORKS
router.get('/', (req, res) => {
  console.log('entered the router')
  fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/vnd.api+json',
          'Authorization': 'MW6bKn54'
      },
  })
  .then(console.log(`fetch was successful`))
  .then((response) => response.json())
  .then((response) => {
    // NOTE: Object Destructuring
    const { data } = response;
    res.locals.name = data;
    console.log(data)
  })
  return res
  .status(200)
  .json({"data" : {...res.locals.name}})
});


// NOTE: Example from starWarsController
// starWarsController.getMoreCharacters = (req, res, next) => {
//   fetch('https://swapi.dev/api/people/?page=3')
//   // parse response from JSON to JS
//       .then(data => data.json())
//       .then((data) => {
//           // store data in res.locals to persist through middleware chain
//           const { results } = data;
//           res.locals.newCharacters = results;
//           return next();
//       })
// }

  
// TEST: Post Request --> WORKS
router.post('/', (req, res) => {
  res.send('Got a POST request')
})
  
// TEST: Put Request --> WORKS
router.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
  
// TEST: Delete Request --> WORKS
router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})


// ROLE: Exporting the router back to server.js
module.exports = router;