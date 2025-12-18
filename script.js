// Property data with multiple images
const properties = [
    {
        id: 1,
        title: "Lakeview Paradise Villa",
        type: "villa",
        location: "lake-malawi",
        price: 120,
        bedrooms: 3,
        bathrooms: 2,
        guests: 6,
        amenities: ["wifi", "pool", "parking", "kitchen", "ac", "tv"],
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
        ],
        badge: "Popular",
        rating: 4.8
    },
    {
        id: 2,
        title: "Modern City Center Apartment",
        type: "apartment",
        location: "lilongwe",
        price: 65,
        bedrooms: 2,
        bathrooms: 1,
        guests: 4,
        amenities: ["wifi", "parking", "kitchen", "ac", "tv", "washer"],
        images: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
        ],
        badge: "New",
        rating: 4.5
    },
    {
        id: 3,
        title: "Secluded Mountain Cabin",
        type: "cabin",
        location: "zomba",
        price: 85,
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        amenities: ["wifi", "kitchen", "fireplace", "bbq", "hiking"],
        images: [
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
        ],
        badge: "Discount",
        rating: 4.9
    },
    {
        id: 4,
        title: "Sandy Beach Retreat",
        type: "beach-house",
        location: "lake-malawi",
        price: 95,
        bedrooms: 2,
        bathrooms: 2,
        guests: 5,
        amenities: ["wifi", "parking", "kitchen", "beach-access", "bbq", "ac"],
        images: [
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
        ],
        rating: 4.7
    },
    {
        id: 5,
        title: "Luxury Lakeside Villa",
        type: "villa",
        location: "lake-malawi",
        price: 210,
        bedrooms: 4,
        bathrooms: 3,
        guests: 8,
        amenities: ["wifi", "pool", "parking", "kitchen", "ac", "tv", "gym", "sauna"],
        images: [
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
        ],
        badge: "Luxury",
        rating: 4.9
    },
    {
        id: 6,
        title: "Cozy Blantyre Apartment",
        type: "apartment",
        location: "blantyre",
        price: 55,
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        amenities: ["wifi", "kitchen", "tv", "ac"],
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
        ],
        rating: 4.3
    },
    {
        id: 7,
        title: "Mulanje Mountain Lodge",
        type: "house",
        location: "mulanje",
        price: 125,
        bedrooms: 3,
        bathrooms: 2,
        guests: 6,
        amenities: ["wifi", "parking", "kitchen", "fireplace", "hiking", "bbq"],
        images: [
            "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
        ],
        badge: "Mountain View",
        rating: 4.8
    },
    {
        id: 8,
        title: "Zomba Forest Retreat",
        type: "cabin",
        location: "zomba",
        price: 75,
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        amenities: ["wifi", "kitchen", "fireplace", "bbq", "hiking"],
        images: [
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=70"
        ],
        rating: 4.6
    }
];

// DOM elements
const propertiesList = document.getElementById('propertiesList');
const applyFiltersBtn = document.getElementById('applyFilters');
const resetFiltersBtn = document.getElementById('resetFilters');
const filterType = document.getElementById('filterType');
const filterPrice = document.getElementById('filterPrice');
const filterBedrooms = document.getElementById('filterBedrooms');
const filterBathrooms = document.getElementById('filterBathrooms');
const filterLocation = document.getElementById('filterLocation');
const sortBy = document.getElementById('sortBy');
const amenitiesCheckboxes = document.querySelectorAll('input[name="amenities"]');
const mainSearchForm = document.getElementById('mainSearchForm');
const searchLocation = document.getElementById('searchLocation');
const checkInDate = document.getElementById('checkInDate');
const checkOutDate = document.getElementById('checkOutDate');
const guests = document.getElementById('guests');

