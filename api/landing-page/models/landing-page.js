"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require("axios");
const netlifyWebhook = strapi.config.get("custom.netlifyWebhook");

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      netlifyWebhook && axios.post(netlifyWebhook);
    },
    async afterUpdate(_, __, ___) {
      netlifyWebhook && axios.post(netlifyWebhook);
    },
  },
};
