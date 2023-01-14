// Endpoints for external data
const { Router } = require('express');
const router = new Router();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', async (req, res) => {
    const response = await fetch('cccc');
    const data = await response.json();
    res.json(data);
});

module.exports = router;