// Modal functionality elements
const loginModal = document.getElementById('loginModal');
const hostModal = document.getElementById('hostModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const hostBtn = document.getElementById('hostBtn');
const closeButtons = document.querySelectorAll('.close-modal');

// Hamburger menu elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileLinks = document.querySelectorAll('.nav-mobile a');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');
const mobileSignupBtn = document.getElementById('mobileSignupBtn');

// Property Detail Modal Elements (we'll create these dynamically)
let propertyDetailModal;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProperties(properties);
    setupEventListeners();
    createPropertyDetailModal();
    
    // Set minimum dates for check-in/check-out
    const today = new Date().toISOString().split('T')[0];
    checkInDate.min = today;
    checkOutDate.min = today;
});

// Create property detail modal dynamically
function createPropertyDetailModal() {
    propertyDetailModal = document.createElement('div');
    propertyDetailModal.className = 'modal';
    propertyDetailModal.id = 'propertyDetailModal';
    propertyDetailModal.innerHTML = `
        <div class="modal-content property-detail-modal">
            <div class="modal-header">
                <h3>Property Details</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="property-detail-images">
                    <div class="main-image-container">
                        <div class="main-image" id="propertyDetailMainImage"></div>
                        <button class="carousel-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                        <button class="carousel-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div class="image-thumbnails" id="propertyDetailThumbnails"></div>
                </div>
                <div class="property-detail-info">
                    <div class="property-detail-header">
                        <div>
                            <h2 id="propertyDetailTitle"></h2>
                            <div class="property-detail-location" id="propertyDetailLocation"></div>
                        </div>
                        <div class="property-detail-rating" id="propertyDetailRating"></div>
                    </div>
                    <div class="property-detail-type" id="propertyDetailType"></div>
                    
                    <div class="property-detail-features">
                        <div class="feature">
                            <i class="fas fa-bed"></i>
                            <span id="propertyDetailBedrooms"></span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-bath"></i>
                            <span id="propertyDetailBathrooms"></span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-users"></i>
                            <span id="propertyDetailGuests"></span>
                        </div>
                    </div>
                    
                    <div class="property-detail-price-section">
                        <div class="price-display">
                            <span class="price" id="propertyDetailPrice"></span>
                            <span class="price-unit">/ night</span>
                        </div>
                        <button class="btn btn-primary" id="bookPropertyBtn">Book Now</button>
                    </div>
                    
                    <div class="property-detail-description">
                        <h3>About this property</h3>
                        <p id="propertyDetailDescription"></p>
                    </div>
                    
                    <div class="property-detail-amenities">
                        <h3>Amenities</h3>
                        <div class="amenities-grid" id="propertyDetailAmenities"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(propertyDetailModal);
}

// Set up event listeners
function setupEventListeners() {
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);
    mainSearchForm.addEventListener('submit', handleMainSearch);
    
    // Update check-out min date when check-in changes
    checkInDate.addEventListener('change', function() {
        checkOutDate.min = this.value;
    });
    
    // Hamburger menu
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Mobile login/signup buttons
    mobileLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        mobileMenu.classList.remove('active');
    });
    
    mobileSignupBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        document.querySelector('[data-tab="register"]').click();
        mobileMenu.classList.remove('active');
    });
    
    // Modal functionality
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });
    
    signupBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        document.querySelector('[data-tab="register"]').click();
    });
    
    hostBtn.addEventListener('click', () => {
        hostModal.style.display = 'flex';
    });
    
    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            hostModal.style.display = 'none';
            propertyDetailModal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === hostModal) {
            hostModal.style.display = 'none';
        }
        if (e.target === propertyDetailModal) {
            propertyDetailModal.style.display = 'none';
        }
    });
    
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`${tabId}Tab`).classList.add('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Render properties to the page
function renderProperties(propertiesToRender) {
    if (propertiesToRender.length === 0) {
        propertiesList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No properties found</h3>
                <p>Try adjusting your filters to find more options.</p>
            </div>
        `;
        return;
    }
    
    propertiesList.innerHTML = propertiesToRender.map(property => `
        <div class="property-card" data-id="${property.id}">
            ${property.badge ? `<div class="property-badge">${property.badge}</div>` : ''}
            <div class="property-img-container">
                <img src="${property.images[0]}" alt="${property.title}" class="property-img">
                <div class="image-count">
                    <i class="fas fa-camera"></i>
                    <span>${property.images.length}</span>
                </div>
            </div>
            <div class="property-details">
                <div class="property-header">
                    <div class="property-type">${property.type.toUpperCase()}</div>
                    <div class="property-rating">
                        <i class="fas fa-star"></i>
                        <span>${property.rating}</span>
                    </div>
                </div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${getLocationName(property.location)}</span>
                </div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.bedrooms} ${property.bedrooms === 1 ? 'bedroom' : 'bedrooms'}</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms} ${property.bathrooms === 1 ? 'bathroom' : 'bathrooms'}</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-users"></i>
                        <span>${property.guests} guests</span>
                    </div>
                </div>
                <div class="property-amenities-preview">
                    ${property.amenities.slice(0, 3).map(amenity => 
                        `<span class="amenity-preview">${getAmenityIcon(amenity)}</span>`
                    ).join('')}
                    ${property.amenities.length > 3 ? 
                        `<span class="amenity-more">+${property.amenities.length - 3} more</span>` : 
                        ''
                    }
                </div>
                <div class="property-price">
                    <div class="price">$${property.price} <span>/ night</span></div>
                    <div class="property-actions">
                        <button class="btn btn-outline view-details-btn" data-property="${property.id}">View Details</button>
                        <button class="btn btn-primary book-btn" data-property="${property.title}">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to book buttons
    document.querySelectorAll('.book-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const propertyTitle = this.getAttribute('data-property');
            openWhatsApp(propertyTitle);
        });
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const propertyId = parseInt(this.getAttribute('data-property'));
            showPropertyDetails(propertyId);
        });
    });
    
    // Make entire property card clickable
    document.querySelectorAll('.property-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.book-btn') && !e.target.closest('.view-details-btn')) {
                const propertyId = parseInt(this.getAttribute('data-id'));
                showPropertyDetails(propertyId);
            }
        });
    });
}

// Get location name from location value
function getLocationName(locationValue) {
    const locations = {
        'lake-malawi': 'Lake Malawi',
        'lilongwe': 'Lilongwe',
        'zomba': 'Zomba Plateau',
        'mulanje': 'Mulanje Massif',
        'blantyre': 'Blantyre'
    };
    return locations[locationValue] || locationValue;
}

// Get amenity icon
function getAmenityIcon(amenity) {
    const icons = {
        'wifi': 'fas fa-wifi',
        'pool': 'fas fa-swimming-pool',
        'parking': 'fas fa-parking',
        'kitchen': 'fas fa-utensils',
        'ac': 'fas fa-snowflake',
        'tv': 'fas fa-tv',
        'washer': 'fas fa-soap',
        'fireplace': 'fas fa-fire',
        'bbq': 'fas fa-fire',
        'hiking': 'fas fa-hiking',
        'beach-access': 'fas fa-umbrella-beach',
        'gym': 'fas fa-dumbbell',
        'sauna': 'fas fa-hot-tub'
    };
    return `<i class="${icons[amenity] || 'fas fa-check'}"></i>`;
}

// Get amenity display name
function getAmenityName(amenity) {
    const names = {
        'wifi': 'WiFi',
        'pool': 'Swimming Pool',
        'parking': 'Parking',
        'kitchen': 'Kitchen',
        'ac': 'Air Conditioning',
        'tv': 'TV',
        'washer': 'Washer',
        'fireplace': 'Fireplace',
        'bbq': 'BBQ Grill',
        'hiking': 'Hiking Access',
        'beach-access': 'Beach Access',
        'gym': 'Gym',
        'sauna': 'Sauna'
    };
    return names[amenity] || amenity;
}

// Show property details modal
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    // Set property details
    document.getElementById('propertyDetailTitle').textContent = property.title;
    document.getElementById('propertyDetailLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${getLocationName(property.location)}`;
    document.getElementById('propertyDetailType').textContent = property.type.toUpperCase();
    document.getElementById('propertyDetailRating').innerHTML = `<i class="fas fa-star"></i> ${property.rating}`;
    document.getElementById('propertyDetailPrice').textContent = `$${property.price}`;
    document.getElementById('propertyDetailBedrooms').textContent = `${property.bedrooms} ${property.bedrooms === 1 ? 'bedroom' : 'bedrooms'}`;
    document.getElementById('propertyDetailBathrooms').textContent = `${property.bathrooms} ${property.bathrooms === 1 ? 'bathroom' : 'bathrooms'}`;
    document.getElementById('propertyDetailGuests').textContent = `${property.guests} guests`;
    
    // Set description
    document.getElementById('propertyDetailDescription').textContent = 
        `Welcome to ${property.title}, a beautiful ${property.type} located in ${getLocationName(property.location)}. This property offers ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, and can accommodate up to ${property.guests} guests. Enjoy your stay with all the modern amenities provided.`;
    
    // Set amenities
    const amenitiesGrid = document.getElementById('propertyDetailAmenities');
    amenitiesGrid.innerHTML = property.amenities
        .map(amenity => `
            <div class="amenity-item">
                ${getAmenityIcon(amenity)}
                <span>${getAmenityName(amenity)}</span>
            </div>
        `).join('');
    
    // Set images
    const mainImageContainer = document.querySelector('.main-image');
    const thumbnailsContainer = document.getElementById('propertyDetailThumbnails');
    
    mainImageContainer.innerHTML = '';
    thumbnailsContainer.innerHTML = '';
    
    // Add images to carousel
    property.images.forEach((image, index) => {
        // Main image
        const img = document.createElement('img');
        img.src = image;
        img.alt = `${property.title} - Image ${index + 1}`;
        img.className = index === 0 ? 'active' : '';
        mainImageContainer.appendChild(img);
        
        // Thumbnail
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}">`;
        thumb.addEventListener('click', () => {
            // Update active images
            document.querySelectorAll('.main-image img').forEach(img => img.classList.remove('active'));
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            
            mainImageContainer.children[index].classList.add('active');
            thumb.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumb);
    });
    
    // Set up carousel navigation
    let currentImageIndex = 0;
    const totalImages = property.images.length;
    
    function updateCarousel() {
        document.querySelectorAll('.main-image img').forEach(img => img.classList.remove('active'));
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        
        document.querySelectorAll('.main-image img')[currentImageIndex].classList.add('active');
        document.querySelectorAll('.thumbnail')[currentImageIndex].classList.add('active');
    }
    
    // Remove existing event listeners
    const prevBtn = propertyDetailModal.querySelector('.prev-btn');
    const nextBtn = propertyDetailModal.querySelector('.next-btn');
    
    // Clone buttons to remove old event listeners
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    
    // Add new event listeners
    newPrevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });
    
    newNextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateCarousel();
    });
    
    // Set up book button
    const bookBtn = document.getElementById('bookPropertyBtn');
    bookBtn.onclick = () => {
        openWhatsApp(property.title);
        propertyDetailModal.style.display = 'none';
    };
    
    // Show modal
    propertyDetailModal.style.display = 'flex';
    
    // Close modal when clicking the X button
    propertyDetailModal.querySelector('.close-modal').onclick = () => {
        propertyDetailModal.style.display = 'none';
    };
    
    // Close modal with Escape key
    document.addEventListener('keydown', function handleEscape(e) {
        if (e.key === 'Escape' && propertyDetailModal.style.display === 'flex') {
            propertyDetailModal.style.display = 'none';
            document.removeEventListener('keydown', handleEscape);
        }
    });
}

