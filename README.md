# E-commerce React + TypeScript

Este projeto é uma aplicação front-end de um e-commerce de camisas, desenvolvida com React, TypeScript e Vite. O sistema possui fluxo completo de compras e um painel administrativo com controle de acesso.

## Arquitetura e Estrutura de Pastas

A arquitetura do projeto segue o princípio de **Separação de Conceitos (Separation of Concerns)**, dividindo a responsabilidade da aplicação em diretórios específicos para facilitar a manutenção e escalabilidade.

* **`/src/components`**: Contém os componentes visuais reutilizáveis (ex: `Navbar`, `ProductCard`, `Footer`). Eles são os "blocos de montar" da interface.
* **`/src/pages`**: Contém as telas inteiras da aplicação (ex: `Home`, `Cart`, `Dashboard`, `Login`). As páginas são responsáveis por organizar os componentes e representar uma rota específica.
* **`/src/context`**: Responsável pelo gerenciamento de estado global utilizando a Context API do React. Aqui reside a regra de negócio central da aplicação (Autenticação, Carrinho e Produtos).
* **`/src/data`**: Contém os dados iniciais simulados (`mock`) para popular o estado da aplicação ao iniciar.

## Justificativa da Arquitetura Escolhida

A divisão em **Componentes**, **Páginas** e **Contextos** foi escolhida por três motivos:
1.  **Reusabilidade**: Componentes como o `ProductCard` podem ser chamados dezenas de vezes na mesma tela sem repetição de código.
2.  **Manutenibilidade**: Se houver um erro visual na barra de navegação, sabemos exatamente que o arquivo `Navbar.tsx` deve ser corrigido, sem impactar o restante do sistema.
3.  **Desacoplamento de Estado**: Deixar os dados globais isolados na pasta `/context` evita o problema de *prop drilling* (passar dados de pai para filho por vários níveis), permitindo que qualquer componente acesse diretamente as informações de login, estoque ou carrinho de compras.