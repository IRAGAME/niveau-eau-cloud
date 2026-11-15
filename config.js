// Configuration de la page cloud.
// Remplace le Channel ID par celui de ton canal ThingSpeak.
// readApiKey est nécessaire pour un canal privé ; laisse vide pour un canal public.
window.CLOUD_CONFIG = {
  channelId: "3580090",
  readApiKey: "C7LRM24CZWEZ23R3",
  refreshMs: 15000,
  apiBase: "https://api.thingspeak.com"
};
