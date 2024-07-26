const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;