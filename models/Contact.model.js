const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      lowercase: true,
    },
    info: {
      type: String,
      required: [true, 'info is required.'],
      minLength: [20, 'min 20 character'],
      maxLength: [500, 'max 20 character'],

    },
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
