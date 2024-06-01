// single property
module.exports.firstMsg = "Hello World"
module.exports.secondMsg = "This is second Msg"

// an object
module.exports.MsgObject = {
	"id": 1,
	"morning": "Good Morning"
}

// a function
module.exports = function() {
	return "this is a message"
}

// constructor method
module.exports = function() {
	//by using "this", we are implying that it is a constructor method
	this.first = "this is a message"
}
