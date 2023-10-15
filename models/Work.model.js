const { Schema, model } = require("mongoose");

const workSchema = new Schema(
    {
        workImage: {
            type: String,
            required: [true, 'photo requered'],

        },
        title: {
            type: String,
            minLength: [4, 'min 4 character'],

        },
        description: {
            type: String,
            required: [true, 'description is required.'],
            minLength: [4, 'min 4 character'],
            maxLength: [100, 'max 100 character'],
        },
        link: {
            type: String,


        },
        gitHub: {
            type: String,
            required: [true, 'info is required.'],

        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

    }
);

const Work = model("Work", workSchema);

module.exports = Work;
