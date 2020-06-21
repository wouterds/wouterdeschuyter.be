# wouterdeschuyter.be

![version](https://img.shields.io/github/v/tag/wouterds/wouterdeschuyter.be?color=orange&label=version)
![release](https://github.com/wouterds/wouterdeschuyter.be/workflows/release/badge.svg)
![linting](https://github.com/wouterds/wouterdeschuyter.be/workflows/linting/badge.svg)
![dependencies](https://img.shields.io/david/wouterds/wouterdeschuyter.be)
![nginx image](https://img.shields.io/docker/image-size/wouterds/wouterdeschuyter.be/nginx?label=nginx%20image)
![node image](https://img.shields.io/docker/image-size/wouterds/wouterdeschuyter.be/node?label=node%20image)

## Running

```bash
yarn dev
```

## Setup

```bash
cp .env.example .env
```

### VSCode

#### Plugins

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=cpylua.language-postcss

#### Workspace settings

```javascript
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.css": "postcss"
  }
}
```
