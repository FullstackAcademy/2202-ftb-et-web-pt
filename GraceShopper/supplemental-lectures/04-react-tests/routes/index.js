const apiRouter = require('express').Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    message: "healthy!"
  })
})

// ROUTER: /api/products
const productsRouter = require('./products');
apiRouter.use('/products', productsRouter);

module.exports = apiRouter;
