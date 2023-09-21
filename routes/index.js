module.exports = app => {

    const contactsRoutes = require("./contacts.routes");
    app.use("/api/contacts", contactsRoutes);
}