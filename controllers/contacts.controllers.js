const Contact = require('../models/Contact.model')

const saveContact = (res, req, next) => {

    const { email, info } = req.body

    Contact
        .create({ email, info })
        .then(response => res.json(response))
        .catch(err => next(err))

}
module.exports = {
    saveContact
}