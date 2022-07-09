
module.exports = {
  verbose: true,
  transform: {
    '\\.m?jsx?$': require.resolve('./custom-transform.js')
  },
  transformIgnorePatterns: ['/node_modules/', '/tests/']
};