// Implementación segura con EmailJS - Reemplazar en script.js

// =============================================================================
// EmailJS Configuration (más seguro que el formulario actual)
// =============================================================================

// Configuración de EmailJS
const EMAILJS_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID', // Reemplazar con tu Service ID
    templateId: 'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID
    userId: 'YOUR_USER_ID' // Reemplazar con tu User ID
};

// Inicializar EmailJS
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.userId);
    }
}

// Función mejorada para envío seguro
function submitSecureForm(data, form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Verificar si EmailJS está disponible
    if (typeof emailjs === 'undefined') {
        showFormMessage('Error: Servicio de email no disponible', 'error');
        resetButton();
        return;
    }
    
    // Preparar datos para EmailJS
    const templateParams = {
        from_name: data.nombre,
        from_email: data.email,
        phone: data.telefono,
        message: data.mensaje,
        to_email: 'contacto@lengaterra.cl',
        reply_to: data.email,
        timestamp: new Date().toLocaleString('es-CL'),
        user_ip: 'Hidden for privacy', // La IP se puede obtener del servidor
        user_agent: navigator.userAgent.substring(0, 100) // Limitado por seguridad
    };
    
    // Enviar email usando EmailJS
    emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
    )
    .then(function(response) {
        console.log('Email enviado exitosamente:', response.status, response.text);
        showFormMessage('¡Gracias por tu mensaje! Te contactaremos pronto.', 'success');
        form.reset();
        
        // Limpiar estados de validación
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('error', 'valid', 'focused');
        });
        
        // Opcional: Enviar evento a Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                event_category: 'contact',
                event_label: 'success'
            });
        }
        
    }, function(error) {
        console.error('Error al enviar email:', error);
        showFormMessage('Error al enviar el mensaje. Por favor intenta nuevamente o contacta por WhatsApp.', 'error');
        
        // Opcional: Enviar evento de error a Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_error', {
                event_category: 'contact',
                event_label: 'send_failed'
            });
        }
    })
    .finally(function() {
        resetButton();
    });
    
    function resetButton() {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

// Validación adicional para producción
function validateFormForProduction(data) {
    // Validación adicional de email contra dominios temporales
    const temporaryDomains = [
        '10minutemail.com',
        'tempmail.org',
        'guerrillamail.com',
        'mailinator.com'
    ];
    
    const emailDomain = data.email.split('@')[1];
    if (temporaryDomains.includes(emailDomain)) {
        showFormMessage('Por favor usa un email permanente', 'error');
        return false;
    }
    
    // Validación de palabras prohibidas en nombre
    const prohibitedWords = ['test', 'prueba', 'admin', 'root', 'null', 'undefined'];
    const nameWords = data.nombre.toLowerCase().split(' ');
    
    for (let word of nameWords) {
        if (prohibitedWords.includes(word)) {
            showFormMessage('Por favor ingresa tu nombre real', 'error');
            return false;
        }
    }
    
    return true;
}

// Función para cargar EmailJS dinámicamente
function loadEmailJS() {
    return new Promise((resolve, reject) => {
        if (typeof emailjs !== 'undefined') {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdn.emailjs.com/dist/email.min.js';
        script.onload = () => {
            initEmailJS();
            resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadEmailJS().then(() => {
        console.log('EmailJS cargado exitosamente');
    }).catch(error => {
        console.error('Error cargando EmailJS:', error);
    });
});

// =============================================================================
// Template para EmailJS
// =============================================================================

/*
Crear un template en EmailJS con el siguiente contenido:

Subject: Nuevo contacto desde Lengaterra.cl

Body:
Has recibido un nuevo mensaje de contacto desde el sitio web de Lengaterra:

DATOS DEL CONTACTO:
-------------------
Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Fecha: {{timestamp}}

MENSAJE:
--------
{{message}}

-------------------
Este mensaje fue enviado desde el formulario de contacto de lengaterra.cl
Para responder, puedes usar el email: {{reply_to}}
*/

// =============================================================================
// Instrucciones de configuración
// =============================================================================

/*
PASOS PARA CONFIGURAR EMAILJS:

1. Registrarse en https://www.emailjs.com/
2. Crear un servicio (Gmail, Outlook, etc.)
3. Crear un template con el contenido de arriba
4. Reemplazar las constantes en EMAILJS_CONFIG
5. Agregar el script de EmailJS al HTML:
   <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
6. Probar el formulario

VENTAJAS DE EMAILJS:
- No requiere backend
- Manejo automático de spam
- Rate limiting incorporado
- Fácil configuración
- Gratis hasta 200 emails/mes
*/
