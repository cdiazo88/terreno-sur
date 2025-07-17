# Guía de Seguridad para Formulario de Contacto - Lengaterra

## 🔒 **Medidas de Seguridad Implementadas (Frontend)**

### ✅ **Validación de Entrada**
- **Sanitización**: Eliminación de caracteres peligrosos (`<`, `>`, `"`, `'`)
- **Validación de campos**: Nombre, email, teléfono con regex específicos
- **Límites de longitud**: Previene ataques de buffer overflow
- **Validación en tiempo real**: Feedback inmediato al usuario

### ✅ **Protección contra Bots**
- **Honeypot**: Campo oculto que detecta bots automáticos
- **Rate limiting**: Máximo 1 envío cada 30 segundos
- **Detección de contenido sospechoso**: Patrones de spam conocidos

### ✅ **Prevención de Inyección**
- **Eliminación de JavaScript**: Filtrado de `javascript:`, `onclick`, etc.
- **Escape de caracteres HTML**: Previene XSS
- **Validación de URLs**: Detección de múltiples enlaces sospechosos

## 🛡️ **Implementación Backend Segura (Recomendaciones)**

### **1. Validación del Servidor (PHP)**
```php
<?php
// Configuración de seguridad
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://lengaterra.cl');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

// Verificar método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['error' => 'Método no permitido']));
}

// Verificar Content-Type
if (!isset($_SERVER['CONTENT_TYPE']) || $_SERVER['CONTENT_TYPE'] !== 'application/json') {
    http_response_code(400);
    exit(json_encode(['error' => 'Content-Type inválido']));
}

// Rate limiting por IP
session_start();
$ip = $_SERVER['REMOTE_ADDR'];
$rate_limit_key = 'contact_form_' . $ip;
$last_submission = $_SESSION[$rate_limit_key] ?? 0;
$rate_limit = 30; // segundos

if (time() - $last_submission < $rate_limit) {
    http_response_code(429);
    exit(json_encode(['error' => 'Demasiadas solicitudes']));
}

// Leer datos JSON
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    exit(json_encode(['error' => 'Datos inválidos']));
}

// Validar y sanitizar datos
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validate_phone($phone) {
    return preg_match('/^(\+?56)?[0-9]{8,9}$/', preg_replace('/\s/', '', $phone));
}

function detect_spam($text) {
    $spam_patterns = [
        '/\b(viagra|cialis|casino|lottery|winner)\b/i',
        '/\b(click here|free money|make money)\b/i',
        '/(https?:\/\/[^\s]+){3,}/i',
        '/(.)\1{10,}/i'
    ];
    
    foreach ($spam_patterns as $pattern) {
        if (preg_match($pattern, $text)) {
            return true;
        }
    }
    return false;
}

// Validar campos requeridos
$nombre = sanitize($input['nombre'] ?? '');
$email = sanitize($input['email'] ?? '');
$telefono = sanitize($input['telefono'] ?? '');
$mensaje = sanitize($input['mensaje'] ?? '');

// Verificar honeypot
if (!empty($input['website'])) {
    // Bot detectado, registrar pero no responder
    error_log("Bot detectado desde IP: $ip");
    exit(json_encode(['success' => true])); // Respuesta falsa
}

// Validaciones
$errors = [];

if (empty($nombre) || strlen($nombre) < 2 || strlen($nombre) > 50) {
    $errors[] = 'Nombre inválido';
}

if (!validate_email($email)) {
    $errors[] = 'Email inválido';
}

if (!validate_phone($telefono)) {
    $errors[] = 'Teléfono inválido';
}

if (empty($mensaje) || strlen($mensaje) < 10 || strlen($mensaje) > 1000) {
    $errors[] = 'Mensaje inválido';
}

// Detectar spam
if (detect_spam($nombre . ' ' . $email . ' ' . $mensaje)) {
    $errors[] = 'Contenido sospechoso detectado';
}

if (!empty($errors)) {
    http_response_code(400);
    exit(json_encode(['error' => implode(', ', $errors)]));
}

// Actualizar rate limiting
$_SESSION[$rate_limit_key] = time();

// Enviar email de forma segura
function send_secure_email($nombre, $email, $telefono, $mensaje) {
    $to = 'contacto@lengaterra.cl';
    $subject = 'Nuevo contacto desde lengaterra.cl';
    
    $body = "Nuevo mensaje de contacto:\n\n";
    $body .= "Nombre: $nombre\n";
    $body .= "Email: $email\n";
    $body .= "Teléfono: $telefono\n";
    $body .= "Mensaje:\n$mensaje\n";
    $body .= "\nIP: " . $_SERVER['REMOTE_ADDR'];
    $body .= "\nFecha: " . date('Y-m-d H:i:s');
    
    $headers = [
        'From: noreply@lengaterra.cl',
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=utf-8',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    return mail($to, $subject, $body, implode("\r\n", $headers));
}

// Enviar email
if (send_secure_email($nombre, $email, $telefono, $mensaje)) {
    // Registrar envío exitoso
    error_log("Formulario enviado exitosamente desde: $email");
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el mensaje']);
}
?>
```

