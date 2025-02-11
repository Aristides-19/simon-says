## **Configurar Deploy a GitHub Pages**

El comando automáticamente construye el proyecto en Vite y lo despliega a GitHub Pages
en la rama [`gh-pages`](https://github.com/Aristides-19/simon-says/tree/gh-pages)
permitiendo utilizar ES Modules en el desarrollo.

```bash
npm run deploy
```

## **Configurar ESLint y Prettier**

1. **Instala las extensiones de VS Code:**

   - **ESLint**
   - **Prettier**

2. **Configura VS Code:**
   Abre el archivo de configuración de VS Code `settings.json` y pega esto:

   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "eslint.enable": true,
     "eslint.run": "onSave",
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ],
     "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[javascriptreact]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```
