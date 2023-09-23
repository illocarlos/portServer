const Contact = require('../models/Contact.model')

const saveContacts = (req, res, next) => {

    const { email, info } = req.body

    Contact
        .create({ email, info })
        .then(response => res.json(response))
        .catch(err => next(err))

}

module.exports = {
    saveContacts
}
