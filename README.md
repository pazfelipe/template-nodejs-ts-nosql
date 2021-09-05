<p align="center">
<img src="https://img.shields.io/apm/l/vim-mode"/>
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/pazfelipe/api-monolito-erp">
<img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/pazfelipe/api-monolito-erp">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pazfelipe/api-monolito-erp">
<img alt="GitHub all releases" src="https://img.shields.io/github/downloads/pazfelipe/api-monolito-erp/total">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/pazfelipe/api-monolito-erp?style=social">
<img alt="node-current" src="https://img.shields.io/node/v/current-bullseye">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pazfelipe/api-monolito-erp">
<img alt="Feitp por" src="https://img.shields.io/badge/Feito por-Felipe Paz-blue?style=flat"/>
</p>

<h1 align="center">MINI ERP</h1>

<h2 align="center">
Gerenciador de produtos, fornecedores e empresas
</h2>

<br />

<p align="center">
🚧 Em construção... 🚧
</p>

### Sumário

<!--ts-->

- [Sobre](#sobre)
- [Objetivos](#objetivos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
  - [Pré-requisitos](#pré-requisitos)
  - [Local Files](#local-files)
  - [Comandos](#comandos)
- [Testes](#testes)
  - [Testes Automatizados](#testes-automatizados)
  - [Testes Integrados](#testes-integrados)
  - [Testes Unitários](#testes-unitários)
- [Deploy](#deploy)
- [Funcionalidades](#funcionalidades)
<!--te-->

### Objetivos

Este é um projeto para demonstrar os conceitos e tecnologias mais abordadas atualmente.

Vou tentar demonstrar técnicas como:

- Testes unitários
- Testes integrados
- Testes automatizados
- CI/CD
- SOLID
- Autenticação JWT
- Cache (Redis)
- Typescript

### Tecnologias Utilizadas

Esse projeto utiliza tecnologias como:

- [Docker](https://www.docker.com/)
- [NodeJs >= 16](https://nodejs.org/en/download/current/)
- [NPM >= 7.2](https://nodejs.org/en/download/current/)
- [Redis](https://redis.io/)
- [MongoDb >= 5.2](https://www.mongodb.com/try/download/community)
- [Typescript >= 4.4](https://www.npmjs.com/package/typescript)

### Como Usar

Antes de mais nada, é obrigatório ter o [NodeJs](https://nodejs.org/en/download/current/), [Docker](https://www.docker.com/) instalados e um editor de texto, como por exemplo [VS Code](https://code.visualstudio.com/download).

#### Pré requisitos

Nenhum

#### Local Files

Para rodar a aplicação, é preciso ter na raiz do projeto, um arquivo `.env` com as seguintes chaves:

_<small>Em construção</small>_

```
PORT=porta onde o servidor vai rodar
DB_NAME=nome do banco de dados
DB_HOST=ip/dominio do banco de dados
DB_PORT=porta onde o banco estiver rodando
DB_NAME_TEST=nome do banco de dados para testes
DB_HOST_TEST=ip/dominio do banco de dados para testes
DB_PORT_TEST=porta onde o banco estiver rodando para testes
PASS_KEY=chave para compor o token de autenticação
ENV=ambiente em que o projeto está rodando [dev, prod, test]
```

#### Comandos

_<small>Em construção</small>_

Os comandos abaixo podem ser rodados através do npm ou do yarn.

Rodando servidor localmente

```bash
$ npm run dev
$ yarn dev
```

Rodando servidor em produção

```bash
$ npm start
$ yarn start
```

Realizando testes unitários

```bash
$ npm run test
$ yarn test
```

Realizando testes integrados

```bash
$ npm run test:integrated
$ yarn test:integrated
```

Gerando build

```bash
$ npm run build
$ yarn build
```

_Deploying_ da aplicação

```bash
$ npm deploy
$ yarn deploy
```

### Testes

O projeto permite realizar testes unitários e integrados. Todos os testes devem ser rodados em ambiente _test_, uma vez que que a aplicação vai usar uma base de dados apenas para testes e ao final da testagem essa base vai ser excluída.

Pode ser passado um arquivo específico para o teste ou, se deixar vazio, vai rodar todos os testes unitários existentes.
_Setar a variável ENV para test_

```
ENV=test
```

#### Testes Unitários

Realiza testes unitários, ou seja, apenas de funções menores.

```bash
npm run test [nome_do_arquivo.spec.js]
yarn test [nome_do_arquivo.spec.js]
```

#### Testes Integrados

Realiza testes integrados, ou seja, funções que dependam de outros serviços/módulos, como no caso de conexões com o banco de dados.

```bash
npm run test:integrated [nome_do_arquivo.spec.js]
yarn test:integrated [nome_do_arquivo.spec.js]
```

#### Testes Automatizados

Realiza testes automatizados, ou seja, simula o usuário acessando a aplicação e realizando ações.

```bash
npm run test:automated [nome_do_arquivo.spec.js]
yarn test:automated [nome_do_arquivo.spec.js]
```

### Deploy

_<small>Em construção</small>_

### Funcionalidades

- [ ] Empresas: Pode ser cadastrado e gerenciado dados das empresas quando:
  - [ ] sendo matriz
  - [ ] sendo filial
- [ ] Fornecedores: Pode ser cadastrado e gerenciado dados de fornecedores
- [ ] Produtos: Pode ser cadastrado e gerenciado dados de produtos através da API ou:
  - [ ] importando arquivo TXT
  - [ ] importando arquivo XML
- [ ] Configurações do sistema:
  - [ ] Cadastro de e-mail
  - [ ] Envio de e-mail quando produtos estiverem abaixo do estoque ou zerados
- [ ] Alertas:
  - [ ] Envio de e-mail quando produtos estiverem abaixo do estoque ou zerados
- [ ] Usuários com níveis de permissão
