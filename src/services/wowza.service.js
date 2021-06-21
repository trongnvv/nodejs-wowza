const { fetchApiWithBasicAuth } = require("../utils");
const { WOWZA_HOST } = require("../../config");
const targetURL = (name) =>
  `${WOWZA_HOST}/v2/servers/_defaultServer_/vhosts/_defaultVHost_/applications/scp/pushpublish/mapentries/${name}`;

const create = async ({ name, sourceKey, targetKey }) => {
  try {
    const params = {
      serverName: "_defaultServer_",
      sourceStreamName: sourceKey,
      profile: "rtmp",
      host: "live-api-s.facebook.com",
      application: "rtmp",
      streamName: targetKey,
      sendSSL: true,
      port: 443,
    };
    const rs = await fetchApiWithBasicAuth({
      url: targetURL(name),
      method: "POST",
      data: params,
    });
    console.log(rs);
  } catch (error) {
    console.log("[KAFKA][ERROR]", error.response.data);
  }
};

const remove = async ({ name }) => {
  try {
    const { _id: refID } = data;
    const rs = await fetchApiWithBasicAuth({
      url: targetURL(name),
      method: "DELETE",
    });
    console.log(rs);
  } catch (error) {
    console.log("[KAFKA][ERROR]", error.response.data);
  }
};

module.exports = {
  create,
  remove,
};
