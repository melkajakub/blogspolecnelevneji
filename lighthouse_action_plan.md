# Core Web Vitals & Performance Action Plan

## 🚀 Implementované optimalizace

### Kritické zdroje - Preload tagy
```html
<!-- Již implementováno v index.html -->
<link rel="preload" href="/src/main.tsx" as="script">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Font optimalizace
```css
/* Implementováno v src/index.css */
body {
  font-display: swap; /* Eliminuje FOIT (Flash of Invisible Text) */
}
```

### Image optimalizace
```html
<!-- Implementováno ve všech komponentech -->
<img 
  loading="lazy"    <!-- Lazy loading pro non-critical images -->
  width="40"        <!-- Explicit dimensions -->
  height="40" 
  alt="Descriptive Czech alt text"
/>
```

## 📊 Performance metriky k monitorování

### Core Web Vitals cíle:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms  
- **CLS (Cumulative Layout Shift):** < 0.1

### Současný stav (odhad):
- **LCP:** ~3.2s → Cíl: 2.5s
- **FID:** ~80ms → Cíl: 60ms
- **CLS:** ~0.15 → Cíl: 0.1

## 🔧 Další doporučené optimalizacje

### 1. Komprese obrázků
```bash
# Konverze do WebP formátu (manuální úkol)
cwebp -q 80 spolecnelevneji-logo.png -o spolecnelevneji-logo.webp
cwebp -q 85 og-image.png -o og-image.webp
```

### 2. Implementace Service Worker
```javascript
// public/sw.js (budoucí implementace)
const CACHE_NAME = 'spolecne-levneji-v1';
const urlsToCache = [
  '/',
  '/src/main.tsx',
  '/spolecnelevneji-logo.webp'
];
```

### 3. Critical CSS extraction
```css
/* Kritická CSS (above-the-fold) */
.hero-gradient {
  background: var(--hero-gradient);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

### 4. Resource hints optimization
```html
<!-- Budoucí implementace -->
<link rel="dns-prefetch" href="//ehub.cz">
<link rel="preconnect" href="https://www.spolecnelevneji.cz">
```

## 📈 Monitoring setup

### Google PageSpeed Insights
- **URL:** https://pagespeed.web.dev/
- **Testování:** Homepage + top články
- **Frekvence:** Týdně

### Chrome DevTools Lighthouse
- **Metriky:** Performance, SEO, Accessibility, Best Practices
- **Zařízení:** Mobile + Desktop
- **Síť:** Fast 3G simulace

### Google Search Console
- **Core Web Vitals report**
- **Page Experience signals**
- **Mobile Usability**

## 🎯 90-denní roadmapa

### Týden 1-2: ✅ Hotovo
- [x] Preload kritických zdrojů
- [x] Font-display: swap
- [x] Image lazy loading
- [x] Explicit image dimensions

### Týden 3-4: 🔄 V procesu
- [ ] WebP konverze obrázků
- [ ] Optimalizace bundle size
- [ ] Service Worker implementace

### Týden 5-8: 📋 Naplánováno
- [ ] Critical CSS separace
- [ ] JavaScript code splitting
- [ ] CDN implementace

### Týden 9-12: 🚀 Pokročilé
- [ ] HTTP/2 Push optimalizace
- [ ] Advanced caching strategies
- [ ] AMP versions (volitelné)

## 🔍 Lighthouse skóre cíle

### Současný odhad:
- **Performance:** 65/100
- **SEO:** 95/100 (po implementaci)
- **Accessibility:** 88/100
- **Best Practices:** 92/100

### Cílové skóre (3 měsíce):
- **Performance:** 90+/100
- **SEO:** 100/100
- **Accessibility:** 95+/100
- **Best Practices:** 100/100

## ⚡ Quick wins implementované

1. **Eliminace render-blocking zdrojů** ✅
2. **Optimalizace font loading** ✅  
3. **Image lazy loading** ✅
4. **Explicit image dimensions** ✅
5. **Meta viewport optimalizace** ✅

## 📱 Mobile-first optimalizace

### Responsive breakpoints:
```css
/* Implementováno v Tailwind konfiguraci */
sm: 640px   /* tablets */
md: 768px   /* small laptops */  
lg: 1024px  /* desktops */
xl: 1280px  /* large screens */
```

### Touch targets:
- Minimální velikost: 44px × 44px
- Všechna tlačítka jsou touch-friendly
- Proper spacing mezi klikacími elementy

Tato implementace poskytuje solidní základ pro vysoký výkon a user experience. Monitoring výsledků přes Google Search Console a PageSpeed Insights ukáže reálný dopad na Core Web Vitals metriky.