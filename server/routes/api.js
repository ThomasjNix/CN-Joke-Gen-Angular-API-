/*jshint esversion:6*/

// Express router setup
const express = require('express'),
      router = express.Router(),
      axios = require('axios'),
      API_root = 'https://api.chucknorris.io';

// Default API route, redirect to home pagte
router.get('/', (req,res) => {
  res.redirect('/');
});

// Grab categories from API to load into dropdown
router.get('/categories', (req,res) => {
  axios.get(`${API_root}/jokes/categories`)
  .then(categories => {
    res.status(200).json(categories.data);
  }).catch(error => {
    res.status(500).send(error);
  });
});

// Generate random joke, no category selected (any category)
router.get('/random', (req, res) => {
  axios.get(`${API_root}/jokes/random`)
  .then(randJoke => {
    res.status(200).json(randJoke.data);
  })
  .catch(error => {
    res.status(500).send(error);
  });
});

// Generate random joke with specific category selected
router.get('/random/:category', (req, res) => {
  axios.get(`${API_root}/jokes/random?category=${req.params.category}`)
  .then(randJoke => {
    res.status(200).json(randJoke.data);
  })
  .catch(error => {
    res.status(500).send(error);
  });
});
module.exports = router;
