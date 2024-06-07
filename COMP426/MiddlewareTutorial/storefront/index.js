const express = require('express')

const app = express()

// Route for handling get request for path /
app.get('/', (request, response) => {
	response.send('response for GET request')
})

// Route for handling post request for path /products
app.post('/products', (request, response) => {
	response.json()
})

// Using express.static for Serving Static Assets
app.use(express.static('images'))
app.use(express.static('htmls'))

app.get('product', (request, response) => {
	response.sendFile("productsample.html")
})

// Using express.js for parsing JSON payloads
	// Attach the express.json middleware to route "/products"
app.use('/products', express.json({ limits: 100 }))

	// Handle post request for path /products
app.post('/products', (request, response) => {
	
	const products = []
	
	// {"name": "furniture", "brand": "century", "price": "1067.67"}
	
	// JSON payload is parsed to extract
	
	const name = request.body.name
	const brand = request.body.brand
	const category = request.body.category

	console.log(name + " " + brand + " " + category)

	response.json()
})

// Process URL encoded fields submitted through HTTP form object
app.use(express.urlencoded({extended:false}))

// Own middleware to check if JSON content exists
const requireJsonContent = (request, response, next) => {
	if (request.headers['content-type'] !== 'application/json') {
		response.status(400).send('Server requires application/json')
	} else {
		next()
	}
}

app.post('/products', requireJsonContent, (request, response) => {
	response.json()
})

// Handle multiple middleware functions
	// handle post request for path /products
app.post('/products',
	// first function in the chain will check for JSON content
	requireJsonContent,

	// second function will check for valid product category
	// in the request if the first function detects JSON
	(request, response) => {
		const category = request.body.category
		if (category != "Electronics") {
			response.status(400).send('Server requires application/json')
		} else {
			next()
		}
	}
)

response.json(
	{
		productID: "12345",
		result: "success"
	}
)

// Middleware function for all requests
const requestLogger = (request, response, next) => {
	console.log(`${request.method} url:: ${request.url}`)
	next()
}

app.use(requestLogger)

// Error handling middleware function in Express
function customErrorHandler(error, request, response, next) {
	// Error handling middleware functionality
}

const errorLogger = (error, request, response, next) => {
	console.log(`error ${err.message}`)
	next(error) // calling next middleware
}

// Using Third-Party Middleware
const morgan = require('morgan')

app.use(morgan('tiny'))

// Start the server
app.listen(3000,
	() => console.log('Server listening on port 3000.'))



