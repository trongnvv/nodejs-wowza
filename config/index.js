module.exports = {
  WOWZA_HOST: process.env.WOWZA_HOST || "http://localhost:8087",
  kafka: {
    wowzaCreate: {
      TOPIC: "wowza-create",
    },
    wowzaRemove: {
      TOPIC: "wowza-remove",
    },
  },
};
