// WaveMesh Frontend Application

document.addEventListener('DOMContentLoaded', function() {
    console.log('WaveMesh frontend loaded successfully');
    
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    console.log('Initializing WaveMesh application...');
    
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    console.log('WaveMesh application initialized');
}

// Example function for API calls
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fetchData };
}