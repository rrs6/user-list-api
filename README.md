## user-list-api

# Passo a passo para rodar a API.

Primeiro baixe o repositório. Logo depois, você pode subir o banco (MySQL) com o comando `docker compose up -d`. Logo depois, rode o comando `npm install` para instalar as dependências do projeto. Depois, rode as migrations com o comando `npm run migrations:run` e uma vez que as migrations forem finalizadas, você roda o `npm run dev` para finalmente subir a aplicação localmente (localhost:3000)