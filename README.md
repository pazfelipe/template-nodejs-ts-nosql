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

<h1 align="center">Template Inicial NodeJs - TS & NoSQL</h1>

<h2 align="center">
Template com estrutura inicial para projetos com NodeJs, Typescript e NoSQL
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
<!--te-->

### Sobre
É muito comum iniciarmos projetos do zero e muitas vezes não temos noção de como estruturar nossos arquivos e diretórios. Eu mesmo, toda a vez que preciso começar um projeto, acabo recriando tudo do zero e às vezes esqueço de alguma coisa ou me perco em configurar algo.

Pensando nisso, criei esse mini template que utiliza typescript e faz uso de banco não relacional, no caso Mongo (mongoose). Isso garante uma agilidade um pouco maior, uma vez que a estrutura inicial está pronta e não se perde tempo em o que instalar e como fazer.

### **Objetivos**

Este é um template básico criado para facilitar o desenvolvimento de projetos que utilizem TS com Node e banco não relacional.

### **Tecnologias Utilizadas**

Esse projeto utiliza tecnologias como:

- [NodeJs >= 16](https://nodejs.org/en/download/current/)
- [NPM >= 7.2](https://nodejs.org/en/download/current/)
- [Typescript >= 4.4](https://www.npmjs.com/package/typescript)

### **Como Usar**

Antes de mais nada, é obrigatório ter o [NodeJs](https://nodejs.org/en/download/current/) instalado e um editor de texto, como por exemplo [VS Code](https://code.visualstudio.com/download).

É interessante também, ter o [Docker](https://www.docker.com/) instalado, caso não queira baixar programas e seus binários como [MongoDb >= 5.2](https://www.mongodb.com/try/download/community) ou [Redis](https://redis.io/)

#### **Pré requisitos**

Nenhum

#### **Local Files**

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
SALT=salt key usada para gerar o token de autenticação
```

_Outras chaves necessários ao seu projeto poderão/deverão ser adicionadas ao arquivo .env_

#### **Comandos**

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

### **Testes**

O projeto foi pensado em uma estrutura voltada a TDD (_Test Driven Design_), ou seja, quanto mais testes melhor. Todos os testes devem ser rodados em ambiente _test_, uma vez que que a aplicação vai usar uma base de dados apenas para testes e ao final da testagem essa base vai ser excluída.

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

### **Deploy**

_<small>Em construção</small>_