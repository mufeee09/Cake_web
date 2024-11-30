// Cake data
const cakes = [
    {
        name: 'Chocolate Dream',
        description: 'Rich chocolate layers with ganache filling',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
    },
    {
        name: 'Vanilla Bliss',
        description: 'Light vanilla sponge with buttercream',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=500&q=80'
    },
    {
        name: 'Red Velvet',
        description: 'Classic red velvet with cream cheese frosting',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=500&q=80'
    },
    {
        name: 'Strawberry Delight',
        description: 'Fresh strawberry cake with whipped cream',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?w=500&q=80'
    }
];

// Function to format price
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// Function to create cake cards
function createCakeCards() {
    const cakeGrid = document.getElementById('cakeGrid');
    
    cakes.forEach(cake => {
        const cakeCard = document.createElement('div');
        cakeCard.className = 'cake-card';
        
        cakeCard.innerHTML = `
            <img src="${cake.image}" alt="${cake.name}" class="cake-image">
            <div class="cake-info">
                <h3>${cake.name}</h3>
                <p>${cake.description}</p>
                <p class="cake-price">${formatPrice(cake.price)}</p>
            </div>
        `;
        
        cakeGrid.appendChild(cakeCard);
    });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    createCakeCards();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});