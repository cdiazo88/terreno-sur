# 🚀 Guía de Despliegue - Lengaterra

## ✅ **PASO COMPLETADO**: Código Subido a GitHub

Tu código ya está en: `https://github.com/cdiazo88/terreno-sur`

---

## 🌐 **Opción 1: GitHub Pages (GRATIS - RECOMENDADO)**

### Pasos para Activar GitHub Pages:

1. **Ve a tu repositorio en GitHub**:
   ```
   https://github.com/cdiazo88/terreno-sur
   ```

2. **Ve a la pestaña "Settings"** (en la barra superior del repositorio)

3. **Scroll hacia abajo hasta "Pages"** (en el menú lateral izquierdo)

4. **Configura Pages**:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)

5. **Click "Save"**

6. **¡Tu sitio estará disponible en**:
   ```
   https://cdiazo88.github.io/terreno-sur
   ```

**⏱️ Tiempo**: 2-5 minutos para estar listo

---

## 🔥 **Opción 2: Netlify (GRATIS con más funciones)**

### Método 1: Drag & Drop
1. Ve a: https://netlify.com
2. Crea cuenta gratis
3. Arrastra tu carpeta del proyecto
4. ¡Listo en 30 segundos!

### Método 2: Conectar GitHub
1. En Netlify: "New site from Git"
2. Conecta tu cuenta de GitHub
3. Selecciona el repositorio `terreno-sur`
4. Deploy settings:
   - **Branch**: main
   - **Build command**: (dejar vacío)
   - **Publish directory**: (dejar vacío)
5. **Deploy site**

**🎯 URL personalizada**: Obtendrás algo como `lengaterra-xyz.netlify.app`

---

## ⚡ **Opción 3: Vercel (GRATIS y súper rápido)**

1. Ve a: https://vercel.com
2. Conecta con GitHub
3. Import project: `terreno-sur`
4. ¡Deploy automático!

**🎯 URL**: `lengaterra.vercel.app` (o personalizada)

---

## 🛡️ **Opción 4: Firebase Hosting (Google - GRATIS)**

### Instalación:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

### Configuración:
- **Public directory**: . (punto)
- **Single-page app**: No
- **GitHub deployment**: Yes (opcional)

### Deploy:
```bash
firebase deploy
```

---

## 📊 **Comparación de Opciones**

| Opción | Velocidad | Facilidad | Funciones | SSL | Dominio Personalizado |
|--------|-----------|-----------|-----------|-----|----------------------|
| **GitHub Pages** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ | ✅ (PRO) |
| **Netlify** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | ✅ |
| **Firebase** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ |

---

## 🎯 **RECOMENDACIÓN PARA LENGATERRA**

**Para empezar**: **GitHub Pages** (más simple)
**Para producción**: **Netlify** (más funciones)

---

## 🔧 **Configuración Post-Deploy**

### 1. Dominio Personalizado (Opcional)
- Comprar dominio: `lengaterra.com`
- Configurar DNS según la plataforma elegida

### 2. SSL/HTTPS
- Todas las opciones incluyen SSL gratuito
- ✅ Tu sitio será seguro automáticamente

### 3. Performance
- ✅ Imágenes optimizadas
- ✅ CSS/JS minificado (automático en Netlify/Vercel)
- ✅ CDN global incluido

---

## 📱 **Testing Post-Deploy**

1. **Desktop**: Verifica todas las funciones
2. **Mobile**: Usa DevTools (F12 + móvil)
3. **Real devices**: Prueba en móviles reales
4. **Performance**: https://pagespeed.web.dev

---

## 🆘 **Troubleshooting**

### Si hay errores 404:
- Verificar que `index.html` esté en la raíz
- Configurar redirects si es necesario

### Si las imágenes no cargan:
- Verificar rutas relativas
- Asegurar que las imágenes estén committeadas

### Si el CSS/JS no funciona:
- Verificar enlaces en `index.html`
- Comprobar mayúsculas/minúsculas en nombres de archivos

---

## 📞 **Siguiente Paso**

**¡AHORA ACTIVA GITHUB PAGES!**

1. Ve a: https://github.com/cdiazo88/terreno-sur/settings/pages
2. Selecciona branch: `main`
3. ¡En 5 minutos tendrás tu sitio online!

**URL final será**: `https://cdiazo88.github.io/terreno-sur`
