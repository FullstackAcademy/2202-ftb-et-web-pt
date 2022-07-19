# 🚗 Milestones

These are the major features we’re looking for at each code review, in addition to your other progress.

# 💳 _Authorization_ 
## Backend
If a route has a `(*)` next to it, it means that it should require a logged in user to be present, if a route has a `(**)` next to it, the logged in user should be the owner of the modified object. If a route has `(*admin)` next to it, the logged in user must be an admin user (`user.isAdmin === true`).  Any `(**)` route should also be accessible by any `(*admin)` user.
## Frontend
Using the same notation above.
If a user is authorized, show the component.  If the user is not authorized, either (1) display an error message or (2) redirect the user to a different route/component (any component that would be appropriate)

# Milestones, in Vertical Slices 🔪
## _BASIC Database Models:_ `users`, `products`, `orders`, `order_products`, admin functionality

# Review 1: Start of Day 2 - Thur 07/14 - 🪑 Table Definitions, 🛍️ Products vertical slice

<details>

## Table Definitions
### `products` table
- [ ] Create a `products` table definition with the following information:
  - [ ] id - serial; primary key
  - [ ] name - not null
  - [ ] description - not null
  - [ ] price - not null
  - [ ] imageURL - with a default value
  - [ ] inStock - not null; default value false
  - [ ] category - not null
### `users` table
- [ ] Create a `users` table definition with the following information:
  - [ ] id - serial; primary key
  - [ ] firstName - not null
  - [ ] lastName - not null
  - [ ] email - unique; not null; must be a valid email format
  - [ ] imageURL - with a default value
  - [ ] username - unique; not null
  - [ ] password - unique; not null
  - [ ] "isAdmin" - not null; default value false
### `orders` table
- [ ] Create an `orders` table definition with the following information:
  - [ ] id - serial; primary key
  - [ ] status - default value 'created'. (can be created, cancelled, completed) - also optionally, processing
    - _NOTE: An order with an `orders.status = 'created'` is synonymous with a "cart"_
  - [ ] "userId" - references users(id)
  - [ ] "datePlaced" - date
### `order_products` table
- [ ] Create an `order_products` table definition with the following information:
  - [ ] id - serial; primary key
  - [ ] "productId" - references products(id)
  - [ ] "orderId" - references orders(id)
  - [ ] price - not null
  - [ ] quantity - not null; default value 0

## Products
### Backend
#### Database Adapters
- [ ] `getProductById`
  - `getProductById(id)`
  - [ ] return the product
- [ ] `getAllProducts`
  - [ ] select and return an array of all products
- [ ] `createProduct`
  - `createProduct(product)`
  - [ ] return the new product
#### API Routes
- [ ] `GET /products`
  - [ ] Send back a list of all products in the database
- [ ] `GET /products/:productId`
  - [ ] Look up a product by id and send it back
### Frontend
- [ ] Write a component for a single product
- [ ] Display the single product component when the url matches `/products/:productId`
- [ ] Add links to each single product card/name in the list that can be used to navigate to the `/products/:productId` route
- [ ] Write a component to display a list of all products (you might be able to reuse the single product component)
- [ ] Display the all-products component when the url matches `/products`
- [ ] Add links to the navbar that can be used to navigate to the `/products` route
### Deployment
- [ ] Deploy the `dev` branch of your app.  Either through auto-deployment on Heroku, or through pushing to the Heroku remote via the heroku CLI (i.e. `git push heroku`);

Congrats! You have completed your first vertical slice! Make sure to `commit -m "feat(products): Add All Products and Single Products"` before moving on!

</details>

# Review 2: Start of Week 2 - Tues 7/19  - 🧑 Users, 🛒 Orders 

<details>

## Users
### Backend
#### Database Adapters
- [ ] `createUser`
  - `createUser({ firstName, lastName, email, username, password })`
  - [ ] make sure to hash the password before storing it to the database
- [ ] `getUser`
  - `getUser({ username, password })`
  - [ ] this should be able to verify the password against the hashed password
