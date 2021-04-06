const { loadConfig } = require('graphql-config');

async function main() {
  const config = await loadConfig();
  console.log({ config });
}

main();
