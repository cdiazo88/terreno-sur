# Guía de Deployment - Lengaterra Website

## Opciones de Hosting

### 1. GitHub Pages (Gratuito)
1. Sube el código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. La página estará disponible en `https://tuusuario.github.io/terreno-sur`

### 2. Netlify (Gratuito)
1. Conecta tu repositorio de GitHub
2. Configuración de build:
   - Build command: (vacío)
   - Publish directory: ./
3. Deploy automático en cada push

### 3. Vercel (Gratuito)
1. Conecta tu repositorio de GitHub
2. Configuración automática
3. Deploy en cada push

### 4. Hosting tradicional (Pago)
1. Sube todos los archivos via FTP/SFTP
2. Asegúrate de que el dominio apunte a la carpeta correcta
3. Configura HTTPS si es necesario

## Antes del Deployment

### Checklist de Pre-Deploy
- [ ] Agregar todas las imágenes reales en `assets/images/`
- [ ] Agregar video hero en `assets/videos/`
- [ ] Configurar URLs reales de redes sociales en `js/config.js`
- [ ] Verificar información de contacto
- [ ] Probar formulario de contacto
- [ ] Optimizar imágenes para web
- [ ] Verificar responsive design en diferentes dispositivos
- [ ] Probar velocidad de carga
- [ ] Verificar SEO básico

### Optimización de Imágenes
```bash
# Usando ImageMagick para optimizar imágenes
magick input.jpg -quality 85 -strip -resize 1920x1080 output.jpg

# Para múltiples imágenes
for file in *.jpg; do
    magick "$file" -quality 85 -strip "${file%.jpg}-optimized.jpg"
done
```

### Configuración de HTTPS
Para producción, asegúrate de:
1. Configurar certificado SSL
2. Redirigir HTTP a HTTPS
3. Actualizar URLs absolutas si es necesario

## Configuración de Dominio

### DNS Records
```
Type: A
Name: @
Value: [IP del servidor]

Type: CNAME
Name: www
Value: lengaterra.cl
```

### Configuración de Servidor
Para Apache (.htaccess):
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Monitoreo y Analytics

### Google Analytics
1. Crea una cuenta en Google Analytics
2. Agrega el código de seguimiento antes del cierre de `</head>`
3. Configura objetivos (formulario de contacto, clics en WhatsApp, etc.)

### Google Search Console
1. Verifica la propiedad del sitio
2. Envía el sitemap (si lo generas)
3. Monitorea errores de indexación

## Mejoras Post-Deploy

### Performance
- [ ] Implementar lazy loading para imágenes
- [ ] Minificar CSS y JS
- [ ] Implementar service worker para cache
- [ ] Optimizar carga de fuentes

### SEO
- [ ] Crear sitemap.xml
- [ ] Configurar Open Graph tags
- [ ] Implementar JSON-LD structured data
- [ ] Optimizar meta descriptions

### Funcionalidades Adicionales
- [ ] Integrar con CRM para formularios
- [ ] Implementar chat en vivo
- [ ] Agregar testimonios de clientes
- [ ] Crear blog sobre conservación

## Backup y Mantenimiento

### Backup Regular
1. Backup automático de archivos
2. Backup de base de datos (si aplica)
3. Versionado de código en Git

### Monitoreo
1. Uptime monitoring
2. Performance monitoring
3. Security monitoring

## Comandos Útiles

### Servidor Local
```bash
# Python
python -m http.server 3000

# Node.js (con live-server)
npx live-server --port=3000

# PHP
php -S localhost:3000
```

### Optimización
```bash
# Comprimir imágenes
imageoptim assets/images/*.jpg

# Minificar CSS
cleancss -o styles.min.css styles.css

# Minificar JS
uglifyjs script.js -o script.min.js
```

## Contacto para Soporte

Para cualquier duda sobre el deployment:
- Email técnico: [tu-email@ejemplo.com]
- Documentación: README.md
- Issues: GitHub Issues

---

*Última actualización: 16 de julio de 2025*