- [ ] `getAllUsers`
  - `getAllUsers()`
  - [ ] select all users.  Return the user objects.
  - [ ] do NOT return the passwords
- [ ] `getUserById`
  - `getUserById(id)`
  - [ ] select a user using the user's ID.  Return the user object.
  - [ ] do NOT return the password
- [ ] `getUserByUsername`
  - `getUserByUsername(username)`
  - [ ] select a user using the user's username.  Return the user object.
#### API Routes
- [ ] `POST /users/register`
  - [ ] Create a new user. Require `username` and `password`, and hash password before saving user to DB. Require all passwords to be at least 8 characters long.
  - [ ] Throw errors for duplicate `username`, or password-too-short.
- [ ] `POST /users/login`
  - [ ] Log in the user. Require `username` and `password`, and verify that plaintext login password matches the saved hashed password before returning a JSON Web Token.
  - [ ] Keep the `id` and `username` in the token.
- [ ] `GET /users/me` `(*)`
  - [ ] Send back the logged-in user's data if a valid token is supplied in the header.
#### Frontend
- [ ] Write a component for login
- [ ] Write a component for register
- [ ] Display the login/register components when the user is not logged in (either when url matches `/account/login` or `/account/register` OR as a modal, or just at the top of the page).
- [ ] Add links to the navbar that can be used to navigate to the `/account/login` or `/account/register` components
- [ ] Add a logout button that removes the token/user data from state and localstorage.
- [ ] Write a component for a single user's data
- [ ] Display the single user component when the url matches `/account` `(*)`

Nice! You have completed another vertical slice! Make sure to `commit -m "feat(users): Login/Register"` before moving on!

## Orders
### Backend
#### Database Adapters
- [ ] `getOrderById`
  - `getOrderById(id)`
  - [ ] return the order, include the order's products
- [ ] `getAllOrders`
  - [ ] select and return an array of orders, include their products
- [ ] `getOrdersByUser`
  - `getOrdersByUser({ id })`
  - [ ] select and return an array of orders made by user, include their products
- [ ] `getOrdersByProduct`
  - `getOrdersByProduct({ id })`
  - [ ] select and return an array of orders which have a specific `productId` in their `order_products` join, include their products
- [ ] `getCartByUser`
  - `getCartByUser({ id })` or `getCartByUser(user)`
  - [ ] select one user's order (look up by `orders."userId"`) 
  - [ ] ...an order that that has status = created
  - [ ] return the order, include the order's products
- [ ] `createOrder`
  - `createOrder({ status, userId })`
  - [ ] create and return the new order
#### API Routes
- [ ] `GET /orders` `(*admin)`
  - Return a list of orders, include the products with them
- [ ] `GET /orders/cart` `(*)`
  - Return the current user's order with `status='created'`  (synonymous to a 'cart').  Use database adapter `getCartByUser`
- [ ] `POST /orders` `(*)`
  - Create a new order. Should initially be status = created.
- [ ] `GET /users/:userId/orders` `(**)`
  - Get a list of orders for a particular user.
