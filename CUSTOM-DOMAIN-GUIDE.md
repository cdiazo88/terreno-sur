# 🌐 Guía Completa: Dominio Personalizado para Lengaterra

## 🎯 **Opciones de Dominio para tu Sitio**

### **Dominios Sugeridos para Lengaterra:**
- `lengaterra.cl` (ideal - dominio chileno)
- `lengaterra.com` (internacional)
- `lengaterra-patagonia.com`
- `refugiolengaterra.cl`
- `bosquelengaterra.com`

---

## 💰 **¿Dónde Comprar el Dominio?**

### **Proveedores Chilenos (Recomendados)**
1. **NIC Chile** - `.cl` oficial
   - URL: https://www.nic.cl
   - Precio: ~$15.000 CLP/año
   - ✅ Soporte local, dominio .cl

2. **DonDominio Chile**
   - URL: https://www.dondominio.com/chile
   - Precio: ~$12.000 CLP/año (.com)
   - ✅ Interfaz en español

### **Proveedores Internacionales (Baratos)**
1. **Namecheap**
   - URL: https://www.namecheap.com
   - Precio: ~$8 USD/año
   - ✅ Muy económico, buen soporte

2. **Cloudflare Registrar**
   - URL: https://www.cloudflare.com/products/registrar
   - Precio: Al costo (~$8-10 USD/año)
   - ✅ Sin markup, incluye CDN gratis

---

## 🚀 **Configuración por Plataforma de Hosting**

## **Opción 1: GitHub Pages + Dominio Personalizado**

### Paso 1: Activar GitHub Pages
1. Ve a: https://github.com/cdiazo88/terreno-sur/settings/pages
2. **Source**: Deploy from a branch
3. **Branch**: main
4. **Save**

### Paso 2: Configurar Dominio en GitHub
1. En la misma página de Pages
2. **Custom domain**: `lengaterra.com` (tu dominio)
3. ✅ **Enforce HTTPS**: Activar
4. **Save**

### Paso 3: Crear archivo CNAME
GitHub creará automáticamente, pero también puedes crearlo manualmente:
```
lengaterra.com
```

### Paso 4: Configurar DNS del Dominio
En tu proveedor de dominio (ej: Namecheap), configura:

**Para dominio principal (lengaterra.com):**
```
Tipo: A
Host: @
Valor: 185.199.108.153
TTL: Automático

Tipo: A  
Host: @
Valor: 185.199.109.153
TTL: Automático

Tipo: A
Host: @
Valor: 185.199.110.153
TTL: Automático

Tipo: A
Host: @
Valor: 185.199.111.153
TTL: Automático
```

**Para www (www.lengaterra.com):**
```
Tipo: CNAME
Host: www
Valor: cdiazo88.github.io
TTL: Automático
```

---

## **Opción 2: Netlify + Dominio Personalizado**

### Paso 1: Deploy en Netlify
1. Ve a: https://netlify.com
2. **New site from Git**
3. Conecta tu GitHub
4. Selecciona: `terreno-sur`
5. **Deploy site**

### Paso 2: Configurar Dominio
1. En el dashboard de Netlify
2. **Domain settings**
3. **Add custom domain**
4. Ingresa: `lengaterra.com`

### Paso 3: Configurar DNS
Netlify te dará los nameservers para configurar en tu proveedor:
```
dns1.p05.nsone.net
dns2.p05.nsone.net
dns3.p05.nsone.net
dns4.p05.nsone.net
```

O configurar registros A/CNAME según te indique Netlify.

---

## **Opción 3: Vercel + Dominio Personalizado**

### Paso 1: Deploy en Vercel
1. Ve a: https://vercel.com
2. **Import Git Repository**
3. Selecciona: `terreno-sur`
4. **Deploy**

### Paso 2: Configurar Dominio
1. En el dashboard del proyecto
2. **Settings** → **Domains**
3. **Add Domain**: `lengaterra.com`
4. Vercel te dará las configuraciones DNS necesarias

---

## 🛡️ **Configuración DNS Completa (Ejemplo con Namecheap)**

### Si compraste en Namecheap:
1. **Login** a tu cuenta Namecheap
2. **Manage** el dominio comprado
3. **Advanced DNS**
4. Agregar estos registros:

```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A Record  
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A Record
Host: @  
Value: 185.199.110.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.111.153  
TTL: Automatic

Type: CNAME Record
Host: www
Value: cdiazo88.github.io
TTL: Automatic
```

---

## ⚡ **Configuración Avanzada (Opcional)**

### **Subdominio para Testing**
Si quieres `test.lengaterra.com`:
```
Type: CNAME
Host: test  
Value: cdiazo88.github.io
TTL: Automatic
```

### **Email Forwarding**
Para `contacto@lengaterra.com`:
```
Type: MX
Host: @
Value: mx1.forwardemail.net
Priority: 10

Type: MX
Host: @  
Value: mx2.forwardemail.net
Priority: 20
```

### **Redirecciones**
Para redirigir `www` a dominio principal:
```
Type: CNAME
Host: www
Value: lengaterra.com
TTL: Automatic
```

---

## 🕐 **Tiempos de Propagación**

- **DNS**: 4-48 horas (generalmente 2-6 horas)
- **SSL**: 10-60 minutos después de DNS
- **Verificación**: Usa https://dnschecker.org

---

## ✅ **Checklist Post-Configuración**

### Verificar que funcione:
- [ ] `http://lengaterra.com` → Redirige a HTTPS
- [ ] `https://lengaterra.com` → Carga el sitio
- [ ] `https://www.lengaterra.com` → Funciona
- [ ] **SSL/Certificado**: Candado verde en navegador
- [ ] **Performance**: Prueba en https://pagespeed.web.dev

### Testing móvil:
- [ ] Responsive design funciona
- [ ] Scroll en sección de sitios OK
- [ ] Modales abren correctamente
- [ ] Video no se activa accidentalmente

---

## 🎯 **Recomendación Final**

### **Para Lengaterra te recomiendo:**

1. **Comprar**: `lengaterra.cl` en NIC Chile (~$15.000 CLP/año)
2. **Hosting**: GitHub Pages (gratis) o Netlify (gratis con más funciones)
3. **SSL**: Automático incluido
4. **CDN**: Cloudflare gratis (opcional para velocidad)

### **Pasos en orden:**
1. ✅ **Compra el dominio** (15 minutos)
2. ✅ **Activa GitHub Pages** (5 minutos)
3. ✅ **Configura dominio en GitHub** (2 minutos)
4. ✅ **Configura DNS** (10 minutos)
5. ⏳ **Espera propagación** (2-6 horas)
6. 🎉 **¡Tu sitio estará en lengaterra.cl!**

---

## 🆘 **Troubleshooting**

### Si no funciona después de 24 horas:
1. **Verificar DNS**: https://dnschecker.org
2. **Verificar GitHub Pages**: Settings → Pages
3. **Verificar CNAME**: Debe existir en tu repositorio
4. **Contactar soporte**: Del proveedor de dominio

### Errores comunes:
- ❌ **404**: CNAME mal configurado
- ❌ **SSL Error**: Esperar propagación DNS
- ❌ **No carga**: Verificar registros A

---

## 💡 **Consejo Pro**

**Compra el dominio PRIMERO**, luego configura. Una vez que tengas el dominio, el resto toma solo 30 minutos de configuración + tiempo de propagación.

**¿Necesitas que te ayude con algún paso específico?**
