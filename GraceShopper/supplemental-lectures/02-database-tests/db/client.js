const { Client } = require('pg');

const DB_NAME = 'tdd-node';

const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/${ DB_NAME }`;

const client = new Client(DB_URL);

module.exports = client;
