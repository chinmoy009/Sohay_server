const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true
});

const User = Mongoose.model('User', userSchema);

module.exports = User; 