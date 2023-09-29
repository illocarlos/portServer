const router = require("express").Router()

const contactsRoutes = require("./contacts.routes");
router.use("/contacts", contactsRoutes);

const authRoutes = require('./auth.routes')
router.use("/auth", authRoutes);

const userRoutes = require('./user.routes')
router.use("/user", userRoutes);

const uploadRoutes = require('./upload.routes')
router.use("/upload", uploadRoutes)

const workRoutes = require('./work.routes')
router.use("/work", workRoutes)

module.exports = router