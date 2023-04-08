# Verwendet das aktuellste Node.js-Image als Basis für den Container
FROM node:latest

# Setzt das Arbeitsverzeichnis des Containers auf /client/
WORKDIR /client/

# Kopiert die package.json-Datei in das Arbeitsverzeichnis des Containers
COPY package.json ./

# Führt das npm install-Kommando im Container aus
RUN npm install

# Kopiert die client.js-Datei in das Arbeitsverzeichnis des Containers
COPY client.js .

# Öffnet den Port 5000 im Container
EXPOSE 5000

# Führt den Befehl "node client.js" aus, wenn der Container gestartet wird
CMD ["node", "client.js"]