// Apply filters to properties
function applyFilters() {
    const typeValue = filterType.value;
    const priceValue = filterPrice.value;
    const bedroomsValue = filterBedrooms.value;
    const bathroomsValue = filterBathrooms.value;
    const locationValue = filterLocation.value;
    const sortValue = sortBy.value;
    
    // Get selected amenities
    const selectedAmenities = [];
    amenitiesCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedAmenities.push(checkbox.value);
        }
    });
    
    // Filter properties
    let filteredProperties = properties.filter(property => {
        // Type filter
        if (typeValue && property.type !== typeValue) return false;
        
        // Price filter
        if (priceValue) {
            if (priceValue === '0-50' && property.price > 50) return false;
            if (priceValue === '50-100' && (property.price <= 50 || property.price > 100)) return false;
            if (priceValue === '100-200' && (property.price <= 100 || property.price > 200)) return false;
            if (priceValue === '200+' && property.price <= 200) return false;
        }
        
        // Bedrooms filter
        if (bedroomsValue) {
            if (bedroomsValue === '1' && property.bedrooms !== 1) return false;
            if (bedroomsValue === '2' && property.bedrooms !== 2) return false;
            if (bedroomsValue === '3' && property.bedrooms < 3) return false;
        }
        
        // Bathrooms filter
        if (bathroomsValue) {
            if (bathroomsValue === '1' && property.bathrooms !== 1) return false;
            if (bathroomsValue === '2' && property.bathrooms !== 2) return false;
            if (bathroomsValue === '3' && property.bathrooms < 3) return false;
        }
        
        // Location filter
        if (locationValue && property.location !== locationValue) return false;
        
        // Amenities filter
        if (selectedAmenities.length > 0) {
            for (let amenity of selectedAmenities) {
                if (!property.amenities.includes(amenity)) return false;
            }
        }
        
        return true;
    });
    
    // Sort properties
    if (sortValue === 'price-low') {
        filteredProperties.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        filteredProperties.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating') {
        filteredProperties.sort((a, b) => b.rating - a.rating);
    }
    
    // Render filtered properties
    renderProperties(filteredProperties);
}

