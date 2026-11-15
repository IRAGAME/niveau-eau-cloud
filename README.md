# Page cloud — Moniteur de niveau d'eau

Page statique de consultation à distance du moniteur de niveau d'eau ESP32.

Elle lit le canal ThingSpeak du projet et affiche le niveau, l'état du
réservoir, la distance, les seuils et l'historique récent.

- URL : https://iragame.github.io/niveau-eau-cloud/
- La page est en lecture seule : les réglages restent sur la page locale de
  l'ESP32 (`http://192.168.4.1`).
- Le fichier `config.js` contient le Channel ID et la clé Read nécessaires à
  la lecture du canal. Il ne contient jamais la clé Write.
