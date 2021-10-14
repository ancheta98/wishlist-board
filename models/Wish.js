const { Schema, model, Types } = require('mongoose');

const wishSchema = new Schema(
    {
        wishId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        wishText: {
            type: String,
            require: true,
            maxlength: 500,
        },
        createdAt: {
            type: Date,
            default: () => Date.now(),
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    },
);

const Wish = model('Wish', wishSchema);

module.exports = Wish;