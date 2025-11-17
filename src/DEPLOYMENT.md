# 🚀 Cloudflare Pages Deployment Guide

## Problem: Cloudflare wykrywa Docusaurus zamiast Vite

### ❌ Objawy:
- Build failuje
- CSS nie ładuje się
- Framework pokazuje "Docusaurus" zamiast "Vite" lub "None"
- Build command jest niepoprawny

---

## ✅ Rozwiązanie (Krok po kroku)

### 1️⃣ Otwórz Cloudflare Pages Dashboard

```
https://dash.cloudflare.com/
→ Pages
→ Twój projekt (marketingowo)
```

### 2️⃣ Przejdź do Settings

```
Project → Settings → Builds & Deployments
```

### 3️⃣ Kliknij "Edit configuration" przy Build settings

### 4️⃣ Ustaw te wartości:

| Setting | Value |
|---------|-------|
| **Framework preset** | `None` (lub `Vite`) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory (advanced)** | `/` (pusty lub `/`) |

### 5️⃣ W sekcji Environment variables (opcjonalnie):

```
NODE_VERSION = 18
```

(ale to nie jest wymagane, bo mamy `.node-version` w repo)

### 6️⃣ Zapisz zmiany

Kliknij **Save**

### 7️⃣ Uruchom nowy deployment

```
Deployments → Retry deployment
```

Lub:

```
Deployments → View build log → Retry deployment
```

---

## 🔍 Weryfikacja

### ✅ Build powinien wyglądać tak:

```bash
> npm run build

> marketingowo-landing@1.0.0 build
> vite build

vite v5.0.8 building for production...
✓ 150 modules transformed.
dist/index.html                   1.45 kB
dist/assets/index-abc123.js      150.21 kB │ gzip: 48.12 kB
dist/assets/index-xyz789.css       8.45 kB │ gzip:  2.31 kB
✓ built in 2.15s

Build completed successfully!
```

### ⚠️ WAŻNE: Sprawdź czy jest plik .css

W build logu **MUSI** pojawić się linia:
```
dist/assets/index-[hash].css
```

Jeśli nie ma - Tailwind się nie skompilował!

### ❌ Build NIE powinien zawierać:

```bash
Error: Cannot find module 'docusaurus'
Error: Could not resolve "@docusaurus/core"
```

### 🛡️ Fallback Protection

**DOBRA WIADOMOŚĆ:** Obecna wersja używa **inline styles** jako fallback.
Nawet jeśli Tailwind CSS się nie załaduje, strona będzie wyglądać dobrze!

To temporary workaround do czasu naprawy Tailwind compilation na Cloudflare.

---

## 🐛 Troubleshooting

### Problem: Nadal pokazuje Docusaurus

**Rozwiązanie:**
1. Wyczyść cache Cloudflare:
   - Settings → Functions → Clear deployment cache
2. Usuń wszystkie environment variables związane z Docusaurus
3. Retry deployment

### Problem: CSS nie działa po deploy

**Rozwiązanie:**
1. Sprawdź w build logu czy pojawia się:
   ```
   dist/assets/index-*.css
   ```
2. Jeśli nie ma - problem z Tailwind
3. Upewnij się że `postcss.config.js` i `tailwind.config.js` są w repo
4. Retry deployment

### Problem: Build failuje z TypeScript errors

**Rozwiązanie:**
Zmień build command na:
```bash
npm install && npm run build
```

(bez `tsc`, bo `npm run build` używa tylko `vite build`)

---

## 📋 Checklist przed deployment

- [ ] Framework preset: `None` lub `Vite`
- [ ] Build command: `npm run build`
- [ ] Build output: `dist`
- [ ] Node version: `18` (auto-detect)
- [ ] Pliki w repo:
  - [ ] `vite.config.ts` ✅
  - [ ] `tailwind.config.js` ✅
  - [ ] `postcss.config.js` ✅
  - [ ] `package.json` ✅
  - [ ] `.node-version` ✅
  - [ ] `styles/globals.css` ✅
  - [ ] `main.tsx` (importuje globals.css) ✅

---

## 🎉 Po successful deployment

Strona powinna:
- ✅ Ładować się natychmiastowo
- ✅ Mieć pełne stylowanie Tailwind (gradienty, kolory, rounded corners)
- ✅ Być responsywna na mobile
- ✅ Mieć poprawne meta tags (Open Graph, Twitter Card)
- ✅ Canonical URL: `https://marketingowo.org`

---

## 📞 Support

Jeśli nadal masz problemy:

1. Sprawdź build logs w Cloudflare
2. Porównaj z lokalnym buildem: `npm run build && npm run preview`
3. Upewnij się że lokalnie działa poprawnie

Lokalne preview powinno wyglądać **identycznie** jak production na Cloudflare.
