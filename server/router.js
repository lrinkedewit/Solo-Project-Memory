const express = require('express');
const router = express.Router();

// TEST: Get Request
router.get('/', (req, res) => {
  res.send('Hello World!')
})
  
// TEST: Post Request
router.post('/', (req, res) => {
  res.send('Got a POST request')
})
  
// TEST: Put Request
router.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
  
// TEST: Delete Request
router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

// ROLE: Exporting the router back to server.js
module.exports = router;