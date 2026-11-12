# AngularGPTCursoFHerrera

Aplicación **Angular 21** creada con Angular CLI, estilizada con **Tailwind CSS v4** y preparada
para trabajar con **Gemini** y **GitHub Copilot**.

## Requisitos

- Node.js 20.19+, 22.12+ o 24+ (probado con 22.22.3)
- npm 11 recomendado (ver [nota sobre npm](#nota-sobre-npm))

## Puesta en marcha

```bash
npm install
npm start
```

La aplicación queda disponible en `http://localhost:4200/` y se recarga al guardar cambios.

## Scripts

| Script          | Descripción                            |
| --------------- | -------------------------------------- |
| `npm start`     | Servidor de desarrollo (`ng serve`)    |
| `npm run build` | Build de producción en `dist/`         |
| `npm run watch` | Build en modo desarrollo con watch     |
| `npm test`      | Tests unitarios con Vitest (`ng test`) |

## Tailwind CSS v4

Tailwind v4 es _CSS-first_: **no existe `tailwind.config.js`**.

- `src/styles.css` importa Tailwind con `@import 'tailwindcss';` y declara los design tokens
  dentro de `@theme` (por ejemplo la paleta `brand-*`).
- `.postcssrc.json` registra el plugin `@tailwindcss/postcss`, que consume el builder de Angular.
- Las clases se detectan automáticamente en las plantillas: no hay que configurar `content`.
- Las utilidades están disponibles en cualquier plantilla (`app.html`) y en CSS con `@apply`.

## Configuración para IA

El proyecto incluye instrucciones de buenas prácticas generadas por el CLI:

| Herramienta     | Archivo                              | Cómo se usa                                                        |
| --------------- | ------------------------------------ | ------------------------------------------------------------------ |
| Gemini          | `.gemini/GEMINI.md`                  | Lo lee Gemini CLI / Gemini Code Assist como contexto del proyecto. |
| GitHub Copilot  | `.github/copilot-instructions.md`    | Lo lee Copilot Chat / Copilot Workspace automáticamente.           |

Ambos archivos describen el estilo esperado: standalone components, signals, `input()`/`output()`,
`ChangeDetectionStrategy.OnPush`, Reactive Forms, `NgOptimizedImage`, accesibilidad WCAG AA, etc.
Mantén los dos sincronizados si los personalizas.

## Estructura

- `src/app/app.ts`: componente raíz, standalone y zoneless.
- `src/app/app.html`: plantilla inicial, construida solo con clases de Tailwind.
- `src/app/app.routes.ts`: rutas vacías, listas para agregar páginas.
- `src/app/app.css`: vacío a propósito (todo el estilo vive en las utilidades).

## Nota sobre npm

Con npm 10.9.8 la instalación puede fallar con
`Cannot read properties of null (reading 'edgesOut')` (bug del resolvedor de peer deps frente a
Vitest 4). Si te ocurre, instala con npm 11:

```bash
npx -y npm@11.6.4 install
```
