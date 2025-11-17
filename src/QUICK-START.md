# ⚡ Quick Start - Cloudflare Pages

## 🎯 TL;DR - Najważniejsze ustawienia

```
Framework:    None
Build:        npm run build
Output:       dist
Root:         /
```

---

## 📋 Checklist (3 kroki)

### ✅ 1. Git Push

```bash
git add .
git commit -m "Deploy to Cloudflare"
git push
```

### ✅ 2. Cloudflare Settings

Idź do: **Settings → Builds & Deployments → Edit configuration**

| Pole | Wartość |
|------|---------|
| Framework preset | **None** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

**Kliknij Save**

### ✅ 3. Retry Deployment

**Deployments → Retry deployment**

---

## ✅ Gotowe!

Strona powinna działać w ~2 minuty.

---

## 🐛 Nie działa?

1. **Sprawdź Framework preset** - MUSI być `None`
2. **Sprawdź Build command** - MUSI być `npm run build` (bez `tsc`)
3. **Sprawdź build logs** - czy są błędy?
4. **Przeczytaj:** [CLOUDFLARE-FIX.md](./CLOUDFLARE-FIX.md)

---

## 📖 Więcej info

- **Full deployment guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **CSS fix details:** [CLOUDFLARE-FIX.md](./CLOUDFLARE-FIX.md)
- **Project README:** [README.md](./README.md)