// Reset all filters
function resetFilters() {
    filterType.value = '';
    filterPrice.value = '';
    filterBedrooms.value = '';
    filterBathrooms.value = '';
    filterLocation.value = '';
    sortBy.value = 'recommended';
    
    amenitiesCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Render all properties
    renderProperties(properties);
}

// Handle main search form submission
function handleMainSearch(e) {
    e.preventDefault();
    
    const locationQuery = searchLocation.value.toLowerCase();
    const guestsValue = guests.value;
    
    // Filter properties based on search criteria
    let filteredProperties = properties.filter(property => {
        // Location search
        if (locationQuery) {
            const locationMatch = getLocationName(property.location).toLowerCase().includes(locationQuery);
            const titleMatch = property.title.toLowerCase().includes(locationQuery);
            if (!locationMatch && !titleMatch) return false;
        }
        
        // Guests filter
        if (guestsValue && property.guests < parseInt(guestsValue)) return false;
        
        return true;
    });
    
    // Render filtered properties
    renderProperties(filteredProperties);
    
    // Scroll to listings section
    document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
}

// Open WhatsApp with property information
function openWhatsApp(propertyTitle) {
    // Ensure phone number is in international format (e.g., +265994232111)
    const phoneNumber = "+265994232111"; // Include country code
    const property = propertyTitle?.trim() || "property"; // Fallback if propertyTitle is undefined/null
    
    // Validate inputs
    if (!phoneNumber || !/^\+\d{10,15}$/.test(phoneNumber)) {
        console.error("Invalid phone number format. Please use international format (e.g., +1234567890)");
        return;
    }
    
    if (!property) {
        console.error("Property title is required");
        return;
    }

    // Create a structured, professional message
    const message = `Hello! I'm interested in booking "${property}". Could you please provide:
- Availability details
- Pricing information
- Any additional requirements
Thank you!`;

    try {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error("Error creating WhatsApp URL:", error);
    }
}