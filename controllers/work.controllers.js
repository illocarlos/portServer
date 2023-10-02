const Work = require('../models/Work.model')

const WorkList = (req, res, next) => {

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

    const { workImage, description, link, attendees, gitHub } = req.body
    const { _id: owner } = req.payload

    Work
        .create({ workImage, description, link, owner, attendees, gitHub })
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
    WorkList,
    workId,
    newWork,
    deleteWork,
}