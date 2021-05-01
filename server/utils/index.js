const fs = require('fs').promises;

module.exports.createPublicFolder = async path => {
  await fs.mkdir(path, { resolve: true });
};
