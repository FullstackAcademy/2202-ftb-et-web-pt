# React - Bootstrapping a new application with React Scripts
We need to create a new folder, set up the React environment, and create some files:

Skip the first line below if you've git cloned or already created the directory. Likewise, skip the second line if you're already in the project directory
```bash
mkdir project_name # see note above 👆
cd project_name # see note above 👆
npm init -y # see `package.json` below 👇
mkdir public src
touch public/index.html public/style.css src/index.js
npm install react react-dom react-scripts
```
### package.json
Remove the `homepage` entry in the root `package.json` file if it got created. This happens if we clone before running the above steps. If it's there, the line to remove will look like this: `"homepage": "https://github.com/mygithubusername/my-repo-name#readme"` Here's [an article explaining](https://github.com/facebook/create-react-app/issues/1812#issuecomment-286511320), if you're curious 
### public/index.html

With React, we avoid writing our application's HTML structure directly in the root HTML file. However, we need something for the application to render into, and to load our stylesheet into the browser. Here's some lightweight HTML to get us up and running:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
  <script src="/bundle.js"></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

### src/index.js

React Scripts utilizes this file (plus our public/index.html) to create the React application. We absolutely need to import `React` to utilize JSX (the syntax extension for React which allows HTML templating and JavaScript to intertwine), and `ReactDOM` to attach our application to our page.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
    Hello World
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
```

### package.json

Update the "scripts" property of your `package.json` to look like this:

```json
{
  // more above here
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  // more below here
}
```

### Starting your React server

Now you can run `npm start` from the command line. You should see this:

```
? We're unable to detect target browsers.

Would you like to add the defaults to your package.json? (Y/n) 
```

Say yes! It'll add some settings to the `package.json`, then it will start up your server. Once it does, you should see the project come up on the page.

You're good to go, start editing your project!
