const express = require('express');
const router = express.Router();

// TEST: Get Request --> WORKS
router.get('/', (req, res) => {
  req.query('https://test1-api.rescuegroups.org/v5', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/vnd.api+json',
          'Authorization': 'MW6bKn54'
      }
  })
  .then((data) => data.json())
  .then((data) => console.log(data))
  res.send(data)
});
  
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