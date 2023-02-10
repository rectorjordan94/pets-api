const mongoose = require('mongoose')

const toySchema = require('./toy')

// PET -> has an owner, a name, a type, an age, adoptable(boolean)
// eventually each pet will have a toys array
// this model will use virtuals to produce additional data on each pet

const petSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true
		},
		adoptable: {
			type: Boolean,
			required: true
		},
		toys: [toySchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
	},
	{
		timestamps: true,
		// since we're adding virtuals to our pet model
		// we need to tell express to include them when we want them
		toObject: { virtuals: true },
		toJSON: { virtuals: true }
	}
)

// virtuals go here
// remember these are virtual properties, that use existing data to add a property whenever we retrieve these documents
petSchema.virtual('fullTitle').get(function () {
	return `${this.name} the ${this.type}`
})

// this virtual will tell whether the pet is a baby or not based on its age
petSchema.virtual('isABaby').get(function () {
	if (this.age < 5) {
		return `Yeah, they're just a baby`
	} else if (this.age >= 5 && this.age < 10) {
		return 'Not really a baby, but still a baby'
	} else {
		return 'Old grumpy bastard'
	}
})

module.exports = mongoose.model('Example', petSchema)
