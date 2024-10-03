# Verwende ein ARM64-kompatibles Node.js-Image
FROM node:22-alpine

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest des Codes
COPY . .

# Exponiere den Port
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]