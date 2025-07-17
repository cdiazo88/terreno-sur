// Configuración del proyecto Lengaterra
const CONFIG = {
  // Información del proyecto
  projectName: "Lengaterra",
  tagline: "Refugio Natural en la Patagonia Chilena",
  
  // Coordenadas geográficas
  coordinates: {
    lengaterra: {
      lat: -45.5,
      lng: -71.5,
      name: "Lengaterra",
      description: "Refugio Natural en la Patagonia"
    },
    coyhaique: {
      lat: -45.575,
      lng: -72.066,
      name: "Coyhaique",
      description: "46 km de distancia",
      distance: "46 km"
    },
    villaOrtega: {
      lat: -45.433,
      lng: -71.733,
      name: "Villa Ortega",
      description: "14 km de distancia",
      distance: "14 km"
    }
  },
  
  // Información de contacto
  contact: {
    email: "contacto@lengaterra.cl",
    phone: "+56 9 7394 8891",
    whatsapp: "+56973948891" // Sin espacios ni guiones para el enlace
  },
  
  // Datos del proyecto
  projectData: {
    co2Absorption: 4.1, // Toneladas por año por lote
    conservationPercentage: 95,
    constructionPercentage: 5,
    lengasLifespan: 200, // Años
    distanceToCoyhaique: 46, // km
    distanceToVillaOrtega: 14 // km
  },
  
  // Colores del proyecto
  colors: {
    primary: "#84716a",
    secondary: "#9c8679",
    accent: "#b5a396",
    textDark: "#3d342f",
    textLight: "#6b7280"
  },
  
  // Animaciones
  animations: {
    duration: 1000,
    delay: 100,
    distance: "60px"
  },
  
  // SEO
  seo: {
    title: "Lengaterra - Refugio Natural en la Patagonia",
    description: "Refugio natural exclusivo en bosque de lengas, Patagonia chilena. Terrenos únicos a 40 minutos de Coyhaique con compromiso de conservación.",
    keywords: [
      "refugio Patagonia",
      "bosque de lengas",
      "terrenos exclusivos Chile",
      "Coyhaique",
      "conservación natural",
      "Nothofagus pumilio",
      "Villa Ortega",
      "inversión sostenible"
    ]
  },
  
  // Redes sociales
  socialMedia: {
    facebook: "#", // Reemplazar con URL real
    instagram: "#", // Reemplazar con URL real
    linkedin: "#" // Reemplazar con URL real
  },
  
  // Configuración del mapa
  map: {
    zoom: 10,
    tileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors"
  }
};

// Exportar configuración si se usa con módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
