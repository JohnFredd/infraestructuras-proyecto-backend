# Utiliza la imagen base oficial de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "run", "dev"]
