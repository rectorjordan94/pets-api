// import dependencies
const mongoose = require('mongoose')

// toy is a subdocument, NOT A MODEL
// toy will be part of the toys array added to specific pets
// since we only need the schema, we can skip destructuring from mongoose

const toySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String,
    },
    isSqueaky: {
        type: Boolean,
        required: true,
        default: false
    },
    condition: {
        type: String,
        // here we'll use enum, which means we can only use specific strings for this field
        // enum is a validator on the type String that says "you can only use one of the values within this array"
        enum: ['new', 'used', 'disgusting'],
        default: 'new'
        // extra important to give a default for enum
    }
}, { timestamps: true })

module.exports = toySchema