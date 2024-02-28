# Criando o boilerplate

### Criar projeto

```javascript
npx create-next-app

✔ What is your project named? … template-nextjs

✔ Would you like to use TypeScript? … No / Yes

✔ Would you like to use ESLint? … No / Yes

✔ Would you like to use Tailwind CSS? … No / Yes

✔ Would you like to use `src/` directory? … No / Yes

✔ Would you like to use App Router? (recommended) … No / Yes

✔ Would you like to customize the default import alias (@//*)? … No / Yes

✔ What import alias would you like configured? … src/*
```

### Configurar Editor

Para que?

Para que os novos arquivos sigam o padrão de estilo definido pelo editorconfig.

Criar o arquivo .editor config na raiz do projeto.
```javascript
root = true

[*]
indent_style = spaces
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
### Configurar eslint
```javascript
npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · YAML
The config that you ve selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · yarn
```
Adicionando eslint-plugin-react-hooks para que o eslint não de erros nos hooks react
```javascript
yarn add eslint-plugin-react-hooks --dev
```
Configurar .eslintrc.yml
```javascript
env:
  browser: true
  es2021: true
settings:
  react:
    version: detect
extends:
  - eslint:recommended
  - plugin:@typescript-eslint/recommended
  - plugin:react/recommended
  - plugin:prettier/recommended
parser: '@typescript-eslint/parser'
parserOptions:
  ecmaVersion: latest
  sourceType: module
plugins:
  - '@typescript-eslint'
  - react
  - react-hooks
rules:
  'react-hooks/exhaustive-deps': 'warn'
  'react-hooks/rules-of-hooks': 'error'
  'react/prop-types': 'off'
  'react/react-in-jsx-scope': 'off'
  '@typescript-eslint/explicit-module-boundary-types': 'off'
```

### Configurar prettier
Formata o código seguindo um guia de estilo
```javascript
yarn add --dev --exact prettier
yarn add --dev eslint-plugin-prettier eslint-config-prettier
```

.prettierrc
```json
{
	"trailingComma": "none",
	"semi": false,
	"singleQuote": true
}

```
.vscode/settings
```json
{
	"editor.formatOnSave": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit"
	},
}
```
husky (validar commits) - precisa ser o projeto raiz do git
```javascript
yarn add --dev husky
npx husky init

yarn add lint-staged --dev
```

configurar pre-commit
```javascript
npx --no-install lint-staged
````

configurar package.json
```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --max-warnings=0",
    "prepare": "husky"
  },
  "lint-staged": {
    "src/**/*": [
      "next lint src --fix"
    ]
  },
```