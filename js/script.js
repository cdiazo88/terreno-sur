// =============================================================================
// Global Variables
// =============================================================================
let map;
let isScrolling = false;

// =============================================================================
// DOM Content Loaded
// =============================================================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollReveal();
    initMap();
    initContactForm();
    initSmoothScroll();
    initPercentageChart();
    initParallaxEffect();
    initGalleryModal();
    initSitePlan();
});

// =============================================================================
// Navigation Functions
// =============================================================================
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// =============================================================================
// Smooth Scroll Function
// =============================================================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// =============================================================================
// ScrollReveal Animations
// =============================================================================
function initScrollReveal() {
    // if (typeof ScrollReveal !== 'undefined') {
    //     const sr = ScrollReveal({
    //         origin: 'bottom',
    //         distance: '60px',
    //         duration: 1000,
    //         delay: 100,
    //         reset: false
    //     });
        
    //     // Hero section
    //     sr.reveal('.hero-title', { delay: 200 });
    //     sr.reveal('.hero-subtitle', { delay: 400 });
    //     sr.reveal('.hero-description', { delay: 600 });
    //     sr.reveal('.cta-button', { delay: 800 });
        
    //     // Section titles
    //     sr.reveal('.section-title', { delay: 200 });
        
    //     // Introduction section
    //     sr.reveal('.intro-content h2', { delay: 300 });
    //     sr.reveal('.intro-text', { delay: 400, interval: 200 });
    //     sr.reveal('.stat-item', { delay: 500, interval: 100 });
        
    //     // Location section
    //     sr.reveal('.location-info', { origin: 'left', delay: 300 });
    //     sr.reveal('.location-map', { origin: 'right', delay: 400 });
        
    //     // Forest section
    //     sr.reveal('.forest-info', { origin: 'left', delay: 300 });
    //     sr.reveal('.forest-gallery', { origin: 'right', delay: 400 });
        
    //     // Commitment section
    //     sr.reveal('.commitment-text', { origin: 'left', delay: 300 });
    //     sr.reveal('.commitment-visual', { origin: 'right', delay: 400 });
        
    //     // Carbon footprint section
    //     sr.reveal('.carbon-info', { origin: 'left', delay: 300 });
    //     sr.reveal('.carbon-visual', { origin: 'right', delay: 400 });
        
    //     // Value proposition
    //     sr.reveal('.value-item', { delay: 200, interval: 100 });
    //     sr.reveal('.value-cta', { delay: 600 });
        
    //     // Gallery
    //     sr.reveal('.gallery-item', { delay: 200, interval: 100 });
        
    //     // Contact section
    //     sr.reveal('.contact-info', { origin: 'left', delay: 300 });
    //     sr.reveal('.contact-form', { origin: 'right', delay: 400 });
    // }
}

// =============================================================================
// Map Initialization
// =============================================================================
function initMap() {
    // Coordinates for the forest location (approximate)
    const forestLocation = [-45.5, -71.5]; // Approximate coordinates
    const coyhaique = [-45.575, -72.066];
    const villaOrtega = [-45.433, -71.733];
    
    if (typeof L !== 'undefined') {
        map = L.map('map').setView(forestLocation, 10);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Custom icons
        const forestIcon = L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjMmM0YzNiIi8+Cjwvc3ZnPg==',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });
        
        const cityIcon = L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPg==',
            iconSize: [25, 25],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        });
        
        // Add markers
        L.marker(forestLocation, { icon: forestIcon })
            .addTo(map)
            .bindPopup('<strong>Lengaterra</strong><br>Refugio Natural en la Patagonia');
        
        L.marker(coyhaique, { icon: cityIcon })
            .addTo(map)
            .bindPopup('<strong>Coyhaique</strong><br>46 km de distancia');
        
        L.marker(villaOrtega, { icon: cityIcon })
            .addTo(map)
            .bindPopup('<strong>Villa Ortega</strong><br>14 km de distancia');
    }
}

