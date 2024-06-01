var appMsg = require("./appMsg")
var userRepo = require("./userRepo")
var logger = require("./logger")
var _ = require("underscore")

// console.log(appMsg.firstMsg)
// console.log(appMsg.secondMsg)

// console.log(appMsg.MsgObject)

// console.log(appMsg())

// var msg = new appMsg()
// console.log(msg.first)

// console.log(userRepo.getUser())

// console.log(logger.log("this message is for logger to log"))

var textMsg = "This is a text message"
var isString = _.isString(textMsg)
var isDate = _.isDate(textMsg)

console.log("isString: " + isString)
console.log("isDate: " + isDate)
