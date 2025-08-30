// // =============================================================================
// // Global Variables
// // =============================================================================
let map;
let isScrolling = false;

// // =============================================================================
// // DOM Content Loaded
// // =============================================================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollReveal();
    initMap();
    initContactForm();
    initSmoothScroll();
    initPercentageChart();
    initParallaxEffect();
    initSitePlan();
    initGalleryModal();
});

// // =============================================================================
// // Navigation Functions
// // =============================================================================
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

// // =============================================================================
// // Smooth Scroll Function
// // =============================================================================
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

// // =============================================================================
// // ScrollReveal Animations
// // =============================================================================
// function initScrollReveal() {
//     if (typeof ScrollReveal !== 'undefined') {
//         const sr = ScrollReveal({
//             origin: 'bottom',
//             distance: '60px',
//             duration: 1000,
//             delay: 100,
//             reset: false
//         });
        
//         // Hero section
//         sr.reveal('.hero-title', { delay: 200 });
//         sr.reveal('.hero-subtitle', { delay: 400 });
//         sr.reveal('.hero-description', { delay: 600 });
//         sr.reveal('.cta-button', { delay: 800 });
        
//         // Section titles
//         sr.reveal('.section-title', { delay: 200 });
        
//         // Introduction section
//         sr.reveal('.intro-content h2', { delay: 300 });
//         sr.reveal('.intro-text', { delay: 400, interval: 200 });
//         sr.reveal('.stat-item', { delay: 500, interval: 100 });
        
//         // Location section
//         sr.reveal('.location-info', { origin: 'left', delay: 300 });
//         sr.reveal('.location-map', { origin: 'right', delay: 400 });
        
//         // Forest section
//         sr.reveal('.forest-info', { origin: 'left', delay: 300 });
//         sr.reveal('.forest-gallery', { origin: 'right', delay: 400 });
        
//         // Commitment section
//         sr.reveal('.commitment-text', { origin: 'left', delay: 300 });
//         sr.reveal('.commitment-visual', { origin: 'right', delay: 400 });
        
//         // Carbon footprint section
//         sr.reveal('.carbon-info', { origin: 'left', delay: 300 });
//         sr.reveal('.carbon-visual', { origin: 'right', delay: 400 });
        
//         // Value proposition
//         sr.reveal('.value-item', { delay: 200, interval: 100 });
//         sr.reveal('.value-cta', { delay: 600 });
        
//         // Gallery
//         sr.reveal('.gallery-item', { delay: 200, interval: 100 });
        
//         // Contact section
//         sr.reveal('.contact-info', { origin: 'left', delay: 300 });
//         sr.reveal('.contact-form', { origin: 'right', delay: 400 });
//     }
// }

// // =============================================================================
// // Map Initialization
// // =============================================================================
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
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA9TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjMmM0YzNiIi8+Cjwvc3ZnPg==',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });
        
        const cityIcon = L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPg==',
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

// // =============================================================================
// // Contact Form Security & Validation
// // =============================================================================
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

// // =============================================================================
// // Form Security Functions
// // =============================================================================
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

// // =============================================================================
// // Percentage Chart Animation
// // =============================================================================
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

// // =============================================================================
// // Parallax Effect
// // =============================================================================
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

// // =============================================================================
// // Gallery Modal Functions
// // =============================================================================
function initGalleryModal() {
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGalleryModal();
        }
    });
}

function openGalleryModal(imageSrc, title, description) {
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('galleryModalImage');
    const modalTitle = document.getElementById('galleryModalTitle');
    const modalDescription = document.getElementById('galleryModalDescription');
    
    if (modal && modalImage && modalTitle && modalDescription) {
        // Actualizar contenido del modal
        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        
        // Mostrar modal
        modal.classList.add('active');
        modal.style.display = 'flex';
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    }
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
    }
}

