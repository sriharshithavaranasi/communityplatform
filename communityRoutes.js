const express = require('express');
const router = express.Router();
const Community = require('../models/Community');

// Create a new community
router.post('/create', (req, res) => {
    const newCommunity = new Community({
        name: req.body.name,
        description: req.body.description
    });

    newCommunity.save()
        .then(community => res.json(community))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Get all communities
router.get('/', (req, res) => {
    Community.find()
        .then(communities => res.json(communities))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Delete a community by ID
router.delete('/:id', (req, res) => {
    Community.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Get a community by ID
router.get('/:id', (req, res) => {
    Community.findById(req.params.id)
        .then(community => res.json(community))
        .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
