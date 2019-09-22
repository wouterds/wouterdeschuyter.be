# wouterdeschuyter.be

![circleci](https://circleci.com/gh/wouterds/wouterdeschuyter.be.svg?style=shield)
![tag](https://img.shields.io/github/tag/wouterds/wouterdeschuyter.be.svg)
![dependencies](https://img.shields.io/david/wouterds/wouterdeschuyter.be)
![last commit](https://img.shields.io/github/last-commit/wouterds/wouterdeschuyter.be.svg)
![commit activity](https://img.shields.io/github/commit-activity/m/wouterds/wouterdeschuyter.be)
![code size](https://img.shields.io/github/languages/code-size/wouterds/wouterdeschuyter.be.svg)
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
