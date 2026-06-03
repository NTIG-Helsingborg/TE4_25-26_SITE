# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

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

## Projects

### API projects
- [RoastBattles](https://github.com/NTIG-Helsingborg/TE4_25-26_RoastBattles) — competitive roasting in graffiti style. React + Vite.
- [Steamdream](https://github.com/KebabMumsare/SteamDream) — shows all Steam games on sale. TypeScript.
- [Hypixel Skyblock Tracker](https://github.com/NTIG-Helsingborg/React-API) — tracks your Skyblock progress. React.

### Game projects
- [Back-To-Zero](https://github.com/NTIG-Helsingborg/TE4_25-26_Back-To-Zero) — a dark Berserk-inspired 2D roguelike. Unity / C#.
- [Aiming For Disaster](https://github.com/KebabMumsare/Aiming-for-Disaster) — a game project where aim and chaos go hand in hand. C#.
- [Verdenafall](https://github.com/KevinHermansson/fuck-ass-rouglike) — a roguelike where the world falls apart around you. C#.

### AI projects
- [AI-Overwatch](https://github.com/NTIG-Helsingborg/AI-Overwatch) — dashboard for monitoring AI behaviour. Vue + TypeScript.
- [AI Guard](https://github.com/KebabMumsare/AI_Guard) — AI-powered guard that keeps watch on what moves. Vue.

### Webshops
- [Snacky](https://github.com/NTIG-Helsingborg/TE4_25-26_WebShop) — a snack webshop, built from scratch. HTML / CSS / JS.
- [Coffee Webshop](https://github.com/eliahdim/coffeeWebshop) — a webshop for coffee lovers. HTML / CSS.
- [Webbshop](https://github.com/Mykyta-G/Webbshop) — webshop with its own backend. HTML / CSS / JS / Node.