// =============================================================================
// Site Plan Functions
// =============================================================================
function initSitePlan() {
    const siteLots = document.querySelectorAll('.site-lot');
    const siteInfoPanel = document.getElementById('siteInfoPanel');
    const closeSitePanel = document.getElementById('closeSitePanel');
    const planFilters = document.querySelectorAll('.plan-filter');
    
    // Site data
    const siteData = {
        1: {
            title: 'Sitio 01 - Vista al Bosque',
            size: '2.5 Ha',
            status: 'disponible',
            price: 'Consultar',
            description: 'Sitio privilegiado con vista directa al bosque de lengas. Ideal para construcción de refugio con máxima privacidad.',
            features: ['Vista panorámica al bosque', 'Acceso directo al sendero', 'Zona de construcción definida', 'Riachuelo cercano'],
            images: ['assets/images/sitios/sitio-01/1.jpg', 'assets/images/sitios/sitio-01/2.jpg']
        },
        2: {
            title: 'Sitio 02 - Riachuelo Natural',
            size: '3.2 Ha',
            status: 'disponible',
            price: 'Consultar',
            description: 'Sitio único con riachuelo natural que atraviesa la propiedad. Perfecta armonía entre agua y bosque.',
            features: ['Riachuelo propio', 'Bosque nativo preservado', 'Múltiples opciones de construcción', 'Fauna silvestre'],
            images: ['assets/images/sitios/sitio-02/1.jpg', 'assets/images/sitios/sitio-02/2.jpg']
        },
        3: {
            title: 'Sitio 03 - Reservado',
            size: '2.8 Ha',
            status: 'reservado',
            price: 'Reservado',
            description: 'Este sitio ha sido reservado por un cliente. Contáctanos para conocer otras opciones disponibles.',
            features: ['Sitio reservado', 'Consultar disponibilidad', 'Opciones similares disponibles'],
            images: []
        },
        4: {
            title: 'Sitio 04 - Bosque Denso',
            size: '4.1 Ha',
            status: 'disponible',
            price: 'Consultar',
            description: 'El sitio más grande disponible, con bosque denso de lengas centenarias. Máxima privacidad y naturaleza.',
            features: ['Sitio más extenso', 'Bosque denso de lengas', 'Múltiples zonas de construcción', 'Máxima privacidad'],
            images: ['assets/images/bosqueLengas/1.jpg', 'assets/images/bosqueLengas/2.jpg']
        },
        5: {
            title: 'Sitio 05 - Vendido',
            size: '2.9 Ha',
            status: 'vendido',
            price: 'Vendido',
            description: 'Este sitio ya ha sido vendido. Te invitamos a explorar nuestras otras opciones disponibles.',
            features: ['Sitio vendido', 'Ver opciones disponibles'],
            images: []
        },
        6: {
            title: 'Sitio 06 - Mirador Natural',
            size: '3.5 Ha',
            status: 'disponible',
            price: 'Consultar',
            description: 'Sitio con elevación natural que ofrece vistas panorámicas del valle y bosque circundante.',
            features: ['Vista panorámica', 'Elevación natural', 'Bosque nativo', 'Zona de construcción con vista'],
            images: ['assets/images/galeria/vistas.JPG', 'assets/images/galeria/bosque.JPEG']
        },
        7: {
            title: 'Sitio 07 - Entrada Principal',
            size: '2.7 Ha',
            status: 'disponible',
            price: 'Consultar',
            description: 'Sitio estratégicamente ubicado cerca de la entrada principal, con fácil acceso y servicios.',
            features: ['Acceso principal', 'Servicios cercanos', 'Fácil construcción', 'Bosque preservado'],
            images: ['assets/images/caminoAcceso.png', 'assets/images/galeria/imagenPrincipal.JPEG']
        },
        8: {
            title: 'Sitio 08 - Reservado',
            size: '3.8 Ha',
            status: 'reservado',
            price: 'Reservado',
            description: 'Sitio actualmente reservado. Contáctanos para conocer el estado actualizado y otras opciones.',
            features: ['Sitio reservado', 'Consultar disponibilidad'],
            images: []
        },
        9: {
            title: 'Sitio 09 - Valle Protegido',
            size: '4.2 Ha',
            status: 'disponible',
            price: 'Consultar',
            description: 'Sitio premium en valle protegido, rodeado completamente por bosque nativo. Máxima exclusividad.',
            features: ['Valle protegido', 'Sitio premium', 'Bosque circundante', 'Máxima exclusividad'],
            images: ['assets/images/sitios/sitio-09/1.jpg', 'assets/images/galeria/otoño.JPEG']
        },
        10: {
            title: 'Sitio 10 - Bosque y Pradera',
            size: '3.1 Ha',
            status: 'disponible',
            price: 'Consultar',
            description: 'Combinación perfecta entre bosque nativo y praderas naturales. Diversidad de ecosistemas.',
            features: ['Bosque y pradera', 'Diversidad ecosistemas', 'Múltiples opciones construcción', 'Acceso directo'],
            images: ['assets/images/galeria/arroyo.JPEG', 'assets/images/bosqueLengas/3.jpg']
        },
        11: {
            title: 'Sitio 11 - Vendido',
            size: '2.6 Ha',
            status: 'vendido',
            price: 'Vendido',
            description: 'Sitio vendido exitosamente. Consulta nuestras opciones disponibles similares.',
            features: ['Sitio vendido', 'Opciones similares disponibles'],
            images: []
        },
        12: {
            title: 'Sitio 12 - Refugio del Bosque',
            size: '3.9 Ha',
            status: 'disponible',
            price: 'Consultar',
            description: 'Último sitio disponible en la zona más tranquila, completamente rodeado por el bosque de lengas.',
            features: ['Zona más tranquila', 'Rodeado por bosque', 'Refugio natural', 'Última oportunidad'],
            images: ['assets/images/bosqueLengas/4.jpg', 'assets/images/galeria/bosque.JPEG']
        }
    };
    
    // Click en sitios
    siteLots.forEach(lot => {
        lot.addEventListener('click', function() {
            const siteNumber = this.dataset.site;
            const site = siteData[siteNumber];
            
            if (site) {
                showSiteInfo(site);
            }
        });
        
        // Hover effects
        lot.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        lot.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Filtros
    planFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const filterValue = this.dataset.filter;
            
            // Update active filter
            planFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter sites
            siteLots.forEach(lot => {
                const status = lot.dataset.status;
                
                if (filterValue === 'all' || status === filterValue) {
                    lot.style.display = 'block';
                    lot.style.opacity = '1';
                } else {
                    lot.style.opacity = '0.3';
                }
            });
        });
    });
    
    // Cerrar panel
    if (closeSitePanel) {
        closeSitePanel.addEventListener('click', function() {
            siteInfoPanel.classList.remove('active');
        });
    }
    
    // Cerrar panel al hacer clic fuera
    siteInfoPanel.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
}

