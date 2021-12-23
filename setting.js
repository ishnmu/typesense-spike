const node1 = {
  host: "localhost",
  port: "8108",
  protocol: "http",
};

const setting = {
  nodes: [node1],
  apiKey: "local-typesense-api-key",
  connectionTimeoutSeconds: 2,
};

module.exports = setting;
