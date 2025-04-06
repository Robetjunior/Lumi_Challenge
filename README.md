# Lumi Challenge - Teste Técnico Desenvolvedor Full Stack

Este repositório contém o projeto desenvolvido para o **Teste Técnico para Desenvolvedor Full Stack Pleno** da Lumi. O objetivo deste desafio é demonstrar habilidades no desenvolvimento de uma aplicação web completa, envolvendo:

- **Extração de Dados:** Processamento dos arquivos PDF de faturas de energia elétrica para extrair dados relevantes.
- **Persistência dos Dados:** Armazenamento dos dados extraídos em um banco de dados PostgreSQL utilizando o ORM Sequelize.
- **API RESTful:** Disponibilização dos dados através de uma API construída com Node.js, Express e TypeScript.
- **Interface Web (Frontend):** Aplicação React com TypeScript que consome a API e apresenta os dados em forma de dashboard e biblioteca de faturas, com gráficos interativos (usando Recharts) e uma interface responsiva.

> **Importante:** As variáveis de ambiente (.env) não contêm os valores reais. Para obter esses valores, entre em contato com **José Roberto Ferreira Junior** através do [LinkedIn](https://www.linkedin.com/in/jos%C3%A9-roberto-dev/).

---

## Estrutura do Projeto

O projeto está organizado em duas partes:

- **/api:** Código-fonte da API (backend)  
- **/frontend:** Código-fonte da aplicação React (frontend)

Cada parte possui seu próprio `package.json`, mas foi criado um mecanismo de orquestração para facilitar a instalação e o start de ambas as partes com um único comando.

---

## Tecnologias Utilizadas

### Back-end
- **Node.js** com **Express** e **TypeScript**
- **PostgreSQL** para o banco de dados
- **Sequelize** para ORM
- Bibliotecas: `dotenv`, `cors`, `multer`, `pdf-parse`, `winston`, etc.

### Front-end
- **React** com **TypeScript**
- **React Router** para navegação
- **Recharts** para visualização de dados (gráficos e cards)
- **React Icons** para ícones
- Outras dependências: `axios`, `react-scripts`, etc.

---

## Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn


### 1. Instalar as Dependências das Duas Partes
No diretório raiz, execute o comando abaixo para instalar as dependências do backend e do frontend simultaneamente. Esse comando utiliza o pacote concurrently:

```bash
npm run install-all
```
Observação: Certifique-se de que o pacote concurrently esteja instalado no repositório raiz. Caso não esteja, adicione-o como dependência de desenvolvimento:

```bash
npm install concurrently --save-dev
```

### 2. Configurar Variáveis de Ambiente
Crie arquivos .env nas pastas /api e /frontend conforme necessário. Não inclua os valores reais neste repositório.
Para obter os valores corretos das variáveis de ambiente, entre em contato com José Roberto Ferreira Junio (LinkedIn).

Exemplo de arquivo .env para o Backend (api/.env):
```bash
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_DIALECT=postgres
PORT=3001
# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

```

Exemplo de arquivo .env para o Frontend (frontend/.env):
```bash
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_KEY=your_supabase_key
```

## Como Iniciar o Projeto

No diretório raiz, utilize o seguinte comando para iniciar **simultaneamente** o backend e o frontend:

```bash
npm run start-all
```

Esse comando iniciará:
- 🔵 **Backend**: Executado com `npm run dev` na pasta `/api` (rodando em [http://localhost:3001](http://localhost:3001)).
- 🟢 **Frontend**: Executado com `npm start` na pasta `/frontend` (rodando em [http://localhost:3000](http://localhost:3000)).


### Autor
José Roberto - [LinkedIn](https://www.linkedin.com/in/jos%C3%A9-roberto-dev/)

```bash
Este arquivo `README.md` cobre os principais tópicos necessários para a documentação do seu projeto, como a instalação, configuração, execução, tecnologias utilizadas, e outras informações relevantes. Certifique-se de ajustar as variáveis de ambiente e os links conforme o necessário.
```
