# Imágenes de Sitios - Estructura de Galería

## Estructura de Carpetas Actualizada

Para que la galería de cada sitio funcione correctamente, necesitas crear la siguiente estructura de carpetas:

### Estructura Requerida:
```
assets/images/sitios/
├── sitio-01/
│   ├── vista-panoramica.jpg
│   ├── acceso-vehicular.jpg
│   ├── riachuelo.jpg
│   └── bosque.jpg
├── sitio-02/
│   ├── microclimas.jpg
│   ├── flora-nativa.jpg
│   └── privacidad.jpg
├── sitio-03/
│   └── vista-especial.jpg
├── sitio-04/
│   ├── superficie-grande.jpg
│   ├── zonas-multiples.jpg
│   └── potencial.jpg
├── sitio-05/
│   └── proyecto-conservacion.jpg
├── sitio-06/
│   ├── observacion-fauna.jpg
│   ├── tranquilidad.jpg
│   └── bosque-pristino.jpg
├── sitio-07/
│   ├── refugio-intimo.jpg
│   └── bosque-denso.jpg
├── sitio-08/
│   └── ubicacion-estrategica.jpg
├── sitio-09/
│   ├── superficie-maxima.jpg
│   ├── caracteristicas-unicas.jpg
│   └── multiples-accesos.jpg
├── sitio-10/
│   ├── equilibrio.jpg
│   └── vista-despejada.jpg
├── sitio-11/
│   └── proyecto-ecoturistico.jpg
└── sitio-12/
    ├── ultima-oportunidad.jpg
    ├── superficie-grande.jpg
    └── caracteristicas-premium.jpg
```

## Funcionalidades de la Galería

### ✨ **Características Implementadas:**
- **Galería integrada** en el panel de información de cada sitio
- **Modal a pantalla completa** con navegación entre imágenes
- **Títulos y descripciones** para cada imagen
- **Navegación por teclado** (flechas, ESC para cerrar)
- **Diseño responsivo** que se adapta a todos los dispositivos
- **Efectos hover** y transiciones suaves

### 🎛️ **Controles del Modal:**
- **Clic en imagen**: Abre modal a pantalla completa
- **Botón X**: Cierra el modal
- **Flechas laterales**: Navega entre imágenes
- **Teclado**: ← → para navegar, ESC para cerrar
- **Clic fuera**: Cierra el modal

## Especificaciones de Imagen

### Formato y Tamaño:
- **Formato**: JPG preferido (PNG también funciona)
- **Resolución galería**: 300x225px (proporción 4:3)
- **Resolución modal**: 1200x900px máximo
- **Tamaño archivo**: Máximo 300KB por imagen

### Optimización:
- **Compresión**: 75-85% de calidad
- **Formato web**: JPG para fotos, PNG para gráficos
- **Nombres descriptivos**: Sin espacios, usar guiones

## Información por Sitio

### 🏞️ **Sitio 01 - Vista Panorámica** (4 imágenes)
- **vista-panoramica.jpg**: Vista del valle desde el punto más alto
- **acceso-vehicular.jpg**: Camino de acceso para vehículos 4x4
- **riachuelo.jpg**: Riachuelo cristalino que bordea el sitio
- **bosque.jpg**: Bosque de lengas centenarias

### 🌿 **Sitio 02 - Diversidad Natural** (3 imágenes)
- **microclimas.jpg**: Diferentes zonas climáticas del sitio
- **flora-nativa.jpg**: Vegetación autóctona abundante
- **privacidad.jpg**: Ubicación aislada y privada

### 🏔️ **Sitio 03 - Reservado** (1 imagen)
- **vista-especial.jpg**: Vista única del bosque (referencia)

### 🏡 **Sitio 04 - Familiar** (3 imágenes)
- **superficie-grande.jpg**: Panorámica de las 4.1 hectáreas
- **zonas-multiples.jpg**: Diferentes áreas del terreno
- **potencial.jpg**: Posibilidades de desarrollo sostenible

### 🌱 **Sitio 05 - Vendido** (1 imagen)
- **proyecto-conservacion.jpg**: Ejemplo de desarrollo sostenible

### 🦅 **Sitio 06 - Observación Fauna** (3 imágenes)
- **observacion-fauna.jpg**: Punto de avistamiento de aves
- **tranquilidad.jpg**: Ambiente de paz natural
- **bosque-pristino.jpg**: Bosque virgen sin intervención

### 🏞️ **Sitio 07 - Refugio Íntimo** (2 imágenes)
- **refugio-intimo.jpg**: Espacio personal en la naturaleza
- **bosque-denso.jpg**: Vegetación densa y privada

### 🌲 **Sitio 08 - Reservado** (1 imagen)
- **ubicacion-estrategica.jpg**: Posición privilegiada

### 💎 **Sitio 09 - Premium** (3 imágenes)
- **superficie-maxima.jpg**: Las 4.2 hectáreas completas
- **caracteristicas-unicas.jpg**: Formaciones rocosas y cascadas
- **multiples-accesos.jpg**: Diversos caminos de entrada

### ⚖️ **Sitio 10 - Equilibrio** (2 imágenes)
- **equilibrio.jpg**: Tamaño ideal para manejo sustentable
- **vista-despejada.jpg**: Panorámica hacia las montañas

### 🌍 **Sitio 11 - Vendido** (1 imagen)
- **proyecto-ecoturistico.jpg**: Desarrollo turístico sostenible

### 🎯 **Sitio 12 - Última Oportunidad** (3 imágenes)
- **ultima-oportunidad.jpg**: El último sitio grande disponible
- **superficie-grande.jpg**: 3.9 hectáreas de territorio virgen
- **caracteristicas-premium.jpg**: Ubicación final con mejores características

## Cómo Probar la Funcionalidad

### 1. Agregar Imágenes de Prueba:
```bash
# Crear carpeta de ejemplo
mkdir "assets/images/sitios/sitio-01"

# Agregar imagen de prueba
# (copia cualquier imagen como "vista-panoramica.jpg")
```

### 2. Probar en el Navegador:
1. Abre el sitio web
2. Ve a la sección "Plano de Sitios"
3. Haz clic en "Sitio 01"
4. Verifica que aparece la galería en el panel
5. Haz clic en la imagen para abrir el modal
6. Prueba la navegación con flechas y teclado

### 3. Fallback sin Imágenes:
- Si no hay imágenes, la galería se oculta automáticamente
- El sitio funciona normalmente sin las imágenes

## Personalización

### Agregar Más Imágenes:
Edita el objeto `siteData` en `js/script.js` para agregar más imágenes a cualquier sitio:

```javascript
gallery: [
    {
        src: "assets/images/sitios/sitio-01/nueva-imagen.jpg",
        title: "Nuevo Título",
        description: "Nueva descripción de la imagen."
    }
]
```

### Cambiar Descripciones:
Modifica los títulos y descripciones directamente en el archivo JavaScript.

¿Necesitas ayuda con algún aspecto específico de la galería?
