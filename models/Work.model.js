const { Schema, model } = require("mongoose");

const workSchema = new Schema(
    {
        image: {
            type: String,
            required: [true, 'photo requered'],
        },
        description: {
            type: String,
            required: [true, 'description is required.'],
            minLength: [4, 'min 4 character'],
            maxLength: [20, 'max 20 character'],
        },
        link: {
            type: String,
            required: [true, 'info is required.'],
            maxLength: [500, 'max 20 character'],

        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        attendees: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
    }
);

const Work = model("Work", workSchema);

module.exports = Work;
