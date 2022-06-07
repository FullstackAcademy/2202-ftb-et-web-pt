# JWT's 
What is a JWT => https://jwt.io/introduction

Header - Algo and Token Type
Payload - JSON containing your User Info
Signature - A Secret from your server 
Therefore, a JWT typically looks like the following.
xxxxx.yyyyy.zzzzz

### Authentication vs Authorization
- Auth (Authorization & Authentication) is a "hot topic", and doing it wrong can mean big costs to all involved.
- Authentication vs Authorization
  - Authentication - Login/Register - "Paying for your hotel room and Creating the key card" - Check user/password and if it matches, then create and send back a token
  - Authorization - JWT - "Using the key card to get into your hotel room" - Making sure the user that is making the request is the same user that logged in previously

- Authentication
  - User sends Username/Password
  - Server looks up user
  - Server checks if match
  - Server sends back token (or error if doesn't match)
- Authorization
  - Verifying -
    - User requests a route
    - If no token, skip this step
    - If token, server decodes & verifies token
      - Does it match the algorithm?
      - Is it current (not expired)?
      - If so, look up user
        - Set user data on request object, to be used later on in the route. That way, users only send over a token (not their user object).
  - Protecting - In "sensitive" routes (personal information / creating / potentially destructive ability), run middleware function that...
    - Checks if there is a user on the request (would have been set if token was verified)
    - If so, call `next()` (with nothing as an argument) to move along.
    - If not, pass error in the next function like `next(error)`.
      - The request never hits the functionality at this route, because it's an error.
      - The error is caught in either (1) Express' default error handler, or (2) Error handling middleware we write.


# Creating JWT using jsonwebtoken
1. Add secret to .env file
2. require('dotenv').config() in server/index.js
3. import JWT_SECRET from process.env in route file
4. jwt.sign(userObject, JWT_SECRET)
5. jwt.verify(token, JWT_SECRET)

- Curl Requests 
```sh
curl http://localhost:8000/api/owners/login -H "Content-Type: application/json" -X POST -d '{"name": "Annie Position", "password": "unsafe"}'
```

```sh
curl http://localhost:8000/api/puppies -H 'Authorization: Bearer <token>'
```

## Reference: 
- Playground - https://jwt.io/
Use this Example JSON to create and verify a token.
```json
{
  "id": 1,
  "name": "Annie Position",
  "email": "annie@email.com",
  "password": "unsafe",
  "address": null
}
```