// =============================================================================
// Contact Form Security & Validation
// =============================================================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        // Rate limiting
        let lastSubmission = 0;
        const RATE_LIMIT = 30000; // 30 seconds between submissions
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check rate limiting
            const now = Date.now();
            if (now - lastSubmission < RATE_LIMIT) {
                showFormMessage('Por favor espera antes de enviar otro mensaje.', 'error');
                return;
            }
            
            // Validate and sanitize form data
            const formData = new FormData(form);
            const data = {
                nombre: sanitizeInput(formData.get('nombre')),
                email: sanitizeInput(formData.get('email')),
                telefono: sanitizeInput(formData.get('telefono')),
                mensaje: sanitizeInput(formData.get('mensaje'))
            };
            
            // Validate required fields
            if (!validateForm(data)) {
                return;
            }
            
            // Check for suspicious patterns
            if (detectSuspiciousContent(data)) {
                showFormMessage('Tu mensaje contiene contenido sospechoso. Por favor revísalo.', 'error');
                return;
            }
            
            // Simple honeypot check (add hidden field in HTML)
            const honeypot = formData.get('website');
            if (honeypot) {
                // This is likely a bot
                console.log('Bot detected');
                return;
            }
            
            // Update rate limiting
            lastSubmission = now;
            
            // Submit form
            submitSecureForm(data, form);
        });
        
        // Form field animations
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Real-time validation
            input.addEventListener('input', function() {
                validateField(this);
            });
        });
    }
}

// =============================================================================
// Form Security Functions
// =============================================================================
function sanitizeInput(input) {
    if (!input) return '';
    
    // Remove potentially dangerous characters
    return input
        .replace(/[<>\"']/g, '') // Remove HTML/script tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim()
        .substring(0, 1000); // Limit length
}

function validateForm(data) {
    const errors = [];
    
    // Name validation
    if (!data.nombre || data.nombre.length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
    if (data.nombre.length > 50) {
        errors.push('El nombre no puede tener más de 50 caracteres');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Por favor ingresa un email válido');
    }
    
    // Phone validation (Chilean format)
    const phoneRegex = /^(\+?56)?[0-9]{8,9}$/;
    if (!data.telefono || !phoneRegex.test(data.telefono.replace(/\s/g, ''))) {
        errors.push('Por favor ingresa un teléfono válido (formato chileno)');
    }
    
    // Message validation
    if (!data.mensaje || data.mensaje.length < 10) {
        errors.push('El mensaje debe tener al menos 10 caracteres');
    }
    if (data.mensaje.length > 1000) {
        errors.push('El mensaje no puede tener más de 1000 caracteres');
    }
    
    if (errors.length > 0) {
        showFormMessage(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

function detectSuspiciousContent(data) {
    const suspiciousPatterns = [
        /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
        /\b(click here|free money|make money|work from home)\b/i,
        /\b(nigerian prince|inheritance|millions of dollars)\b/i,
        /(https?:\/\/[^\s]+){3,}/i, // Multiple URLs
        /(.)\1{10,}/i, // Repeated characters
        /<script|javascript:|onclick|onerror/i // Script injection attempts
    ];
    
    const allText = Object.values(data).join(' ').toLowerCase();
    return suspiciousPatterns.some(pattern => pattern.test(allText));
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';
    
    switch (field.name) {
        case 'nombre':
            isValid = value.length >= 2 && value.length <= 50;
            message = isValid ? '' : 'Nombre debe tener entre 2 y 50 caracteres';
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
            message = isValid ? '' : 'Email no válido';
            break;
        case 'telefono':
            const phoneRegex = /^(\+?56)?[0-9]{8,9}$/;
            isValid = phoneRegex.test(value.replace(/\s/g, ''));
            message = isValid ? '' : 'Teléfono no válido';
            break;
        case 'mensaje':
            isValid = value.length >= 10 && value.length <= 1000;
            message = isValid ? '' : 'Mensaje debe tener entre 10 y 1000 caracteres';
            break;
    }
    
    // Update field styling
    const formGroup = field.parentElement;
    formGroup.classList.toggle('error', !isValid);
    formGroup.classList.toggle('valid', isValid && value.length > 0);
    
    // Show/hide error message
    let errorElement = formGroup.querySelector('.field-error');
    if (!isValid && message) {
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            formGroup.appendChild(errorElement);
        }
        errorElement.textContent = message;
    } else if (errorElement) {
        errorElement.remove();
    }
    
    return isValid;
}

function submitSecureForm(data, form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Here you would implement the actual form submission
    // Options:
    // 1. Send to a backend API
    // 2. Use a service like Formspree, Netlify Forms, or EmailJS
    // 3. Send via PHP script
    
    // Example with fetch API (requires backend)
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            showFormMessage('¡Gracias por tu mensaje! Te contactaremos pronto.', 'success');
            form.reset();
        } else {
            showFormMessage('Error al enviar el mensaje. Por favor intenta nuevamente.', 'error');
        }
    })
    .catch(error => {
        showFormMessage('Error de conexión. Por favor intenta nuevamente.', 'error');
    })
    .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
    */
    
    // Temporary simulation for development
    setTimeout(() => {
        showFormMessage('¡Gracias por tu mensaje! Te contactaremos pronto.', 'success');
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.innerHTML = message;
    
    // Insert message
    const form = document.getElementById('contactForm');
    form.insertBefore(messageElement, form.firstChild);
    
    // Auto-hide success messages
    if (type === 'success') {
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// =============================================================================
// Percentage Chart Animation
// =============================================================================
function initPercentageChart() {
    const chartFill = document.querySelector('.percentage-fill');
    
    if (chartFill) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateChart();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(chartFill);
    }
}

function animateChart() {
    const chartFill = document.querySelector('.percentage-fill');
    let currentPercentage = 0;
    const targetPercentage = 95;
    
    const interval = setInterval(() => {
        if (currentPercentage >= targetPercentage) {
            clearInterval(interval);
            return;
        }
        
        currentPercentage += 2;
        const degrees = (currentPercentage / 100) * 360;
        
        chartFill.style.background = `conic-gradient(
            var(--primary-color) 0deg,
            var(--primary-color) ${degrees}deg,
            var(--accent-color) ${degrees}deg,
            var(--accent-color) 360deg
        )`;
    }, 30);
}

// =============================================================================
// Parallax Effect
// =============================================================================
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        if (isScrolling) return;
        
        isScrolling = true;
        requestAnimationFrame(updateParallax);
    });
}

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const heroVideo = hero.querySelector('.hero-video');
        if (heroVideo) {
            heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
    
    // Parallax for other sections
    const parallaxElements = document.querySelectorAll('.gallery-item img');
    parallaxElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const speed = 0.1 + (index * 0.05);
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        }
    });
    
    isScrolling = false;
}

