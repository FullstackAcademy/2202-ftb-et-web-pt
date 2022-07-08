# Grace Shopper - Deployment and Proxying

## Deployment

- Development

  - There are 2 servers we run separately (express first, then react), but the react setup makes it behave like the express routes are part of the same server. So we can act as if it were the same server.
  - run `npm run server:dev` to start the web server.
  - run `npm run client:dev` to start the react server.

    - proxy: any requests that aren't for static assets (i.e. html) are proxied to `http://localhost:4000` so you can make calls back to your api without needing absolute paths. You can instead axios.get('/api/posts') or whatever without needing to know the root URL.

    ```js
    export async function proxyStuff() {
      debugger;
      try {
        const a = await fetch("/api/health");
        const myJson = a.json();
        return myJson;
      } catch (e) {
        console.log(e);
      }
    }
    ```

- Heroku deploy
  - There is only one server. (no proxies needed)
  - When new commits are pushed to `dev`, heroku rebuilds the app using the scripts we gave in the `package.json`:
  - `postinstall` runs the `client:build` command to compile all React code to the `build` directory. Also, any files in our `public` directory get copied to the `build` directory. Heroku automatically runs the `postinstall` command after Node installs and `npm i` gets run.
  - `npm start` runs to start the app, which starts the express server
  - Anything in the `build` directory is served as if it were the home route.

## Heroku in this app

- Heroku dashboard
- Heroku run commands - explained in the boilerplate readme
