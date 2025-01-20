# Base Node.js para desenvolvimento
FROM node:22-alpine

# Diretório de trabalho no contêiner
WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm install

# Copiar os arquivos do projeto
COPY . .

# Expor a porta do Vite (3000 por padrão)
EXPOSE 3000

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
