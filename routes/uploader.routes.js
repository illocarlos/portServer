const router = require("express").Router()
const imageMiddlewares = require("../middlewares/Uploader.middleware")

const {
    image,
    images
} = require('../controllers/upload.controllers')

router.post('/image', imageMiddlewares.single('imageData'), image)
router.post('/images', imageMiddlewares.array('imagesData', 12), images)

module.exports = router