### **2. Configuración del Servidor Web**

#### **Apache (.htaccess)**
```apache
# Seguridad del formulario
<Files "contact.php">
    # Limitar métodos HTTP
    <LimitExcept POST>
        Require all denied
    </LimitExcept>
    
    # Rate limiting básico
    RewriteEngine On
    RewriteCond %{HTTP:X-Forwarded-For} ^(.*)$
    RewriteRule .* - [E=CLIENT_IP:%1]
    
    # Bloquear IPs sospechosas
    RewriteCond %{REMOTE_ADDR} ^(192\.168\.1\.100|10\.0\.0\.5)$
    RewriteRule .* - [F]
</Files>

# Seguridad general
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' unpkg.com cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data:; connect-src 'self'"
```

#### **Nginx**
```nginx
# Rate limiting
http {
    limit_req_zone $binary_remote_addr zone=contact:10m rate=2r/m;
    
    server {
        location /contact.php {
            limit_req zone=contact burst=5 nodelay;
            limit_except POST {
                deny all;
            }
        }
    }
}
```

### **3. Alternativas de Terceros (Más Seguras)**

#### **Formspree**
```javascript
// Usar Formspree para manejo seguro
function submitSecureForm(data, form) {
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.ok) {
            showFormMessage('¡Gracias por tu mensaje!', 'success');
            form.reset();
        } else {
            showFormMessage('Error al enviar el mensaje.', 'error');
        }
    })
    .catch(error => {
        showFormMessage('Error de conexión.', 'error');
    });
}
```

#### **EmailJS**
```javascript
// Configurar EmailJS
emailjs.init('YOUR_USER_ID');

function submitSecureForm(data, form) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: data.nombre,
        from_email: data.email,
        phone: data.telefono,
        message: data.mensaje
    })
    .then(function(response) {
        showFormMessage('¡Gracias por tu mensaje!', 'success');
        form.reset();
    }, function(error) {
        showFormMessage('Error al enviar el mensaje.', 'error');
    });
}
```

## 🔐 **Configuración de Seguridad Adicional**

### **1. HTTPS Obligatorio**
```javascript
// Verificar HTTPS
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    location.replace('https:' + window.location.href.substring(window.location.protocol.length));
}
```

### **2. Content Security Policy**
```html
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' 'unsafe-inline' unpkg.com cdnjs.cloudflare.com;
    style-src 'self' 'unsafe-inline' fonts.googleapis.com;
    font-src fonts.gstatic.com;
    img-src 'self' data:;
    connect-src 'self';
">
```

### **3. Monitoreo y Logging**
- Registrar todos los intentos de envío
- Alertas por múltiples intentos fallidos
- Análisis de patrones de spam
- Backup de mensajes legítimos

## 📋 **Checklist de Seguridad**

### **Antes de Producción:**
- [ ] Implementar validación del servidor
- [ ] Configurar HTTPS
- [ ] Establecer rate limiting
- [ ] Implementar honeypot
- [ ] Configurar CSP headers
- [ ] Probar con herramientas de seguridad
- [ ] Configurar logging y monitoreo
- [ ] Revisar configuración del servidor
- [ ] Probar con diferentes navegadores
- [ ] Verificar cumplimiento GDPR/LOPD

### **Mantenimiento:**
- [ ] Revisar logs regularmente
- [ ] Actualizar patrones de spam
- [ ] Monitorear intentos de ataque
- [ ] Backup de configuraciones
- [ ] Pruebas de penetración periódicas

## ⚠️ **Advertencia**
El formulario actual es solo para desarrollo. Para producción, **DEBES** implementar validación del servidor y usar HTTPS. Nunca confíes únicamente en la validación del frontend.
