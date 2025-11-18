# 🔧 Fix: "Output directory 'dist' not found"

## ❌ Błąd w Cloudflare Logs:

```
✓ built in 764ms
Finished
...
Error: Output directory "dist" not found.
Failed: build output directory not found
```

---

## 🔍 Dlaczego ten błąd występuje?

### Widzimy w logach:

```bash
build/index.html                   0.43 kB
build/assets/index-DLbk98zW.css    0.53 kB
build/assets/index-9EYqFgaM.js   147.68 kB
✓ built in 764ms
```

**Build się UDAJE!** ✅ Vite generuje pliki do folderu **`build/`**

Ale potem:
```
Error: Output directory "dist" not found.
```

**Cloudflare szuka folderu `dist/`** ale Vite wygenerował do **`build/`**! 🔴

---

## 🐛 Przyczyna: Vite 6.x zmienił domyślny output folder

### Twój `package.json`:
```json
"vite": "^5.0.8"
```

### Co Cloudflare zainstalował:
```
vite v6.3.5
```

**Znak `^` oznacza:** "zainstaluj najnowszą minor/patch version"

Cloudflare zainstalował **Vite 6.3.5** zamiast **5.0.8**!

### Co się zmieniło w Vite 6.x?

**Vite 5.x:** Domyślny output folder = `dist/`  
**Vite 6.x:** Domyślny output folder = `build/` ⚠️

---

## ✅ ROZWIĄZANIE #1: Zmień Cloudflare Settings (SZYBKIE)

### Idź do:
```
Cloudflare Dashboard 
→ Pages 
→ Twój projekt 
→ Settings 
→ Builds & Deployments 
→ Edit configuration
```

### Zmień:
```
Build output directory: dist
```

Na:
```
Build output directory: build
```

### Kliknij:
```
Save → Retry deployment
```

**TO WSZYSTKO!** Deployment powinien się udać w ~2 minuty. ✅

---

## ✅ ROZWIĄZANIE #2: Lock Vite Version (DŁUGOTERMINOWE)

Aby uniknąć tego problemu w przyszłości, zablokuj wersję Vite:

### W `package.json` zmień:
```json
"vite": "^5.0.8"
```

Na:
```json
"vite": "5.0.8"
```

**Usunięcie `^`** oznacza: "zawsze instaluj dokładnie tę wersję"

### Commit i push:
```bash
git add package.json
git commit -m "fix: lock Vite to v5.0.8"
git push
```

### Cloudflare settings:
```
Build output directory: dist
```

Teraz Cloudflare będzie instalować **Vite 5.0.8** i generować do `dist/` jak oczekujesz.

---

## 🎯 Które rozwiązanie wybrać?

| Rozwiązanie | Czas | Zalety | Wady |
|-------------|------|--------|------|
| **#1: Zmień na `build`** | 30 sekund | ✅ Najszybsze <br> ✅ Używa najnowszego Vite | ⚠️ Wymaga zmiany w Cloudflare |
| **#2: Lock Vite 5.x** | 2 minuty | ✅ Stabilna wersja <br> ✅ Używa `dist/` <br> ✅ Kontrola nad wersją | ⚠️ Nie dostajesz najnowszych features Vite |

**Polecam: #1** - zmień na `build` i zostaw Vite 6.x. To aktualna wersja.

---

## 🧪 Jak zweryfikować lokalnie?

### Build lokalnie:
```bash
npm run build
```

### Sprawdź który folder powstał:
```bash
ls -la
```

**Powinien powstać:** `build/` (jeśli Vite 6.x) lub `dist/` (jeśli Vite 5.x)

---

## 📊 Status po fix:

| Element | Status |
|---------|--------|
| Build command | ✅ `npm run build` |
| Vite version | ✅ 6.3.5 (latest) lub 5.0.8 (locked) |
| Output folder | ✅ `build/` (Vite 6.x) lub `dist/` (Vite 5.x) |
| Cloudflare setting | ✅ Musi pasować do output folderu! |
| Deploy | ✅ Powinien działać |

---

## 🎉 Podsumowanie

**Problem:** Vite 6.x zmienił output folder z `dist/` na `build/`  
**Fix:** Zmień Cloudflare setting na `build` lub lock Vite do wersji 5.x  
**Status:** ✅ Problem rozwiązany!

Deploy powinien działać w następnym retry! 🚀
