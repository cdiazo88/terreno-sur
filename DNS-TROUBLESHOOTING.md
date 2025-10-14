# 🚨 Solución: "Nombre de host NS inválido" - Lengaterra

## 📋 **Problema Identificado**

El error "Nombre de host NS inválido" aparece cuando:
- Los **Nameservers** no están configurados correctamente
- El **formato DNS** tiene errores de sintaxis
- Hay **conflictos** entre registros DNS

## ✅ **Tu Estado Actual**

✅ **CNAME configurado**: `www.lengaterra.cl`  
✅ **GitHub Pages**: Activo  
✅ **Repositorio**: `cdiazo88/terreno-sur`  

---

## 🔧 **Soluciones por Proveedor de Dominio**

### **Opción 1: Si compraste en NIC Chile (.cl)**

#### Configuración DNS Correcta:
1. **Login** en: https://www.nic.cl
2. **Mi cuenta** → **Dominios** → `lengaterra.cl`
3. **Configurar DNS** → **Registros DNS**
4. **BORRAR** todos los registros existentes
5. **Agregar** estos registros:

```dns
Tipo: A
Nombre: @
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.111.153
TTL: 3600

Tipo: CNAME
Nombre: www
Valor: cdiazo88.github.io
TTL: 3600
```

### **Opción 2: Si compraste en otro proveedor**

#### Para Namecheap:
1. **Login** en Namecheap
2. **Manage** tu dominio
3. **Advanced DNS**
4. **Borrar** todos los registros
5. **Agregar**:

```dns
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

#### Para Cloudflare:
```dns
Type: A
Name: @
Content: 185.199.108.153
Proxy status: DNS only

Type: A
Name: @
Content: 185.199.109.153
Proxy status: DNS only

Type: A
Name: @
Content: 185.199.110.153
Proxy status: DNS only

Type: A
Name: @
Content: 185.199.111.153
Proxy status: DNS only

Type: CNAME
Name: www
Content: cdiazo88.github.io
Proxy status: DNS only
```

---

## ⚠️ **Errores Comunes que Causan "NS Inválido"**

### ❌ **Error 1: Formato Incorrecto**
```dns
# MAL ❌
Host: www.lengaterra.cl
Value: https://cdiazo88.github.io

# BIEN ✅
Host: www
Value: cdiazo88.github.io
```

### ❌ **Error 2: Nameservers Mixtos**
No mezcles nameservers de diferentes proveedores:
```dns
# MAL ❌ (mixto)
ns1.namecheap.com
dns1.cloudflare.com

# BIEN ✅ (consistente)
ns1.namecheap.com
ns2.namecheap.com
```

### ❌ **Error 3: TTL Muy Alto**
```dns
# MAL ❌
TTL: 86400 (24 horas)

# BIEN ✅
TTL: 3600 (1 hora)
```

---

## 🚀 **Configuración GitHub Pages**

### Verificar GitHub Settings:
1. Ve a: https://github.com/cdiazo88/terreno-sur/settings/pages
2. **Source**: Deploy from a branch
3. **Branch**: main
4. **Custom domain**: `lengaterra.cl` (SIN www)
5. ✅ **Enforce HTTPS**: Activado

### Actualizar archivo CNAME:
Tu archivo actual tiene `www.lengaterra.cl`, cámbialo a:
```
lengaterra.cl
```

---

## 🛠️ **Pasos de Resolución Inmediata**

### 1. **Limpiar DNS Cache**
```cmd
ipconfig /flushdns
```

### 2. **Verificar DNS**
```cmd
nslookup lengaterra.cl
nslookup www.lengaterra.cl
```

### 3. **Probar Online**
- https://dnschecker.org
- https://whatsmydns.net

---

## 📞 **Configuración Correcta Final**

### En tu Proveedor DNS:
```dns
# Dominio principal
A Record: @ → 185.199.108.153
A Record: @ → 185.199.109.153
A Record: @ → 185.199.110.153
A Record: @ → 185.199.111.153

# Subdominio www
CNAME: www → cdiazo88.github.io
```

### En GitHub:
- **Custom domain**: `lengaterra.cl`
- **Archivo CNAME**: `lengaterra.cl`
- **HTTPS**: ✅ Activado

---

## ⏰ **Tiempos de Propagación**

- **Cambios DNS**: 2-6 horas
- **SSL Certificate**: 10-60 minutos
- **Cache navegador**: Ctrl+F5

---

## 🆘 **Si Aún No Funciona**

### Alternativa Temporal:
Usa **Netlify** mientras se resuelve:
1. Ve a: https://netlify.com
2. **New site from Git**
3. Conecta: `cdiazo88/terreno-sur`
4. **Custom domain**: `lengaterra.cl`

### Soporte Directo:
- **NIC Chile**: soporte@nic.cl
- **Namecheap**: Live chat
- **Cloudflare**: Support ticket

---

## ✅ **Checklist de Verificación**

- [ ] DNS Records configurados correctamente
- [ ] CNAME file: solo `lengaterra.cl`
- [ ] GitHub Pages: Custom domain configurado
- [ ] HTTPS: Activado
- [ ] Cache DNS: Limpiado
- [ ] Propagación: Esperando 2-6 horas

**🎯 URL Final**: `https://lengaterra.cl`

---

## 📱 **Testing Post-Configuración**

Una vez que funcione:
```bash
# Verificar
https://lengaterra.cl
https://www.lengaterra.cl

# Mobile testing
F12 → Mobile device toggle
```

**¿En qué proveedor compraste el dominio?** Te ayudo con los pasos específicos.
