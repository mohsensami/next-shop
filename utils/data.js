import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'John',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Jane',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt1',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/images/banner1.jpg',
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 3.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/images/banner2.jpg',
        },
        {
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 2.9,
            numReviews: 13,
            countInStock: 20,
            description: 'Smart looking pants',
        },
        {
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 95,
            brand: 'Zara',
            rating: 3.5,
            numReviews: 7,
            countInStock: 20,
            description: 'A popular pants',
        },
        {
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 75,
            brand: 'Casely',
            rating: 2.4,
            numReviews: 14,
            countInStock: 20,
            description: 'A popular pants',
        },
        {
            name: 'nice Pants',
            slug: 'nice-pants',
            category: 'Pants',
            image: '/images/pants4.jpg',
            price: 56,
            brand: 'Casely',
            rating: 2.6,
            numReviews: 9,
            countInStock: 15,
            description: 'A popular pants',
        },
        {
            name: 'Classic TShirt',
            slug: 'classic-tshirt',
            category: 'tshirt',
            image: '/images/tshirt.jpg',
            price: 49,
            brand: 'nice',
            rating: 4.3,
            numReviews: 16,
            countInStock: 19,
            description: 'A popular tshirt',
        },
        {
            name: 'Classic Suit',
            slug: 'classic-suit',
            category: 'suit',
            image: '/images/suit1.jpg',
            price: 78,
            brand: 'haco',
            rating: 5.5,
            numReviews: 29,
            countInStock: 8,
            description: 'A popular suit',
        },
        {
            name: 'Classic Suit',
            slug: 'classic-suit2',
            category: 'suit',
            image: '/images/suit2.jpg',
            price: 56,
            brand: 'haco',
            rating: 4.5,
            numReviews: 11,
            countInStock: 11,
            description: 'A popular suit',
        },
        {
            name: 'Classic Suit',
            slug: 'classic-suit3',
            category: 'suit',
            image: '/images/suit3.jpg',
            price: 88,
            brand: 'haco',
            rating: 5.9,
            numReviews: 5,
            countInStock: 12,
            description: 'A popular suit',
        },
        {
            name: 'Classic Suit',
            slug: 'classic-suit4',
            category: 'suit',
            image: '/images/suit4.jpg',
            price: 84,
            brand: 'haco',
            rating: 5.1,
            numReviews: 19,
            countInStock: 16,
            description: 'A popular suit',
        },
        {
            name: 'Beautiful Shoes',
            slug: 'beautiful-shoes',
            category: 'shoe',
            image: '/images/shoes1.jpg',
            price: 78,
            brand: 'weather',
            rating: 4.4,
            numReviews: 15,
            countInStock: 13,
            description: 'A beautiful shoe',
        },
    ],
};

export default data;
