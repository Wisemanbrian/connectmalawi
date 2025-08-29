// Property data
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
        amenities: ["wifi", "pool", "parking", "kitchen"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
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
        amenities: ["wifi", "parking", "kitchen"],
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
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
        amenities: ["wifi", "kitchen"],
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
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
        amenities: ["wifi", "parking", "kitchen"],
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
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
        amenities: ["wifi", "pool", "parking", "kitchen"],
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
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
        amenities: ["wifi", "kitchen"],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
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
        amenities: ["wifi", "parking", "kitchen"],
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
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
        amenities: ["wifi", "kitchen"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProperties(properties);
    setupEventListeners();
    
    // Set minimum dates for check-in/check-out
    const today = new Date().toISOString().split('T')[0];
    checkInDate.min = today;
    checkOutDate.min = today;
});

// Set up event listeners
function setupEventListeners() {
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);
    mainSearchForm.addEventListener('submit', handleMainSearch);
    
    // Update check-out min date when check-in changes
    checkInDate.addEventListener('change', function() {
        checkOutDate.min = this.value;
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
            <img src="${property.image}" alt="${property.title}" class="property-img">
            <div class="property-details">
                <div class="property-type">${property.type.toUpperCase()}</div>
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
                <div class="property-price">
                    <div class="price">$${property.price} <span>/ night</span></div>
                    <button class="book-btn" data-property="${property.title}">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to book buttons
    document.querySelectorAll('.book-btn').forEach(button => {
        button.addEventListener('click', function() {
            const propertyTitle = this.getAttribute('data-property');
            openWhatsApp(propertyTitle);
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

// Modal functionality
const loginModal = document.getElementById('loginModal');
const hostModal = document.getElementById('hostModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const hostBtn = document.getElementById('hostBtn');
const closeButtons = document.querySelectorAll('.close-modal');

// Show login modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Show signup modal
signupBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    // Switch to register tab
    document.querySelector('[data-tab="register"]').click();
});

// Show host modal
hostBtn.addEventListener('click', () => {
    hostModal.style.display = 'flex';
});

// Close modals
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        hostModal.style.display = 'none';
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
// Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileLinks = document.querySelectorAll('.nav-mobile a');
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const mobileSignupBtn = document.getElementById('mobileSignupBtn');

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
