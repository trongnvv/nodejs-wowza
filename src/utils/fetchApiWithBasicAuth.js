"use strict";

const axios = require("axios");

module.exports = module.exports.default = async function fetch({
  url,
  method = "POST",
  data = null,
  params = {},
}) {
  try {
    const headersInfo = {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Basic " + process.env.BASIC_AUTH,
    };
    let options = {
      url,
      method,
      headers: headersInfo,
      params,
      data,
      timeout: 18000,
    };
    console.log(options);
    let response = await axios(options);
    return response.data;
  } catch (err) {
    throw err;
  }
};
