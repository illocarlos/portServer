const router = require("express").Router()
const imageMiddlewares = require("../middlewares/Uploader.middleware")

const image = require('../controllers/upload.controllers')

router.post('/image', imageMiddlewares.single('imageData'), image)


module.exports = router