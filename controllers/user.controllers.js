const User = require('../models/User.model')
const Work = require('../models/Work.model')

const userId = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}


const editUser = (req, res, next) => {

    const { user_id } = req.params
    const { userData } = req.body

    User
        .findByIdAndUpdate(user_id, userData)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const addUserToWork = (req, res, next) => {
    const { workId, idUser } = req.body


    Work
        .findByIdAndUpdate(workId, { $addToSet: { attendees: idUser } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))
}


const removeUserToWork = (req, res, next) => {
    const { workId, idUser } = req.body
    const { _id } = idUser

    Work
        .findByIdAndUpdate(workId, { $pull: { attendees: _id } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))
}



module.exports = {
    userId,
    editUser,
    addUserToWork,
    removeUserToWork
}