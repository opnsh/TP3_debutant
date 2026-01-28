# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Structure du Projet

## Description des fichiers et dossiers

### Fichiers de configuration
- **`package.json`** - Définit les dépendances du projet, les scripts npm et les métadonnées du projet
- **`tsconfig.json`** - Configuration TypeScript pour l'ensemble du projet
- **`tsconfig.app.json`** - Configuration TypeScript spécifique à l'application (source)
- **`tsconfig.node.json`** - Configuration TypeScript pour les fichiers de configuration (Vite, ESLint, etc.)
- **`vite.config.ts`** - Configuration du bundler Vite (serveur de développement, build, plugins)
- **`eslint.config.js`** - Configuration ESLint pour le linting du code (vérification de la qualité)
- **`.gitignore`** - Liste les fichiers à ignorer par Git (node_modules, dist, etc.)

### Fichiers HTML et entrée
- **`index.html`** - Fichier HTML principal qui sert de point d'entrée de l'application

### Dossier source (`src/`)
- **`main.tsx`** - Point d'entrée de l'application React, initialise et monte le composant racine
- **`App.tsx`** - Composant racine principal de l'application
- **`App.css`** - Styles CSS du composant App
- **`index.css`** - Styles CSS globaux de l'application
- **`assets/`** - Dossier contenant les ressources statiques (images, icônes, etc.)

### Dossier public (`public/`)
- Dossier pour les fichiers statiques qui sont servis directement sans traitement (favicon, etc.)

### Autres fichiers
- **`README.md`** - Ce fichier, documentation du projet
- **`node_modules/`** - Dossier généré automatiquement contenant toutes les dépendances npm installées
- **`package-lock.json`** - Fichier généré automatiquement qui verrouille les versions exactes des dépendances

---
