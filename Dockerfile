# Usa la imagen base de Node.js
FROM node:18.17.1

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Expone el puerto que usa la aplicación NestJS
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]
