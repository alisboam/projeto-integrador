# E-commerce completo

Projeto Integrador do curso Desenvolvimento Web Fullstack na Digital House.
Sistema de um e-commerce de jogos de tabuleiro.
 
Foi desenvolvido em ambiente NodeJS, utilizando HTML, CSS, Javascript e MySQL.

Sprint 1:
Criar e pensar no sistema a ser desenvolvido.

Sprint 2:
IdentidadeVisual + LayoutMobile.

Sprint 3:
Front-end Completo (HTML +CSS ou Bootstrap).

Sprint 4:
Banco de Dados.

Sprint 5: (em desenvolvimento)
Backend da Aplicação.

## Instalar dependencias

Para executar localmente, é necessário ter SQL. Rode os comandos na sequência no terminal.

Instalar dependencias:

```bash
npm install
```

Criar banco de dados:

```bash
npx sequelize db:create
```

Executar migrations:

```bash
npx sequelize db:migrate
```

Executar seeds:

```bash
npx sequelize db:seed:all
```

Desfazer seeds:

```bash
npx sequelize db:seed:undo:all
```

## Executar aplicação

```bash
nodemon start
```

Abra http://localhost:3000 para visualizar no navegador.

### Features

- [x] Cadastro de usuário
- [x] Login de usuário
- [x] Listar e exibir produtos
- [x] Pesquisar produtos
- [x] Adicionar produtos aos favoritos
- [x] Adicionar produtos ao carrinho
- [ ] Pagamento (em desenvolvimento)