# wouterdeschuyter.be

![version](https://img.shields.io/github/v/tag/wouterds/wouterdeschuyter.be?color=orange&label=version)
![uptime](https://img.shields.io/uptimerobot/ratio/7/m784109870-63ef2ef2a17cfed53bc4c912)
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
}
```
