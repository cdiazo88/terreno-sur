# 📱 Guía de Testing Mobile para Lengaterra

## Chrome DevTools - Configuración Avanzada

### 1. Abrir DevTools Mobile
```
1. Abrir Chrome → http://localhost:3000
2. Presionar F12 (o Ctrl+Shift+I)
3. Hacer click en el ícono móvil 📱 (arriba izquierda)
4. O usar atajo: Ctrl+Shift+M
```

### 2. Dispositivos Recomendados para Testing
- **iPhone 12 Pro** (390x844) - iOS estándar
- **iPhone SE** (375x667) - iOS pequeño  
- **Samsung Galaxy S20 Ultra** (412x915) - Android grande
- **iPad Air** (820x1180) - Tablet
- **Responsive** (personalizable)

### 3. Configuraciones Importantes

#### Throttling de Red (Simular 3G/4G):
1. En DevTools → pestaña "Network"
2. Cambiar de "No throttling" a "Slow 3G" o "Fast 3G"

#### Simular Touch Events:
1. En DevTools → Settings (⚙️)
2. Experiments → "Enable touch events"

### 4. Breakpoints de Tu Sitio
```css
/* Tu sitio usa estos breakpoints: */
@media (max-width: 768px)  /* Tablets y móviles */
@media (max-width: 480px)  /* Móviles pequeños */  
@media (max-width: 360px)  /* Móviles muy pequeños */
```

## Opciones Alternativas

### BrowserStack (Dispositivos Reales)
- URL: https://www.browserstack.com/live
- Permite probar en dispositivos iOS y Android reales
- Prueba gratuita de 30 minutos

### Responsinator (Vista Rápida)
- URL: http://www.responsinator.com
- Ingresa: http://localhost:3000
- Muestra múltiples tamaños simultáneamente

### ngrok (Acceso Remoto)
Para probar en tu teléfono real:
```bash
# Instalar ngrok
npm install -g ngrok

# Crear túnel al puerto 3000
ngrok http 3000

# Te da una URL pública como: https://abc123.ngrok.io
# Úsala en tu móvil real
```

## Funciones Específicas para Testing Mobile

### Testing del Scroll en Sitios
1. Verificar que el scroll vertical funcione en la sección de sitios
2. Probar que los taps directos abran las modales
3. Confirmar que el scroll no abra modales accidentalmente

### Testing de Modales
1. Verificar que las modales se abran correctamente
2. Probar el scroll interno dentro de las modales
3. Confirmar que el video de fondo no se active accidentalmente

### Touch Events
1. Probar gestos de scroll
2. Verificar taps cortos vs largos
3. Testing de momentum scrolling (iOS)

## Atajos Útiles en Chrome DevTools

- **Ctrl+Shift+M**: Toggle mobile view
- **Ctrl+Shift+C**: Inspect element
- **Ctrl+R**: Reload page
- **F5**: Refresh
- **Shift+F5**: Hard refresh (ignora cache)

## Resolución de Problemas Comunes

### Si no se ve responsive:
1. Verificar que el viewport meta tag esté en index.html:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

### Si los touch events no funcionan:
1. DevTools → Settings → Experiments → Enable touch events

### Para debugging CSS mobile:
1. DevTools → Elements → Styles
2. Ver qué media queries están activas
3. Modificar CSS en tiempo real

## URLs de Testing Recomendadas

1. **Desarrollo local**: http://localhost:3000
2. **Con ngrok**: https://[random].ngrok.io  
3. **IP local**: http://[tu-ip]:3000 (para otros dispositivos en tu red)
