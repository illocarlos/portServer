const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    listWork,
    workId,
    newWork,
    deleteWork,

} = require('../controllers/work.controllers')

router.get('/listWork', listWork)

router.get('/:work_id', workId)

router.post('/newWork', verifyToken, newWork)

router.delete('/delete/:work_id', verifyToken, deleteWork)



module.exports = router