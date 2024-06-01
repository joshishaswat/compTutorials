const { User } = require("./user-management")
const { Book } =  require("./book-management")

var firstUser = new User({"email":"john@example.com"})

var book1 = new Book({"title":"Red Mars", "author":"kim stanley robinson", "category":"fictional "});

console.log(firstUser) //instance
console.log()
console.log(book1) //instance
