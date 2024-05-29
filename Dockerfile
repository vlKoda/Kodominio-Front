# Use a imagem base do Node.js para construir o aplicativo React
FROM node:20 as build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código-fonte do projeto para o diretório de trabalho
COPY . .

# Compila o aplicativo React para produção
RUN npm run build

# Usa uma imagem mais leve do Nginx para servir o aplicativo compilado
FROM nginx:alpine

# Copia os arquivos compilados do estágio anterior para o diretório de distribuição do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80 para o contêiner
EXPOSE 80

# Define o comando padrão para iniciar o Nginx
# CMD ["nginx", "-g", "daemon off;"]