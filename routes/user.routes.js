const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    removeUserToWork,
    userId,
    editUser,
    addUserToWork,
} = require('./../controllers/user.controllers')



router.get('/:user_id', userId)

router.post('/edit/:user_id', verifyToken, editUser)

router.post('/addUserToWork', addUserToWork)

router.post('/removeUserToWork', removeUserToWork)

module.exports = router