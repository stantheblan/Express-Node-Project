require('dotenv').config()
const Product = require('./models/products');

//connect to database
const db = require('./models/db')

const seedProducts =
[{
        name: '1909-S VDB 1C',
        description: 'The only year that engraver Victor David Brenner\'s initials were on the Wheat Penny. 27,995,000 1909 VDB Lincoln cents were issued, but only 484,000 (1.7%) of those were struck at the San Francisco Mint.',
        img: 'https://images.pcgs.com/CoinFacts/41509630_167493463_2200.jpg',
        price: (117500),
        qty: (484000)
    }, 
    {
        name: '1943 1C',
        description: 'The 1943 silver colored penny is a wartime coin issue made of steel and coated with zinc. During World War II, the war effort required a lot of copper to make shell casings and munitions. In 1943 the penny was made out of zinc plated steel to save copper for the war effort.',
        img: 'https://images.pcgs.com/CoinFacts/39803108_198170506_800x800.jpg',
        price: (218500),
        qty: (648628000) 
    },
    {
        name: '1998-S 1C,  PR70RD DCAM',
        description: 'PCGS 1998-S Proof. Proof coinage refers to special early samples of a coin issue, historically made for checking the dies and for archival purposes, but nowadays often struck in greater numbers specially for coin collectors. Nearly all countries have issued proof coinage.',
        img: 'https://images.pcgs.com/CoinFacts/33252176_178573320_2200.jpg',
        price: (64),
        qty: (697)
    },
    {
        name: '1955 Doubled Die Obverse (DDO) 1C',
        description: 'The 1955 doubled die is one of the most famous die varieties in US coinage. Very few exist today in totally mint condition, as almost all were discovered while in circulation. Over the years, many counterfeits of this coin have surfaced. ',
        img: 'https://images.pcgs.com/CoinFacts/38634016_181679427_2200.jpg',
        price: (114000),
        qty: (40000)
    },
    {
        name: 'Whitman Coin Albums',
        description: 'This Whitman (9112) Lincoln Cents 1909-1995 album has seven pages. The album has a date range of 1909-1995. These strong, soil resistant albums are designed with thumb notches for easy window removal. Every album features a trademark grained leatherette cover. Coins are not included.',
        img: 'https://whitman.com/product_images/uploaded_images/coin-albums-banner.jpg',
        price: (25),
        qty: (5)
}];

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    console.log('seeded the db')
}

seedDB().then(() => {
    db.close();
})