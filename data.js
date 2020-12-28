var bcrypt = require('bcryptjs');

exports.data = {
    users: [
        {
            username: "Chinmoy",
            email: "admin@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            username: "John",
            email: "user@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: "Slim Shirt1",
            category: "Shirt",
            price: 2150,
            brand: "Cat's Eye",
            rating: 4.5,
            numberOfReviews: 10,
            description: "High quality product",
            image: 'images/d1.jpg',
            countInStock: 10
        },
        {
            name: "Slim Shirt2",
            category: "Shirt",
            price: 850,
            brand: "Yellow",
            rating: 4,
            numberOfReviews: 15,
            description: "High quality product",
            image: 'images/d2.jpg',
            countInStock: 10
        },
        {
            name: "Slim Shirt3",
            category: "Shirt",
            price: 1599,
            brand: "Plus Point",
            rating: 3,
            numberOfReviews: 5,
            description: "High quality product",
            image: 'images/d3.jpg',
            countInStock: 0
        },
        {
            name: "Slim Pant1",
            category: "Pant",
            price: 850,
            brand: "Cat's Eye",
            rating: 5,
            numberOfReviews: 30,
            description: "High quality product",
            image: 'images/d4.jpg',
            countInStock: 10
        },
        {
            name: "Slim Pant2",
            category: "Pant",
            price: 900,
            brand: "Yellow",
            rating: 4,
            numberOfReviews: 20,
            description: "High quality product",
            image: 'images/d5.jpg',
            countInStock: 10
        },
        {
            name: "Slim Pant3",
            category: "Pant",
            price: 750,
            brand: "Plus Point",
            numberOfReviews: 4,
            rating: 1,
            description: "High quality product",
            image: 'images/d6.jpg',
            countInStock: 10
        }
    ]
}