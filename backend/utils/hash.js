const crypto = require("crypto");

const generateHash = (value) => {
  const hash = crypto
    .createHmac("sha256", process.env.HASH_SECRET)
    .update(value)
    .digest("hex");
  return hash;
};

const compareHash = (hash, value) => {
  const newHash = generateHash(value);
  return hash === newHash;
};

module.exports = {
  generateHash,
  compareHash,
};
