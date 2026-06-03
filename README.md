# Portafolio — Jackelyn Girón

[Portafolio](https://portafoliojg.netlify.app/)
---

## Stack

- **React 19** + **JavaScript** (ES Modules)
- **Vite 8** — bundler y dev server con HMR
- **React Router v7** — navegación client-side
- **ESLint 9** + **Prettier** — linting y formato
- **Storybook 10** — desarrollo y documentación de componentes

---

## Estructura

```
src/
├── assets/          # Imágenes, logos SVG, CV PDF
├── components/      # Componentes reutilizables
│   ├── Navbar/
│   ├── CardsProyecto/
│   ├── CardsStack/
│   ├── Ghostbutton/
│   ├── PageLayout/
│   ├── aboutme/
│   └── contact/
├── context/
│   ├── LanguageContext.jsx   # Proveedor i18n (es / en)
│   └── translations/        # es.json · en.json
├── data/            # proyects.json · stack.json
├── pages/
│   ├── Home/
│   ├── Proyectos/
│   └── Stack/
├── utils/           # mapProject.js · mapStack.js
├── App.jsx          # Rutas
└── main.jsx
```

---

## Levantar en local

```bash
npm install
npm run dev
```

### Otros comandos

| Comando                  | Descripción                         |
| ------------------------ | ----------------------------------- |
| `npm run build`          | Build de producción en `dist/`      |
| `npm run lint`           | Correr ESLint                       |
| `npm run format`         | Formatear con Prettier              |
| `npm run storybook`      | Storybook en http://localhost:6006  |


---

## Storybook

Los componentes tienen historias en archivos `*.stories.jsx` junto a su fuente. Para desarrollar o revisar un componente de forma aislada:

```bash
npm run storybook
```

---

## Rutas

| Ruta          | Página        |
| ------------- | ------------- |
| `/`           | Home          |
| `/proyectos`  | Proyectos     |
| `/stack`      | Stack         |
| `*`           | → `/`         |

---