# Marketingowo.org - Landing Page

Strona landing page dla domeny **marketingowo.org**, zoptymalizowana pod SEO dla frazy "marketingowo".

## 🔥 WAŻNE: Known Issues & Fixes

**🎯 QUICK FIX:** [FIX-SUMMARY.md](./FIX-SUMMARY.md) - Rozwiązanie w 30 sekund!  
**📋 DEPLOYMENT:** [DEPLOYMENT-CHECKLIST.md](./DEPLOYMENT-CHECKLIST.md) - Krok po kroku  

**Problem: "Output directory 'dist' not found"** → **[VITE6-FIX.md](./VITE6-FIX.md)** ⚡  
**Problem: Strona bez stylów (CSS)** → **[CLOUDFLARE-FIX.md](./CLOUDFLARE-FIX.md)**

Zastosowano **inline styles** jako fallback - strona zawsze będzie wyglądać dobrze! ✅

---

## 🚀 Cloudflare Pages - Deployment Instructions

### ⚠️ WAŻNE: Framework Detection

Cloudflare Pages może błędnie wykryć projekt jako **Docusaurus**. 

**Musisz ustawić framework RĘCZNIE:**

1. Idź do: **Cloudflare Pages Dashboard** → Twój projekt → **Settings** → **Build & Deploy**

2. Ustaw **Framework preset** na: **`None`** lub **`Vite`**

3. Sprawdź te ustawienia:

   ```
   Framework preset:     None (lub Vite)
   Build command:        npm run build
   Build output dir:     dist
   Node version:         18 (auto-detect from .node-version)
   Root directory:       / (default)
   ```

4. Zapisz zmiany

5. Uruchom nowy deployment: **Deployments** → **Retry deployment**

---

## 📦 Build Configuration

### Pliki konfiguracyjne:
- ✅ `vite.config.ts` - Vite build config
- ✅ `tailwind.config.js` - Tailwind CSS config  
- ✅ `postcss.config.js` - PostCSS processing
- ✅ `tsconfig.json` - TypeScript config
- ✅ `.node-version` - Node 18 (dla Cloudflare)
- ✅ `.nvmrc` - Node 18 (alternatywny)

### Build command breakdown:
```bash
npm install          # Instaluje dependencies
npm run build        # Uruchamia: vite build
```

### Output:
```
dist/
├── index.html       # Entry point
├── assets/
│   ├── *.js         # React bundle
│   └── *.css        # Compiled Tailwind CSS
└── ...
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Build with TypeScript check
npm run build:check
```

---

## 🎨 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5.0
- **Styling:** Tailwind CSS 3.4
- **Deployment:** Cloudflare Pages
- **Language:** Polish (pl)

---

## 🔍 SEO Features

- ✅ Optimized meta tags for "marketingowo" keyword
- ✅ Schema.org structured data
- ✅ Semantic HTML5
- ✅ Polish language content
- ✅ Mobile responsive design
- ✅ Canonical URL: `https://marketingowo.org`

---

## 📞 Contact

Domena na sprzedaż. Kontakt telefoniczny:

**+48 694 435 251**

---

## 🐛 Troubleshooting

### Problem: CSS nie ładuje się na Cloudflare (Strona wygląda jak czysty HTML)
**Rozwiązanie:** 
1. Sprawdź czy framework jest ustawiony na `None` (nie `Vite`, nie `React`)
2. Upewnij się że build command to **TYLKO** `npm run build`
3. Build output directory: `build` ⚠️ (Vite 6.x zmienił z `dist` na `build`)
4. Sprawdź build logs - czy pojawia się `build/assets/index-*.css`?
5. Jeśli nie ma .css w build output:
   - Sprawdź czy `postcss.config.js` i `tailwind.config.js` są w repo
   - Sprawdź czy `main.tsx` importuje `./styles/globals.css`
6. **FALLBACK:** Obecna wersja używa inline styles, więc strona będzie wyglądać dobrze nawet bez Tailwind

### Problem: Cloudflare pokazuje "Docusaurus" jako framework
**Rozwiązanie:**
1. Idź do Settings → Build & Deploy
2. Zmień Framework preset na `None` (nie wybieraj nic innego!)
3. Zapisz i retry deployment

### Problem: Build fails z błędami TypeScript
**Rozwiązanie:**
Użyj `npm run build` zamiast `npm run build:check`

### Problem: Strona pokazuje treść ale bez kolorów/styli
**Rozwiązanie:**
- To oznacza że React działa ale CSS się nie załadował
- Sprawdź w DevTools → Network → czy plik `.css` się ładuje
- Jeśli nie - problem z build configuration
- Obecna wersja ma inline styles jako fallback

---

## 📄 License

Private - Domain for sale
