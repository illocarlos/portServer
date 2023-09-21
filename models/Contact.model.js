const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      lowercase: true,
      trim: true
    },
    info: {
      type: String,
      required: [true, 'info is required.'],
      minLength: [20, 'min 20 character'],
      maxLength: [500, 'max 20 character'],
      unique: true,

    },
  },
  {
    timestamps: true
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
