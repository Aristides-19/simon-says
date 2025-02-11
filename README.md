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