// =============================================================================
// Gallery Modal
// =============================================================================
function initGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('.gallery-overlay h3');
            
            if (img && title) {
                openGalleryModal(img.src, title.textContent);
            }
        });
    });
}

function openGalleryModal(imageSrc, title) {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img src="${imageSrc}" alt="${title}">
                <h3>${title}</h3>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', closeGalleryModal);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeGalleryModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGalleryModal();
        }
    });
}

function closeGalleryModal() {
    const modal = document.querySelector('.gallery-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// =============================================================================
// Site Plan Functionality
// =============================================================================
function initSitePlan() {
    const siteData = {
        1: {
            number: "01",
            size: "2.5 Ha",
            status: "disponible",
            price: "Consultar",
            description: "Sitio con excelente vista al valle y acceso directo al sendero principal.",
            features: ["Vista panorámica", "Acceso vehicular", "Riachuelo cercano", "Bosque maduro"],
            coordinates: "45°30'S, 71°45'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-01/vista-panoramica.jpg",
                    title: "Vista Panorámica del Valle",
                    description: "Impresionante vista hacia el valle desde el punto más alto del sitio."
                },
                {
                    src: "assets/images/sitios/sitio-01/acceso-vehicular.jpg",
                    title: "Acceso Vehicular",
                    description: "Camino de acceso directo para vehículos 4x4."
                },
                {
                    src: "assets/images/sitios/sitio-01/riachuelo.jpg",
                    title: "Riachuelo Cristalino",
                    description: "Riachuelo que bordea el sitio con agua cristalina todo el año."
                },
                {
                    src: "assets/images/sitios/sitio-01/bosque.jpg",
                    title: "Bosque de Lengas Maduro",
                    description: "Bosque nativo con árboles centenarios perfectamente conservados."
                }
            ]
        },
        2: {
            number: "02",
            size: "3.2 Ha",
            status: "disponible",
            price: "Consultar",
            description: "Terreno amplio con diversidad de microclimas y abundante vegetación nativa.",
            features: ["Mayor superficie", "Diversidad de flora", "Privacidad total", "Orientación norte"],
            coordinates: "45°30'S, 71°44'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-02/microclimas.jpg",
                    title: "Diversidad de Microclimas",
                    description: "Diferentes zonas con microclimas únicos que favorecen la biodiversidad."
                },
                {
                    src: "assets/images/sitios/sitio-02/flora-nativa.jpg",
                    title: "Flora Nativa",
                    description: "Abundante vegetación nativa en perfecto estado de conservación."
                },
                {
                    src: "assets/images/sitios/sitio-02/privacidad.jpg",
                    title: "Privacidad Total",
                    description: "Ubicación aislada que garantiza privacidad absoluta."
                }
            ]
        },
        3: {
            number: "03",
            size: "2.8 Ha",
            status: "reservado",
            price: "Reservado",
            description: "Sitio reservado con características excepcionales.",
            features: ["Reservado por cliente", "Características premium", "Ubicación privilegiada"],
            coordinates: "45°29'S, 71°45'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-03/vista-especial.jpg",
                    title: "Vista Especial",
                    description: "Ubicación privilegiada con vista única del bosque."
                }
            ]
        },
        4: {
            number: "04",
            size: "4.1 Ha",
            status: "disponible",
            price: "Consultar",
            description: "El sitio más grande disponible, ideal para desarrollo de proyecto familiar.",
            features: ["Mayor superficie", "Múltiples zonas", "Potencial construcción", "Acceso secundario"],
            coordinates: "45°29'S, 71°44'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-04/superficie-grande.jpg",
                    title: "Mayor Superficie",
                    description: "El sitio más extenso con 4.1 hectáreas de pura naturaleza."
                },
                {
                    src: "assets/images/sitios/sitio-04/zonas-multiples.jpg",
                    title: "Múltiples Zonas",
                    description: "Diferentes zonas perfectas para diversos usos y desarrollos."
                },
                {
                    src: "assets/images/sitios/sitio-04/potencial.jpg",
                    title: "Potencial de Desarrollo",
                    description: "Amplias posibilidades para proyecto familiar sostenible."
                }
            ]
        },
        5: {
            number: "05",
            size: "2.9 Ha",
            status: "vendido",
            price: "Vendido",
            description: "Sitio vendido a familia conservacionista.",
            features: ["Vendido", "Proyecto de conservación", "Desarrollo sostenible"],
            coordinates: "45°28'S, 71°45'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-05/proyecto-conservacion.jpg",
                    title: "Proyecto de Conservación",
                    description: "Ejemplo de desarrollo sostenible en armonía con el entorno."
                }
            ]
        },
        6: {
            number: "06",
            size: "3.5 Ha",
            status: "disponible",
            price: "Consultar",
            description: "Sitio con características únicas para observación de fauna.",
            features: ["Observación fauna", "Tranquilidad total", "Bosque pristino", "Microclima especial"],
            coordinates: "45°28'S, 71°44'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-06/observacion-fauna.jpg",
                    title: "Observación de Fauna",
                    description: "Punto privilegiado para observar cóndores y huemules."
                },
                {
                    src: "assets/images/sitios/sitio-06/tranquilidad.jpg",
                    title: "Tranquilidad Total",
                    description: "Rincón de paz absoluta alejado del ruido urbano."
                },
                {
                    src: "assets/images/sitios/sitio-06/bosque-pristino.jpg",
                    title: "Bosque Prístino",
                    description: "Bosque virgen en estado natural sin intervención humana."
                }
            ]
        },
        7: {
            number: "07",
            size: "2.7 Ha",
            status: "disponible",
            price: "Consultar",
            description: "Perfecto para quienes buscan un refugio íntimo en la naturaleza.",
            features: ["Intimidad", "Bosque denso", "Protección natural", "Acceso privado"],
            coordinates: "45°27'S, 71°45'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-07/refugio-intimo.jpg",
                    title: "Refugio Íntimo",
                    description: "Espacio perfecto para un refugio personal en la naturaleza."
                },
                {
                    src: "assets/images/sitios/sitio-07/bosque-denso.jpg",
                    title: "Bosque Denso",
                    description: "Vegetación densa que proporciona privacidad natural."
                }
            ]
        },
        8: {
            number: "08",
            size: "3.8 Ha",
            status: "reservado",
            price: "Reservado",
            description: "Sitio reservado con proceso de compra en curso.",
            features: ["En proceso", "Características premium", "Ubicación estratégica"],
            coordinates: "45°27'S, 71°44'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-08/ubicacion-estrategica.jpg",
                    title: "Ubicación Estratégica",
                    description: "Posición privilegiada con acceso a múltiples senderos."
                }
            ]
        },
        9: {
            number: "09",
            size: "4.2 Ha",
            status: "disponible",
            price: "Consultar",
            description: "Sitio premium con la mayor superficie y características excepcionales.",
            features: ["Superficie máxima", "Características únicas", "Ubicación premium", "Múltiples accesos"],
            coordinates: "45°26'S, 71°45'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-09/superficie-maxima.jpg",
                    title: "Superficie Máxima",
                    description: "El sitio más grande con 4.2 hectáreas de territorio virgen."
                },
                {
                    src: "assets/images/sitios/sitio-09/caracteristicas-unicas.jpg",
                    title: "Características Únicas",
                    description: "Formaciones rocosas y cascadas naturales exclusivas."
                },
                {
                    src: "assets/images/sitios/sitio-09/multiples-accesos.jpg",
                    title: "Múltiples Accesos",
                    description: "Diversos caminos de acceso para mayor comodidad."
                }
            ]
        },
        10: {
            number: "10",
            size: "3.1 Ha",
            status: "disponible",
            price: "Consultar",
            description: "Equilibrio perfecto entre superficie y funcionalidad.",
            features: ["Superficie balanceada", "Funcionalidad", "Acceso directo", "Vista despejada"],
            coordinates: "45°26'S, 71°44'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-10/equilibrio.jpg",
                    title: "Equilibrio Perfecto",
                    description: "Tamaño ideal que combina amplitud con manejo sustentable."
                },
                {
                    src: "assets/images/sitios/sitio-10/vista-despejada.jpg",
                    title: "Vista Despejada",
                    description: "Panorámica sin obstáculos hacia las montañas circundantes."
                }
            ]
        },
        11: {
            number: "11",
            size: "2.6 Ha",
            status: "vendido",
            price: "Vendido",
            description: "Sitio vendido a inversionistas extranjeros.",
            features: ["Vendido", "Inversión internacional", "Proyecto ecoturístico"],
            coordinates: "45°25'S, 71°45'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-11/proyecto-ecoturistico.jpg",
                    title: "Proyecto Ecoturístico",
                    description: "Desarrollo de turismo sostenible respetando el entorno."
                }
            ]
        },
        12: {
            number: "12",
            size: "3.9 Ha",
            status: "disponible",
            price: "Consultar",
            description: "Último sitio de gran superficie disponible con características premium.",
            features: ["Última oportunidad", "Superficie grande", "Características premium", "Ubicación final"],
            coordinates: "45°25'S, 71°44'W",
            gallery: [
                {
                    src: "assets/images/sitios/sitio-12/ultima-oportunidad.jpg",
                    title: "Última Oportunidad",
                    description: "El último sitio de gran superficie disponible en Lengaterra."
                },
                {
                    src: "assets/images/sitios/sitio-12/superficie-grande.jpg",
                    title: "Superficie Grande",
                    description: "3.9 hectáreas de territorio virgen con múltiples posibilidades."
                },
                {
                    src: "assets/images/sitios/sitio-12/caracteristicas-premium.jpg",
                    title: "Características Premium",
                    description: "Ubicación final con las mejores características del proyecto."
                }
            ]
        }
    };

    const siteLots = document.querySelectorAll('.site-lot');
    const planFilters = document.querySelectorAll('.plan-filter');
    const siteInfoPanel = document.getElementById('siteInfoPanel');
    const closePanelBtn = document.getElementById('closeSitePanel');
    const siteTitle = document.getElementById('siteTitle');
    const siteDetails = document.getElementById('siteDetails');

    // Filter functionality
    planFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const filterValue = this.dataset.filter;
            
            // Update active filter
            planFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter sites
            siteLots.forEach(lot => {
                const lotStatus = lot.dataset.status;
                
                if (filterValue === 'all' || lotStatus === filterValue) {
                    lot.classList.remove('hidden');
                } else {
                    lot.classList.add('hidden');
                }
            });
        });
    });

    // Site lot click functionality
    siteLots.forEach(lot => {
        lot.addEventListener('click', function() {
            const siteId = this.dataset.site;
            const siteInfo = siteData[siteId];
            
            if (siteInfo) {
                showSiteInfo(siteInfo);
            }
        });

        // Add background images dynamically
        const siteId = lot.dataset.site;
        const imagePath = `assets/images/sitios/sitio-${siteId.padStart(2, '0')}.jpg`;
        
        // Check if image exists, otherwise use gradient
        const img = new Image();
        img.onload = function() {
            lot.style.backgroundImage = `url(${imagePath})`;
        };
        img.src = imagePath;
    });

    // Close panel functionality
    closePanelBtn.addEventListener('click', closeSitePanel);
    
    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        if (siteInfoPanel.classList.contains('active') && 
            !siteInfoPanel.contains(e.target) && 
            !e.target.closest('.site-lot')) {
            closeSitePanel();
        }
    });

    function showSiteInfo(siteInfo) {
        siteTitle.textContent = `Sitio ${siteInfo.number}`;
        
        const statusClass = siteInfo.status;
        const statusText = siteInfo.status === 'disponible' ? 'Disponible' : 
                          siteInfo.status === 'reservado' ? 'Reservado' : 'Vendido';
        
        siteDetails.innerHTML = `
            <div class="site-detail-item">
                <strong>Superficie:</strong> ${siteInfo.size}
            </div>
            <div class="site-detail-item">
                <strong>Estado:</strong> 
                <span class="status-badge ${statusClass}">${statusText}</span>
            </div>
            <div class="site-detail-item">
                <strong>Precio:</strong> ${siteInfo.price}
            </div>
            <div class="site-detail-item">
                <strong>Coordenadas:</strong> ${siteInfo.coordinates}
            </div>
            <div class="site-detail-item">
                <strong>Descripción:</strong><br>
                ${siteInfo.description}
            </div>
            <div class="site-detail-item">
                <strong>Características:</strong>
                <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                    ${siteInfo.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
        
        // Load site gallery
        const siteGallery = document.getElementById('siteGallery');
        const siteGalleryGrid = document.getElementById('siteGalleryGrid');
        
        if (siteInfo.gallery && siteInfo.gallery.length > 0) {
            siteGallery.style.display = 'block';
            siteGalleryGrid.innerHTML = siteInfo.gallery.map((image, index) => `
                <div class="site-gallery-item" data-index="${index}">
                    <img src="${image.src}" alt="${image.title}" onerror="this.style.display='none'">
                    <div class="gallery-icon">
                        <i class="fas fa-expand"></i>
                    </div>
                </div>
            `).join('');
            
            // Add click listeners to gallery items
            siteGalleryGrid.querySelectorAll('.site-gallery-item').forEach((item, index) => {
                item.addEventListener('click', function() {
                    openImageModal(siteInfo.gallery, index);
                });
            });
        } else {
            siteGallery.style.display = 'none';
        }
        
        // Update actions based on status
        const siteActions = document.getElementById('siteActions');
        if (siteInfo.status === 'disponible') {
            siteActions.innerHTML = `
                <button class="cta-button primary" onclick="scrollToSection('contacto')">
                    Consultar Disponibilidad
                </button>
                <button class="cta-button secondary" onclick="scheduleVisit('${siteInfo.number}')">
                    Agendar Visita
                </button>
            `;
        } else if (siteInfo.status === 'reservado') {
            siteActions.innerHTML = `
                <button class="cta-button secondary" onclick="scrollToSection('contacto')">
                    Lista de Espera
                </button>
            `;
        } else {
            siteActions.innerHTML = `
                <p style="text-align: center; color: var(--text-light); font-style: italic;">
                    Este sitio ya ha sido vendido
                </p>
            `;
        }
        
        siteInfoPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Force reflow for mobile
        setTimeout(() => {
            siteInfoPanel.style.right = '0';
        }, 10);
    }

    function closeSitePanel() {
        siteInfoPanel.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Ensure proper cleanup for mobile
        setTimeout(() => {
            siteInfoPanel.style.right = '';
        }, 300);
    }
    
    // Mobile-specific improvements
    function initMobileOptimizations() {
        // Check if device is mobile
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Improve touch feedback for site lots
            siteLots.forEach(lot => {
                lot.addEventListener('touchstart', function(e) {
                    this.style.transform = 'scale(0.95)';
                    this.style.transition = 'transform 0.1s ease';
                });
                
                lot.addEventListener('touchend', function(e) {
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 100);
                });
            });
            
            // Improve panel opening on mobile
            const originalShowSiteInfo = window.showSiteInfo;
            window.showSiteInfo = function(siteInfo) {
                // Ensure body scroll is properly handled
                document.body.style.position = 'fixed';
                document.body.style.top = `-${window.scrollY}px`;
                document.body.style.width = '100%';
                
                // Call original function
                originalShowSiteInfo.call(this, siteInfo);
                
                // Force panel to appear
                setTimeout(() => {
                    siteInfoPanel.style.transform = 'translateX(0)';
                }, 50);
            };
            
            // Improve panel closing on mobile
            const originalCloseSitePanel = window.closeSitePanel;
            window.closeSitePanel = function() {
                // Restore body scroll
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
                
                // Call original function
                originalCloseSitePanel.call(this);
            };
        }
        
        // Improve touch interactions for all devices
        if ('ontouchstart' in window) {
            // Improve scrolling on mobile for site map
            const siteMapWrapper = document.querySelector('.site-map-wrapper');
            if (siteMapWrapper) {
                siteMapWrapper.style.webkitOverflowScrolling = 'touch';
                siteMapWrapper.style.overflowScrolling = 'touch';
            }
            
            // Prevent zoom on double tap for site lots
            siteLots.forEach(lot => {
                lot.addEventListener('touchend', function(e) {
                    e.preventDefault();
                    // Trigger click after preventing default
                    setTimeout(() => {
                        this.click();
                    }, 10);
                });
            });
        }
        
        // Adjust panel height for mobile keyboards and orientation changes
        function adjustPanelForMobile() {
            if (window.innerWidth <= 768) {
                const panel = document.getElementById('siteInfoPanel');
                if (panel && panel.classList.contains('active')) {
                    const viewportHeight = window.innerHeight;
                    panel.style.height = `${viewportHeight}px`;
                    panel.style.top = '0';
                }
            }
        }
        
        // Listen for resize and orientation changes
        window.addEventListener('resize', debounce(adjustPanelForMobile, 250));
        window.addEventListener('orientationchange', function() {
            setTimeout(adjustPanelForMobile, 500);
        });
    }
    
    // Initialize mobile optimizations
    initMobileOptimizations();
}

function scheduleVisit(siteNumber) {
    const message = `Hola, me interesa agendar una visita al Sitio ${siteNumber} en Lengaterra. ¿Podrían ayudarme con la disponibilidad?`;
    const whatsappUrl = `https://wa.me/56973948891?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// =============================================================================
// Utility Functions
// =============================================================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =============================================================================
// Performance Optimizations
// =============================================================================
window.addEventListener('scroll', debounce(function() {
    updateParallax();
}, 10));

// =============================================================================
// Social Media Sharing
// =============================================================================
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Lengaterra - Refugio Natural en la Patagonia');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Lengaterra - Refugio Natural en la Patagonia');
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Descubre Lengaterra: Refugio Natural en la Patagonia Chilena');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

