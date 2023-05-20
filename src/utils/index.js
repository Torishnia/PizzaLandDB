const transaction = (query) => `BEGIN; ${query} COMMIT;`;

module.exports = { transaction };