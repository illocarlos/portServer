const Work = require('../models/Work.model')

const listWork = (req, res, next) => {

    Work
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const workId = (req, res, next) => {

    const { work_id } = req.params

    Work
        .findById(work_id)
        .populate("attendees")
        .then(response => res.json(response))
        .catch(err => next(err))

}

const newWork = (req, res, next) => {

    const { image, description, link, attendees, } = req.body
    const { _id: owner } = req.payload

    Work
        .create({
            image,
            description,
            link,
            owner,
            attendees,
        })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const deleteWork = (req, res, next) => {
    const { work_id } = req.params

    Work
        .findByIdAndDelete(work_id)
        .then(() => res.sendStatus(204))
        .catch((err) => next(err))
}


module.exports = {
    listWork,
    workId,
    newWork,
    deleteWork,
}