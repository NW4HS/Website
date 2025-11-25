// Active Navigation Link Handler
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Genre Filter Functionality (for content.html)
function filterContent(genre) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const contentCards = document.querySelectorAll('.content-card');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter content cards
    contentCards.forEach(card => {
        if (genre === 'all') {
            card.style.display = 'block';
        } else {
            const cardGenre = card.getAttribute('data-genre');
            card.style.display = cardGenre === genre ? 'block' : 'none';
        }
    });
}

// Subscription Form Handler
function handleSubscription(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const plan = document.getElementById('plan').value;
    
    // Store in memory (simulating data storage)
    const subscriptionData = {
        fullName: fullName,
        email: email,
        plan: plan,
        date: new Date().toLocaleDateString()
    };
    
    console.log('Subscription Data:', subscriptionData);
    
    // Show success modal
    showModal(fullName, plan);
    
    // Reset form
    document.getElementById('subscriptionForm').reset();
}

// Show Modal Function
function showModal(name, plan) {
    const modal = document.getElementById('successModal');
    const modalMessage = document.getElementById('modalMessage');
    
    modalMessage.innerHTML = `Thank you, <strong>${name}</strong>!<br>You have successfully subscribed to the <strong>${plan}</strong> plan.`;
    
    modal.classList.add('active');
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth Scroll for CTA Buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Plan Selection Enhancement
function selectPlan(planName) {
    // Scroll to form section
    const formSection = document.querySelector('.form-section');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        
        // Pre-select the plan in the form
        setTimeout(() => {
            const planSelect = document.getElementById('plan');
            if (planSelect) {
                planSelect.value = planName;
            }
        }, 500);
    } else {
        // If not on subscription page, redirect there
        window.location.href = 'subscription.html';
    }
}

// Content Card Click Handler
function handleContentClick(title) {
    alert(`You selected: ${title}\n\nIn a full implementation, this would open the video player.`);
}

// Simulated Video Data (for demonstration)
const contentDatabase = {
    movies: [
        { title: 'Mga Kwento ng Pag-ibig', genre: 'romance', year: 2024 },
        { title: 'Laban ng Bayani', genre: 'action', year: 2024 },
        { title: 'Tawanan sa Umaga', genre: 'comedy', year: 2023 },
        { title: 'Himala ng Bayan', genre: 'documentary', year: 2024 }
    ]
};

// Initialize tooltips or additional interactions
function initializeInteractions() {
    // Add hover effects to content cards
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });
    });
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeInteractions);
} else {
    initializeInteractions();
}