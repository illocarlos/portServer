const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    direcction: {
      type: String,
      required: [true, 'Email is required.'],
      lowercase: true,

    },
    name: {
      type: String,
      required: [true, 'name is required.'],
      minLength: [4, 'min 4 character'],
      maxLength: [20, 'max 20 character'],
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
