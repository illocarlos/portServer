const router = require('express').Router();

const { saveContacts } = require('../controllers/contacts.controllers');

router.post("/saveContacts", saveContacts);

module.exports = router;
