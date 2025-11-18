# ✅ Deployment Checklist - Cloudflare Pages

## 📋 Pre-Deployment

### Local Testing
- [ ] `npm install` działa bez błędów
- [ ] `npm run build` tworzy folder `build/` lub `dist/`
- [ ] `npm run preview` pokazuje stronę poprawnie
- [ ] Strona wygląda dobrze (kolory, spacing, CTA box)
- [ ] Telefon działa: +48 694 435 251

### Git
- [ ] Wszystkie zmiany są committed
- [ ] Push do GitHub wykonany
- [ ] Branch: `main` lub `master`

---

## ⚙️ Cloudflare Settings

### Framework Configuration
```
Framework preset: None
```
**NIE wybieraj:**
- ❌ React
- ❌ Vite  
- ❌ Create React App
- ❌ Docusaurus

**WYBIERZ:**
- ✅ None

### Build Configuration
```
Build command: npm run build
```
**NIE:**
- ❌ `npm run build:check` (TypeScript może failować)
- ❌ `tsc && vite build`
- ❌ `vite build`

**TAK:**
- ✅ `npm run build`

### Output Directory
```
Build output directory: build
```

**UWAGA:** Vite 6.x używa `build/`, nie `dist/`

Sprawdź w build logs:
```
build/index.html          ← Jeśli widzisz "build/" → ustaw "build"
dist/index.html           ← Jeśli widzisz "dist/" → ustaw "dist"
```

### Root Directory
```
Root directory (advanced): /
```
Lub zostaw puste.

---

## 🚀 Deployment Steps

### 1. Otwórz Cloudflare Dashboard
```
https://dash.cloudflare.com/
→ Pages
→ Twój projekt (marketingowo)
```

### 2. Przejdź do Settings
```
Settings → Builds & Deployments
```

### 3. Edit Configuration
Kliknij **"Edit configuration"** przy "Build settings"

### 4. Ustaw wartości
- [ ] Framework preset: `None`
- [ ] Build command: `npm run build`
- [ ] Build output directory: `build`
- [ ] Root directory: `/` (lub puste)

### 5. Save
Kliknij **"Save"**

### 6. Deploy
```
Deployments → Retry deployment
```

---

## 🔍 Verify Deployment

### Build Logs
Sprawdź czy widzisz:
```
✅ vite v6.3.5 building for production...
✅ ✓ 27 modules transformed.
✅ build/index.html                 
✅ build/assets/index-[hash].css  
✅ build/assets/index-[hash].js
✅ ✓ built in XXXms
```

**NIE powinno być:**
```
❌ Error: Output directory "dist" not found
❌ Error: Cannot find module 'docusaurus'
❌ TypeScript compilation errors
```

### Production Site
Po udanym deploymencie sprawdź:
- [ ] Strona się ładuje
- [ ] Widać header "Marketingowo.org" (duży, bold)
- [ ] Gradient box (niebiesko-fioletowy)
- [ ] Niebieski przycisk telefonu
- [ ] Hover effect działa
- [ ] Tekst jest czytelny (proper spacing)
- [ ] Mobile responsive działa

---

## 🐛 Troubleshooting

### Problem: "Output directory 'dist' not found"
**Fix:** Zmień `Build output directory` na `build`

**Dokumentacja:** [VITE6-FIX.md](./VITE6-FIX.md)

### Problem: Strona bez styli (czarny tekst)
**Fix:** Inline styles są już zastosowane, powinno działać

**Dokumentacja:** [CLOUDFLARE-FIX.md](./CLOUDFLARE-FIX.md)

### Problem: Framework zmienia się na Docusaurus
**Fix:** Framework preset MUSI być `None`

**Dokumentacja:** [DEPLOYMENT.md](./DEPLOYMENT.md)

### Problem: Build failuje z TypeScript errors
**Fix:** Użyj `npm run build` zamiast `npm run build:check`

---

## 📊 Final Check

Po deploymencie:
- [ ] ✅ Strona działa na production URL
- [ ] ✅ Wszystkie style są widoczne
- [ ] ✅ Link telefonu działa
- [ ] ✅ Meta tags są obecne (sprawdź View Source)
- [ ] ✅ Mobile wygląda dobrze
- [ ] ✅ Performance OK (Lighthouse)

---

## 🎉 Success!

Jeśli wszystko działa - **deployment się udał!** 🚀

### Custom Domain (opcjonalnie)
Jeśli chcesz dodać domenę marketingowo.org:
```
Cloudflare Pages → Custom domains → Set up a domain
```

---

## 📖 Dokumentacja

- [FIX-SUMMARY.md](./FIX-SUMMARY.md) - Szybkie rozwiązania
- [QUICK-START.md](./QUICK-START.md) - 3-krokowy guide
- [VITE6-FIX.md](./VITE6-FIX.md) - Fix dla output directory
- [CLOUDFLARE-FIX.md](./CLOUDFLARE-FIX.md) - Fix dla CSS
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Pełna instrukcja
- [README.md](./README.md) - Overview projektu
