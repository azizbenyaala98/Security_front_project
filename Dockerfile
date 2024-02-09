# Utiliser l'image Node.js officielle en tant qu'image de base
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# Construire l'application en désactivant la télémétrie
RUN npm run build

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
