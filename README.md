# Painel Cliente API

API do Painel Cliente, desenvolvida com Node.js, TypeScript, Express e Prisma.

## Requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/orlyjuninho/painel-cliente-api-gz.git
cd painel-cliente-api-gz
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Gere os tipos do Prisma:
```bash
npm run prisma:generate
```

5. Execute as migrações do banco de dados:
```bash
npm run prisma:migrate
```

## Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

## Build

Para gerar a build de produção:

```bash
npm run build
```

## Produção

Para iniciar o servidor em modo de produção:

```bash
npm start
```

## Estrutura do Projeto

```
src/
  ├── routes/        # Rotas da API
  ├── middlewares/   # Middlewares
  ├── models/        # Modelos do Prisma
  ├── services/      # Serviços
  ├── utils/         # Utilitários
  ├── static/        # Arquivos estáticos
  ├── uploads/       # Uploads
  └── app.ts         # Arquivo principal
```

## Licença

MIT 