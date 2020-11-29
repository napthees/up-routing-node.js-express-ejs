* _Updated document on November 29, 2020_

[![Known Vulnerabilities](https://snyk.io/test/github/napthees/up-routing-node.js-express-ejs/badge.svg?targetFile=package.json)](https://snyk.io/test/github/napthees/up-routing-node.js-express-ejs?targetFile=package.json)

To solve this you need to tell JSHint your project is developed in ES6 by creating the .jshintrc file to the root project directory with the below config:

```
{
  "esversion": 6
}
```

# Description of the application "Up routing with node.js, express, bootstrap & ejs!"

Website Pages Routing with Node.js, Express, Bootstrap and EJS

## Dependencies

```
    "bootstrap": "^4.4.1",
    "ejs": "^3.0.1",
    "express": "^4.17.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.16.1"
```

## Structure Project

```
 -- /routes
    -- index.js
 -- /styles
    -- /css
        -- style.css
    -- /images
        -- favicon.ico
        -- logo.png
 -- /views
    -- /include
        -- footer.ejs
        -- head.ejs
        -- nav.ejs
        -- scripts.ejs
    -- about.ejs
    -- contact.ejs
    -- index.ejs
 -- app.js
 -- package.json
 -- package-lock.json
```
## Install and Start

In command line:

```
 > To install the packages
```
     `npm install`
```
 > To start the application that will be available from your browser at localhost:8080
```
     `npm start`
