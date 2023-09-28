const router = require("express").Router()

const contactsRoutes = require("./contacts.routes");
router.use("/contact", contactsRoutes);

const authRoutes = require('./auth.routes')
router.use("/auth", authRoutes);

const userRoutes = require('./user.routes')
router.use("/user", userRoutes);

const uploaderRoutes = require('./uploader.routes')
router.use("/uploader", uploaderRoutes)

const workRoutes = require('./work.routes')
router.use("/work", workRoutes)

module.exports = router