# Marketingowo.org - Landing Page

Strona landing page dla domeny **marketingowo.org**, zoptymalizowana pod SEO dla frazy "marketingowo".

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

### Problem: CSS nie ładuje się na Cloudflare
**Rozwiązanie:** 
1. Sprawdź czy framework jest ustawiony na `None` lub `Vite`
2. Upewnij się że build command to `npm run build` (bez `tsc`)
3. Retry deployment

### Problem: Cloudflare pokazuje "Docusaurus" jako framework
**Rozwiązanie:**
1. Idź do Settings → Build & Deploy
2. Zmień Framework preset na `None`
3. Zapisz i retry deployment

### Problem: Build fails z błędami TypeScript
**Rozwiązanie:**
Użyj `npm run build` zamiast `npm run build:check`

---

## 📄 License

Private - Domain for sale
