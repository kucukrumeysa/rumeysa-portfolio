# Rumeysa Küçük — Portfolio

Pastel pembe, soft dark gece modu ve GitHub API entegrasyonlu kişisel portfolio sitesi.

## Kurulum

```bash
npm install
npm run dev       # geliştirme sunucusu → http://localhost:5173
npm run build     # production build → dist/ klasörü
```

## GitHub Pages'e Deploy

### 1. gh-pages paketi kur
```bash
npm install gh-pages --save-dev
```

### 2. package.json'a ekle
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

### 3. vite.config.js base yolunu ayarla
```js
base: '/rumeysa-portfolio/',   // repo adın buysa
```
Eğer repo adın farklıysa (örn. `kucukrumeysa.github.io`) → `base: '/'` yap.

### 4. Deploy et
```bash
npm run build
npm run deploy
```

GitHub repo → Settings → Pages → Source: **gh-pages branch** seç. ✅

---

## Proje Yapısı

```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── About.jsx / .module.css
│   ├── TechStack.jsx / .module.css
│   ├── Projects.jsx / .module.css   ← GitHub API, sort=pushed desc
│   ├── Experience.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   ├── StarCanvas.jsx               ← yıldız efekti
│   └── FloatingPetals.jsx           ← uçuşan yapraklar
├── hooks/
│   ├── useTheme.js       ← gece/gündüz modu
│   ├── useReveal.js      ← scroll animasyonu
│   └── useGitHubRepos.js ← GitHub API fetch (sort: pushed desc)
└── styles/
    └── global.css
```

## Projeler Bölümü Hakkında

`useGitHubRepos.js` içinde GitHub API şu parametrelerle çağrılıyor:

```
sort=pushed&direction=desc
```

→ En son commit/push yapılan repo otomatik en başta çıkar.
Yeni bir repo push'ladığında sayfa yenilendiğinde otomatik güncellenir, hiçbir şey yapmana gerek yok.

### Öne çıkan repo sistemi (opsiyonel)
Belirli repoları öne çıkarmak istersen GitHub'da o repoya `portfolio` topic'i ekle,
ardından `useGitHubRepos.js`'de filtreye şunu ekle:

```js
.filter(r => r.topics?.includes('portfolio'))
```

## Stack
- React 18 + Vite 5
- CSS Modules
- GitHub REST API (public, auth gerektirmez)
