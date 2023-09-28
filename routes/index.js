const router = require("express").Router()

const contactsRoutes = require("./contacts.routes");
router.use("/contacts", contactsRoutes);

const uploaderRoutes = require('./uploader.routes')
router.use("/uploader", uploaderRoutes)

module.exports = router