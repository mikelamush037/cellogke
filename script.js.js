// Main JavaScript for CELLOGSMARTWEARKENYA

// Initialize Swiper Sliders
const heroSwiper = new Swiper('.hero-slider .swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

const productSwiper = new Swiper('.productSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// Products Data
const products = {
    categories: [
        {
            id: 'mens',
            name: "Men's Wear",
            badge: "Men's Wear",
            title: "Premium Men's Collection",
            image: "https://images.unsplash.com/photo-1558769132-cb1edd1b160a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            products: [
                {
                    name: "Formal Shirt",
                    price: "KES 1,499",
                    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                    name: "Denim Jeans",
                    price: "KES 2,199",
                    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                    name: "Casual Jacket",
                    price: "KES 3,499",
                    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                }
            ]
        },
        {
            id: 'womens',
            name: "Women's Wear",
            badge: "Women's Wear",
            title: "Elegant Women's Fashion",
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            products: [
                {
                    name: "Summer Dress",
                    price: "KES 2,299",
                    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                    name: "Casual Top",
                    price: "KES 1,199",
                    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                    name: "Office Skirt",
                    price: "KES 1,799",
                    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                }
            ]
        },
        {
            id: 'school',
            name: "School Accessories",
            badge: "School Items",
            title: "Back to School Essentials",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            products: [
                {
                    name: "School Bag",
                    price: "KES 1,899",
                    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                    name: "School Shoes",
                    price: "KES 2,499",
                    image: "https://images.unsplash.com/photo-1523480717984-24cba35ae1eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                    name: "School Uniform",
                    price: "KES 1,299",
                    image: "https://images.unsplash.com/photo-1624300629296-4e94c01df56f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                }
            ]
        },
        {
            id: 'kids',
            name: "Kids Fashion",
            badge: "Kids Fashion",
            title: "Adorable Kids Collection",
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            products: [
                {
                    name: "Kids T-Shirt Set",
                    price: "KES 999",
                    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                    name: "Kids Shorts",
                    price: "KES 799",
                    image: "https://images.unsplash.com/photo-1594736797933-d0e6e4f6f8a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                    name: "Kids Dress",
                    price: "KES 1,499",
                    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                }
            ]
        }
    ],
    
    schoolItems: [
        {
            id: 1,
            name: "Premium School Backpack - 20L",
            price: "KES 2,199",
            originalPrice: "KES 2,799",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.8
        },
        {
            id: 2,
            name: "Leather School Shoes - Black",
            price: "KES 2,999",
            originalPrice: "KES 3,499",
            image: "https://images.unsplash.com/photo-1523480717984-24cba35ae1eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.5
        },
        {
            id: 3,
            name: "Complete School Uniform Set",
            price: "KES 3,499",
            originalPrice: "KES 4,199",
            image: "https://images.unsplash.com/photo-1624300629296-4e94c01df56f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.9
        },
        {
            id: 4,
            name: "Stationery Set - 50 Pieces",
            price: "KES 1,299",
            originalPrice: "KES 1,699",
            image: "https://images.unsplash.com/photo-1587654780298-8c6d6b2c8b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.7
        },
        {
            id: 5,
            name: "Science Lab Coat",
            price: "KES 1,899",
            image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.6
        },
        {
            id: 6,
            name: "School Sports Kit",
            price: "KES 2,499",
            originalPrice: "KES 2,999",
            image: "https://images.unsplash.com/photo-1519861531473-920034658307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.8
        }
    ],
    
    featuredProducts: [
        {
            id: 1,
            name: "Men's Premium Casual Shirt - Blue Check",
            price: "KES 1,299",
            originalPrice: "KES 1,699",
            badge: "-20%",
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.2
        },
        {
            id: 2,
            name: "Women's Summer Floral Dress - Yellow",
            price: "KES 2,499",
            badge: "New",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.8
        },
        {
            id: 3,
            name: "Men's Casual Sneakers - White & Blue",
            price: "KES 3,499",
            badge: "Hot",
            image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.3
        },
        {
            id: 4,
            name: "Kids T-Shirt & Shorts Set - 3 Pieces",
            price: "KES 1,199",
            originalPrice: "KES 1,499",
            badge: "-15%",
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.7
        },
        {
            id: 5,
            name: "Waterproof School Backpack - 20L",
            price: "KES 2,199",
            badge: "Best Seller",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.9
        },
        {
            id: 6,
            name: "Women's Office Blazer - Navy Blue",
            price: "KES 3,999",
            originalPrice: "KES 4,599",
            badge: "-13%",
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.6
        },
        {
            id: 7,
            name: "Men's Formal Shoes - Brown Leather",
            price: "KES 4,299",
            badge: "Premium",
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.8
        },
        {
            id: 8,
            name: "Women's Handbag - Leather",
            price: "KES 2,799",
            originalPrice: "KES 3,299",
            badge: "-15%",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            rating: 4.7
        }
    ]
};

// Cart Data
let cart = {
    items: [
        { id: 1, name: "Men's Casual Shirt", price: 1499, quantity: 1, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
        { id: 2, name: "School Backpack", price: 2199, quantity: 1, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
        { id: 3, name: "Women's Dress", price: 2299, quantity: 1, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
    ],
    get total() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    get count() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }
};

// DOM Elements
const categoryGrid = document.getElementById('categoryGrid');
const schoolGrid = document.getElementById('schoolGrid');
const productSlider = document.getElementById('productSlider');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.querySelector('.cart-count');
const cartTotalEl = document.getElementById('cartTotal');
const accountBtn = document.getElementById('accountBtn');
const uploadFab = document.getElementById('uploadFab');
const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-btn');
const quickItems = document.querySelectorAll('.quick-item');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadSchoolItems();
    loadFeaturedProducts();
    updateCartDisplay();
    initializeCountdown();
    setupEventListeners();
    setupAnimations();
});

// Load Categories
function loadCategories() {
    categoryGrid.innerHTML = '';
    
    products.categories.forEach(category => {
        const categoryHTML = `
            <div class="category-card">
                <div class="category-img">
                    <img src="${category.image}" alt="${category.name}">
                </div>
                <div class="category-content">
                    <div class="category-badge">${category.badge}</div>
                    <h3 class="category-title">${category.title}</h3>
                    <div class="category-products">
                        ${category.products.map(product => `
                            <div class="category-product">
                                <div class="product-sample">
                                    <img src="${product.image}" alt="${product.name}">
                                </div>
                                <div class="product-name">${product.name}</div>
                                <div class="product-price">${product.price}</div>
                            </div>
                        `).join('')}
                    </div>
                    <a href="#" class="btn category-btn" data-category="${category.id}">Shop ${category.name}</a>
                </div>
            </div>
        `;
        categoryGrid.innerHTML += categoryHTML;
    });
}

// Load School Items
function loadSchoolItems() {
    schoolGrid.innerHTML = '';
    
    products.schoolItems.forEach(item => {
        const schoolHTML = `
            <div class="school-card" data-id="${item.id}">
                <div class="school-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="school-info">
                    <h3 class="school-title">${item.name}</h3>
                    <div class="school-price">${item.price} ${item.originalPrice ? `<span>${item.originalPrice}</span>` : ''}</div>
                    <button class="btn add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `;
        schoolGrid.innerHTML += schoolHTML;
    });
}

// Load Featured Products
function loadFeaturedProducts() {
    productSlider.innerHTML = '';
    
    products.featuredProducts.forEach(product => {
        const stars = getStarRating(product.rating);
        const productHTML = `
            <div class="swiper-slide">
                <div class="product-card" data-id="${product.id}">
                    <div class="product-badge">${product.badge}</div>
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-actions">
                            <div class="product-action-btn" onclick="addToWishlist(${product.id})"><i class="fas fa-heart"></i></div>
                            <div class="product-action-btn" onclick="quickView(${product.id})"><i class="fas fa-eye"></i></div>
                            <div class="product-action-btn" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i></div>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating">
                            <div class="stars">${stars}</div>
                            <span class="rating-count">(${product.rating})</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">${product.price}</span>
                            ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                        </div>
                        <button class="btn product-btn add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productSlider.innerHTML += productHTML;
    });
    
    // Reinitialize swiper after loading products
    productSwiper.update();
}

// Get Star Rating HTML
function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Countdown Timer
function initializeCountdown() {
    function updateCountdown() {
        const countdownDate = new Date();
        countdownDate.setDate(countdownDate.getDate() + 3); // 3 days from now
        
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector(".countdown").innerHTML = "<div class='countdown-ended'>Sale Ended!</div>";
        }
    }
    
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Cart Functions
function updateCartDisplay() {
    cartCount.textContent = cart.count;
    cartTotalEl.textContent = cart.total.toLocaleString();
}

function addToCart(productId) {
    // Find product in featured products
    const product = products.featuredProducts.find(p => p.id === productId) || 
                    products.schoolItems.find(p => p.id === productId);
    
    if (!product) return;
    
    // Parse price
    const price = parseInt(product.price.replace('KES ', '').replace(',', ''));
    
    // Check if product is already in cart
    const existingItem = cart.items.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({
            id: productId,
            name: product.name,
            price: price,
            quantity: 1,
            image: product.image
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`);
    updateCartPreview();
}

function removeFromCart(productId) {
    cart.items = cart.items.filter(item => item.id !== productId);
    updateCartDisplay();
    updateCartPreview();
    showNotification('Item removed from cart');
}

// Cart Preview
function updateCartPreview() {
    const cartPreview = document.querySelector('.cart-preview');
    if (!cartPreview) return;
    
    const cartItems = cartPreview.querySelector('.cart-items');
    const cartTotal = cartPreview.querySelector('.cart-preview-total span:last-child');
    
    cartItems.innerHTML = '';
    
    cart.items.forEach(item => {
        const itemHTML = `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">KES ${item.price.toLocaleString()} x ${item.quantity}</div>
                </div>
                <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-times"></i>
                </div>
            </div>
        `;
        cartItems.innerHTML += itemHTML;
    });
    
    cartTotal.textContent = `KES ${cart.total.toLocaleString()}`;
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
        <div>
            <div style="font-weight: 600;">Success!</div>
            <div style="font-size: 0.9rem;">${message}</div>
        </div>
    `;
    
    // Add CSS for animations
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Wishlist Function
function addToWishlist(productId) {
    const product = products.featuredProducts.find(p => p.id === productId);
    if (product) {
        showNotification(`${product.name} added to wishlist!`);
    }
}

// Quick View Function
function quickView(productId) {
    const product = products.featuredProducts.find(p => p.id === productId);
    if (product) {
        // In a real implementation, this would open a modal with product details
        alert(`Quick View: ${product.name}\nPrice: ${product.price}\nRating: ${product.rating}/5`);
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart button click
    cartBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const cartPreview = document.querySelector('.cart-preview');
        if (!cartPreview) {
            createCartPreview();
        } else {
            cartPreview.classList.toggle('active');
        }
    });
    
    // Close cart preview when clicking outside
    document.addEventListener('click', function(e) {
        const cartPreview = document.querySelector('.cart-preview');
        if (cartPreview && !cartPreview.contains(e.target) && !cartBtn.contains(e.target)) {
            cartPreview.classList.remove('active');
        }
    });
    
    // Account button
    accountBtn.addEventListener('click', function() {
        // In a real implementation, this would open a login modal or redirect
        window.location.href = '#';
    });
    
    // Search functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    // Quick access items
    quickItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            // In a real implementation, this would filter products by category
            showNotification(`Showing ${category} products`);
        });
    });
    
    // Add to cart buttons (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || 
            e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? 
                          e.target : e.target.closest('.add-to-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        }
        
        // Category buttons
        if (e.target.classList.contains('category-btn') || 
            e.target.closest('.category-btn')) {
            const button = e.target.classList.contains('category-btn') ? 
                          e.target : e.target.closest('.category-btn');
            const category = button.getAttribute('data-category');
            // In a real implementation, this would navigate to category page
            showNotification(`Navigating to ${category} category`);
        }
    });
    
    // Upload FAB
    uploadFab.addEventListener('click', function() {
        // Already handled by onclick in HTML
    });
}

// Create Cart Preview
function createCartPreview() {
    const cartPreview = document.createElement('div');
    cartPreview.className = 'cart-preview';
    cartPreview.innerHTML = `
        <h3>Shopping Cart</h3>
        <div class="cart-items">
            ${cart.items.map(item => `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">KES ${item.price.toLocaleString()} x ${item.quantity}</div>
                    </div>
                    <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-preview-total">
            <span>Total:</span>
            <span>KES ${cart.total.toLocaleString()}</span>
        </div>
        <div style="display: flex; gap: 10px;">
            <a href="cart.html" class="btn" style="flex: 1;">View Cart</a>
            <a href="#" class="btn btn-yellow" style="flex: 1;">Checkout</a>
        </div>
    `;
    
    cartBtn.parentNode.appendChild(cartPreview);
    cartPreview.classList.add('active');
}

// Search Function
function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        // In a real implementation, this would search products
        showNotification(`Searching for: "${query}"`);
    } else {
        searchInput.focus();
    }
}

// Setup Animations
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.category-card, .school-card, .benefit-card, .deal-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Utility Functions
function formatPrice(price) {
    return 'KES ' + price.toLocaleString();
}

// Export functions for HTML onclick
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.quickView = quickView;
window.removeFromCart = removeFromCart;