### Frontend
- [ ] Write a component for a single order's data
- [ ] Display the single order component when the url matches `/orders/:orderId` `(**)`
- [ ] Display the cart (using the single order component with the current user's in-progress order. Use the api call `GET /orders/cart`) when the url matches `/cart` `(*)`
- [ ] Add "view cart" button to the navbar that can be used to navigate to the `/cart` route `(*)`

</details>

# Review 3: Start of Week 3 - Tues 7/26 - Order_Products, 🛒 Checkout, 💳 Stripe Integration

<details>

## Order Products
### Backend
#### Database Adapters
- [ ] `getOrderProductById`
  - `getOrderProductById(id)`
  - [ ] return the `order_products`
- [ ] `addProductToOrder`
  - `addProductToOrder({ orderId, productId, price, quantity })`
  - [ ] if the `productId` is NOT on the `order` yet, create a new `order_products`
  - [ ] update the `order_products` quantity (add passed-in quantity to the current `order_products` quantity)
  - [ ] update the `order_products` price
  - [ ] return the `order_products`
- [ ] `updateOrderProduct`
  - `updateOrderProduct({ id, price, quantity })`
  - [ ] Find the `order_product` with `id` equal to the passed in `id`
  - [ ] Update the `price` or `quantity` as necessary
- [ ] `destroyOrderProduct`
  - `destroyOrderProduct(id)`
  - [ ] remove the single identified `order_products` from database
#### API Routes
- [ ] `POST /orders/:orderId/products` `(**)`
  - Add a single product to an order (using `order_products`). Prevent duplication on `("orderId", "productId")` pair. If product already exists on order, increment quantity and update price.
- [ ] `PATCH /order_products/:orderProductId` `(**)`
  - [ ] Update the quantity or price on the order product
- [ ] `DELETE /order_products/:orderProductId` `(**)`
  - [ ] Remove a product from a order, use hard delete
#### Frontend
- [ ] For each product NOT in cart
  - [ ] Create add-to-cart button 
    - [ ] Up to you if you want this to increment previously-existing product quantity.
- [ ] For each product CURRENTLY in cart
  - [ ] Create remove-from-cart button 
  - [ ] Create edit quantity drop-down 
- [ ] Add Cart persistence
  - [ ] (DONE in Review 2 above) for authenticated (logged in) users, using the database.
  - [ ] for unauthenticated (guest) using localStorage.
  - [ ] bonus: add ability to "merge" the localStorage cart with the database cart once a user logs in.

## Checkout
### Backend
#### Orders - Database Adapters
- [ ] `updateOrder`
  - `updateOrder({ id, status, userId })`
  - [ ] Find the order with `id` equal to the passed in `id`
  - [ ] Don't update the order `id`, but do update the `status` and/or `userId`, as necessary
  - [ ] Return the updated order
- [ ] `completeOrder`
  - `completeOrder({ id })`
  - [ ] Find the order with `id` equal to the passed in `id`
  - [ ] Only update the `status` to `completed`
  - [ ] Return the updated order
- [ ] `cancelOrder`
  - `cancelOrder(id)`
  - [ ] Update the order's status to `cancelled`
#### Orders - API Routes
- [ ] `PATCH /orders/:orderId` `(**)`
  - Update an order, notably change status
- [ ] `DELETE /orders/:orderId` `(**)`
  - Update the order's status to `cancelled`
### Frontend
- [ ] Write a component to display a checkout experience
  - [ ] Display user data (perhaps reusing the single-user component)
  - [ ] Display cart data (perhaps reusing the single-order component)
  - [ ] Create a "Complete Order" button
    - [ ] Updates the order status to completed
    - [ ] Credit Card integration is in a future tier
    - [ ] Display a success message, confirming the order status is now completed.
  - [ ] Create a "Cancel Order" button
    - [ ] Updates the order status to cancelled
    - [ ] Display a success message, confirming the order is cancelled.
    - [ ] Optionally, redirect user to another route (home?)
- [ ] Display the checkout component when the url matches `/cart/checkout`
## Stripe
#### Frontend
- [ ] Integrate Stripe
  - [ ] For client side, use Stripe's prebuilt [Checkout](https://stripe.com/docs/checkout/tutorial) form, ideally with the "Custom" strategy. We recommend [react-stripe-checkout](https://www.npmjs.com/package/react-stripe-checkout) in this case. Build a custom form and communicate with Stripe & your server via [Stripe.js](https://stripe.com/docs/custom-form).
  - [ ] For server side, use the [`stripe`](https://stripe.com/docs/libraries#node-library) npm library ([API docs here](https://stripe.com/docs/api/node), [tutorial here](https://stripe.com/docs/charges)) to accept tokens from your front-end app and send charges via the Stripe API.

</details>

# Review 4: Start of Week 4 - Tues 8/2 - 💼 Admin, ⭐ Reviews

<details>

## Admin
### Backend
#### Database Adapters
- [ ] `destroyProduct`
  - `destroyProduct({ id })`
  - [ ] hard delete a product.
  - [ ] make sure to delete all the `order_products` whose product is the one being deleted.
  - [ ] make sure the `orders` for the `order_products` being deleted do not have a status = completed
- [ ] `updateProduct`
  - `updateProduct(product)`
  - [ ] don't try to update the `id`
  - [ ] do update the other fields (name, description, etc) 
  - [ ] return the updated product
- [ ] `updateUser`
  - `updateUser(user)`
  - [ ] don't try to update the `id`
  - [ ] do update the other fields (name, email, "isAdmin" etc) 
  - [ ] return the updated user
#### API Routes
- [ ] `GET /users` `(*admin)`
  - Send back all users
- [ ] `POST /products` `(*admin)`
Only admins can create a new product
- [ ] `DELETE /products/:productId` `(*admin)`
Only admins can delete a product
- [ ] `PATCH /products/:productId` `(*admin)`
Only admins can update a product
- [ ] `GET /products/:productId/orders` `(*admin)`
Get a list of all orders which have that product in them
- [ ] `PATCH /users/:userId` `(*admin)`
Only admins can update a user
#### Frontend
- [ ] Admin - Users
  - [ ] Write a component to display a list of all users
    - [ ] Display the all-users component when the url matches `/users` `(*admin)`
    - [ ] Add links to the navbar that can be used to navigate to the `/users` component `(*admin)`
  - [ ] Write a component to display a single user
    - [ ] Add a form to update the user in the component (notably, add ability to change "isAdmin" on any user)
    - [ ] Display the single-user component when the url matches `/users/:userId` `(*admin)`
    - [ ] Make a username clickable in the users list that can be used to navigate to the `/users/:userId` component `(*admin)`
  - [ ] Write a form component to add a single user
    - [ ] Display the add-user component when the url matches `/users/add` `(*admin)`
- [ ] Admin - Orders - Display the multiple orders component (already written) when the url matches `/orders`, this time showing ALL users' orders `(*admin)`
- [ ] Admin - Products
  - [ ] Write and display a component to create a new product
  - [ ] Write and display a component to edit a product
  - [ ] Add "delete product" button to products list

## Product Reviews
### `reviews` table
- [ ] Create a `reviews` table definition with the following information:
  - [ ] id - serial; primary key
  - [ ] title - not null
  - [ ] content - not null - must be at least x characters and no longer than y characters
  - [ ] stars - integer not null (0 through 5)
  - [ ] "userId" - references users(id)
  - [ ] "productId" - references products(id)
### Frontend
  - Ability to create/update/delete reviews for authenticated users
  - For each product, in list view
    - Display number ofreviews
    - Display average stars
  - For each product, in single view
    - Display list of reviews, each showing title, content, user, stars

## Other Functionality
### Orders
#### Frontend
- Loading messages for all fetches
- Paginate product data
- Logged In Users - Orders
  - Write a component to display all orders pertaining to the user (order history)
  - Display the all-orders component when the url matches `/orders` `(*)`
  - Email Confirmation
  - Filter products with a search field
- Admin
  - Trigger password reset for user

</details>

# Project DUE: End of Week 4 - Friday 8/5

<details>

- Finishing touches
- Correcting items identified in last code review
- NO big breaking changes.

</details>


## Due Dates/Schedule
### - Sat 08/06 - Presentation Prep & Recording

### - Tues 08/09 - Presentation Prep & Recording (day 2)

### - Tue 08/09 Midnight - Presentation Due, uploaded to YouTube (send instructor link to YouTube)

### - Wed 08/10 Mock Presentations / Retrospective / Last Minute Edits

### - Thu 08/11 midnight - Presentation Due IN the drive folder 

### - Sat 08/13 - DEMO DAY & Graduation
- 12pm-1pm - Graduation/Demo Day/Video Presentations
