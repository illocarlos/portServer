const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    WorkList,
    workId,
    newWork,
    deleteWork,

} = require('../controllers/work.controllers')

router.get('/listWork', WorkList)

router.get('/:work_id', workId)

router.post('/newWork', verifyToken, newWork)

router.delete('/delete/:work_id', verifyToken, deleteWork)



module.exports = router