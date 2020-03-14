# wouterdeschuyter.be

![release](https://github.com/wouterds/wouterdeschuyter.be/workflows/release/badge.svg)
![linting](https://github.com/wouterds/wouterdeschuyter.be/workflows/linting/badge.svg)
![dependencies](https://img.shields.io/david/wouterds/wouterdeschuyter.be)
![tag](https://img.shields.io/github/tag/wouterds/wouterdeschuyter.be.svg)
![repo size](https://img.shields.io/github/repo-size/wouterds/wouterdeschuyter.be)

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
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    { "language": "javascript", "autoFix": true },
    { "language": "javascriptreact", "autoFix": true },
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true },
  ],
}
```

## Running

```bash
docker-compose -f .docker/docker-compose-dev.yml up
```
