require('dotenv').config();
const { getAllProducts } = require('../db');
const client = require('../db/client');

let productsFromDatabase, productsFromAdapter;
describe('Database', () => {
  beforeAll(async() => {
    client.connect();
    // "control" test data
    const {rows} = await client.query(`
      SELECT * FROM products;
    `);
    productsFromDatabase = rows;
    productsFromAdapter = await getAllProducts();
  })
  afterAll(async() => {
    client.end();
  })
  // TODO 1 - write a test for `getAllProducts` database adapter. selects and returns an array of all products
  describe('getAllProducts', () => {
    it('returns an array', async () => {
      expect(Array.isArray(productsFromAdapter)).toBe(true);
    }) 
    it('selects and returns an array of products', async () => {
      expect(productsFromAdapter).toEqual(productsFromDatabase);
    }) 
    it('each product has a name property', async () => {
      const [product] = productsFromAdapter;
      expect(product).toHaveProperty('name');
    })
  })
  
})
