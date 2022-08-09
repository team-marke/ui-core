---
layout: docs.njk
permalink: /
eleventyNavigation:
  key: home
  title: Home
  order: 0
---

# Introdução

O Marke UI foi pensado com o objetivo de padronizar os componentes dos sites criados pela Marke, facilitando o entedimento do cliente e o desenvolvimento do produto final. Na documentação você encontrará todos os componentes já padronizados além de exemplos e os códigos necessários para a implementação da sua solução.

## A Marke
Uma agência de Marketing Digital que dá suporte para empresas de pequeno e médio porte a se posicionarem em destaque na internet. Para saber mais acesse o [site](https://marke.com.br) da Marke.
## Donwload

Você pode baixar o Marke UI com administradores de pacotes

#### npm
Instale o Marke UI através do [npm](https://www.npmjs.com/)

```js
npm i https://github.com/team-marke/ui-core.git#v0.3.5
```

#### yarn
Instale o Marke UI através do [yarn](https://yarnpkg.com/)

```js
yarn install https://github.com/team-marke/ui-core.git#v0.3.5</code>
```


## Adicionando ao main.scss
No arquivo main.sccs do seu projeto adicione:

```scss
@use 'marke-ui' as mkui;
```
