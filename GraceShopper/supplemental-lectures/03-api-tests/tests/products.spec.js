require('dotenv').config();
const { getAllProducts } = require('../db');
const client = require('../db/client');
const { SERVER_ADDRESS = 'http://localhost:', PORT = 5000 } = process.env;
const API_URL = process.env.API_URL || SERVER_ADDRESS + PORT;
const axios = require('axios');

let productsFromDatabase;
describe('Database', () => {
  beforeAll(async() => {
    client.connect();
    // "control" test data
    const {rows} = await client.query(`
      SELECT * FROM products;
    `);
    productsFromDatabase = rows;
  })
  afterAll(async() => {
    client.end();
  })
  // 1 - write a test for `getAllProducts` database adapter. selects and returns an array of all products
  describe('getAllProducts', () => {
    it('selects and returns an array of products', async () => {
      expect(await getAllProducts()).toEqual(productsFromDatabase)
    })
    it('each product has a name property', async () => {
      const [product] = await getAllProducts();
      expect(product).toHaveProperty('name')
    })
    it('each name property matches the data', async () => {
      const [product] = await getAllProducts();
      expect(product.name).toBe(productsFromDatabase[0].name)
    })
  })
})
// TODO 3 - write tests for `GET /api/products`. Returns an array of all products in the database
describe('API', () => {
  describe('Products', () => {
    let products;
    describe('GET /api/products', () => {
      beforeAll(async() => {
        //setup
        const {data} = await axios.get(`${API_URL}/api/products`);
        products = data;
      })
      it('returns an array', () => {
        expect(Array.isArray(products)).toBe(true);
      })
      it('returns products with name and description', () => {
        const [product] = products;
        expect(product.name).toBe(productsFromDatabase[0].name)
      })
      it('each name property matches the data', async () => {
        const [product] = products;
        expect(product.name).toBe(productsFromDatabase[0].name)
      })
    })
  })
})
