const mongoose = require('mongoose');


mongoose.set('bufferCommands', false);
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    records: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Record' }]
}, {timestamps: true});

const recSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    subject: String,
    value: Number,
    max_value: Number,
    category: String,
    date_done: String,
    // date_added: { type: Date, default: Date.now },
}, {
    timestamps: true
});
const Record = mongoose.model('Record', recSchema);
const User = mongoose.model('User', userSchema);
module.exports = { Record, User };