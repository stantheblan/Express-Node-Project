require('dotenv').config()
const Product = require('./models/products');

//connect to database
const db = require('./models/db')

const seedProducts =
[{
        name: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        price: 0.01,
        qty: 99
    }, 
    {
        name: 'Bones',
        description: 'It\'s just a bag of bones.',
        img: 'http://bluelips.com/prod_images_large/bones1.jpg',
        price: 2500,
        qty: 0
    }, 
    {
        name: 'Bins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 70,
        qty: 1
}];

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    console.log('seeded the db')
}

seedDB().then(() => {
    db.close();
})