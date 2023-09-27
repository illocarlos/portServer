const Contact = require('../models/Contact.model')
const transporter = require('../config/transporter.config')

const saveContacts = (req, res, next) => {

    const { direcction, info } = req.body

    Contact

        .create({ direcction, info })
    transporter.sendMail({

        from: direcction,
        to: process.env.EMAIL_ADDRESS,
        subject: direcction,
        text: info,
        html: `<b>${info}</b>`,
    })
        .then(response => {
            console.log(process.env.EMAIL_ADDRESS)
            console.log(direcction)
            res.json(response)
        })

        .catch(err => next(err))

}

module.exports = {
    saveContacts
}
