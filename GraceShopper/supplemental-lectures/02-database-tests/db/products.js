const client = require('./client.js');
async function getAllProducts(){
  try {
    // TODO 2 - write getAllProducts
    const {rows: products} = await client.query(`
      SELECT * FROM products;
    `);
    return products;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllProducts
};
