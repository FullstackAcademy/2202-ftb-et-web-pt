const client = require('./client.js');
async function getAllProducts(){
  try {
    // 2 - write getAllProducts
    const {rows} = await client.query(`
      SELECT * FROM products;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllProducts
};
