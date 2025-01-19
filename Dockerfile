# Etapa 1: Construção da imagem com o Node.js e dependências
FROM node:22 AS build

WORKDIR /app

# Copia os arquivos de configuração e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos e constrói a aplicação
COPY . .
RUN npm run build

# Etapa 2: Criação da imagem final com a versão otimizada para produção
FROM nginx:alpine

# Copia os arquivos de build do Vue.js para o diretório de conteúdo estático do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 para o Nginx
EXPOSE 80

# Inicia o Nginx no modo foreground
CMD ["nginx", "-g", "daemon off;"]