// =============================================================================
// Loading Animation
// =============================================================================
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// =============================================================================
// Error Handling
// =============================================================================
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    // You could send this to a logging service
});

// =============================================================================
// Gallery Modal Styles (added dynamically)
// =============================================================================
const modalStyles = `
    .gallery-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    }
    
    .modal-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 8px;
    }
    
    .modal-content h3 {
        color: white;
        margin-top: 1rem;
        font-size: 1.5rem;
    }
    
    .modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

// Add modal styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// =============================================================================
// Site Gallery Modal Functionality
// =============================================================================
let currentImageIndex = 0;
let currentGallery = [];

function openImageModal(gallery, index) {
    currentGallery = gallery;
    currentImageIndex = index;
    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    const currentImage = gallery[index];
    modalImage.src = currentImage.src;
    modalImage.alt = currentImage.title;
    modalTitle.textContent = currentImage.title;
    modalDescription.textContent = currentImage.description;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Setup navigation
    updateNavigationButtons();
    
    // Setup event listeners
    setupModalEventListeners();
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showNextImage() {
    if (currentImageIndex < currentGallery.length - 1) {
        currentImageIndex++;
        updateModalImage();
    }
}

function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalImage();
    }
}

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    const currentImage = currentGallery[currentImageIndex];
    modalImage.src = currentImage.src;
    modalImage.alt = currentImage.title;
    modalTitle.textContent = currentImage.title;
    modalDescription.textContent = currentImage.description;
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    
    prevBtn.style.display = currentImageIndex > 0 ? 'flex' : 'none';
    nextBtn.style.display = currentImageIndex < currentGallery.length - 1 ? 'flex' : 'none';
}

function setupModalEventListeners() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    
    // Close modal events
    closeBtn.addEventListener('click', closeImageModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Navigation events
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeImageModal();
        } else if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
}

// Initialize modal event listeners on page load
document.addEventListener('DOMContentLoaded', function() {
    setupModalEventListeners();
});