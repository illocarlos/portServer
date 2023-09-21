const router = require('express').Router()



const {

    saveContact

} = require('../controllers/contacts.controllers')



router.post("/saveContact", saveContact)

module.exports = router