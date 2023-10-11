const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    direcction: {
      type: String,
      required: [true, 'Email is required.'],
      lowercase: true,
      unique: true

    },
    name: {
      type: String,
      required: [true, 'Username is required.'],
    },
    info: {
      type: String,
      required: [true, 'info is required.'],
      minLength: [20, 'min 20 character'],
      maxLength: [500, 'max 500 character'],

    },
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