function showSiteInfo(site) {
    const siteInfoPanel = document.getElementById('siteInfoPanel');
    const siteTitle = document.getElementById('siteTitle');
    const siteDetails = document.getElementById('siteDetails');
    const siteGalleryGrid = document.getElementById('siteGalleryGrid');
    
    // Update title
    siteTitle.textContent = site.title;
    
    // Update details
    siteDetails.innerHTML = `
        <div class="site-detail-grid">
            <div class="detail-item">
                <span class="detail-label">Tamaño:</span>
                <span class="detail-value">${site.size}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Estado:</span>
                <span class="detail-value status-${site.status}">${site.status.charAt(0).toUpperCase() + site.status.slice(1)}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Precio:</span>
                <span class="detail-value">${site.price}</span>
            </div>
        </div>
        <p class="site-description">${site.description}</p>
        <div class="site-features">
            <h4>Características:</h4>
            <ul>
                ${site.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Update gallery
    if (site.images && site.images.length > 0) {
        siteGalleryGrid.innerHTML = site.images.map(image => `
            <div class="site-gallery-item" onclick="openGalleryModal('${image}', '${site.title}', '${site.description}')">
                <img src="${image}" alt="${site.title}" loading="lazy">
            </div>
        `).join('');
    } else {
        siteGalleryGrid.innerHTML = '<p>No hay imágenes disponibles para este sitio.</p>';
    }
    
    // Show panel
    siteInfoPanel.classList.add('active');
}
