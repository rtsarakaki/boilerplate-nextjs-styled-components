This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

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
### Configurar jest, jest dom e react testing library
```javascript
yarn add --dev jest @babel/preset-typescript @types/jest jest-environment-jsdom

yarn add --dev @testing-library/react @testing-library/jest-dom

find . -name "node_modules" -type d -exec rm -rf {} +

rm yarn.lock

yarn cache clean

yarn install

yarn test
```

Criar pasta .jest e dentro dela o arquivo setup.ts com o conteúdo
```javascript
import '@testing-library/jest-dom'
```

atualizar .eslintrc.yml para:
```javascript
env:
  browser: true
  es2021: true
  jest: true
  node: true
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
Como usar o testing library
https://testing-library.com/docs/react-testing-library/cheatsheet
