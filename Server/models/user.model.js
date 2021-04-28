const mongoose = require('mongoose');

const User = mongoose.model('User', {
	originQuestion: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	isTranslated: {
		type: Boolean,
		default: false,
	},
	translatedAnswer: {
		type: String,
		required: true,
		default: 'random answer',
	},
});

module.exports = User;
