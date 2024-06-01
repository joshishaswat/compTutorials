var Book = function(args) {
	var book = {}

	book.title = args.title
	book.author = args.author
	book.category = args.category

	return book
}

module.exports = Book
