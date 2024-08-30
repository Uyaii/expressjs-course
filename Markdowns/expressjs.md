# EXPRESS.JS 7 HOUR COURSE

## INTRODUCTION

<p> First of all create your directory, initialize a package.json file using the command below then install express and nodemon(This is used to watch your project, install as a dev dependency)</p>

```bash
PS C:\Users\omoef\OneDrive\Desktop\Maryanne\Work\expressjs-course> npm init -y
PS C:\Users\omoef\OneDrive\Desktop\Maryanne\Work\expressjs-course> npm instal -D nodemon
```

<p>Now make the following changes in your package.json</p>

```js
{
  "name": "expressjs-course",
  "version": "1.0.0",
  "main": "index.mjs",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "nodemon ./src/index.mjs",
    "start": "node ./src/index.mjs"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  },
  "type": "module"
}

```

<p>Now we create our src folder and create the index.mjs file. After that we import express into our project,initialize it and assign a port to it</p>

```js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
```

## HTTP REQUEST METHODS

### GET REQUESTS

We'll deal with finding routes and how to access them

```js
//landing page route
app.get("/", (request, response) => {
  //response.send("Hello World !")
  response.status(201).send("Hollla");
});

//users api
app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, username: "anne", displayName: "anney" },
    { id: 2, username: "nsikak", displayName: "nsila" },
    { id: 3, username: "stella", displayName: "stellz" },
  ]);
});

//products api
app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});
```

#### ROUTE PARAMS

We'll deal with how to use route params to dynamically cast data to the server and also receive dynamic data

```js
//using route params (:id being the route param)
app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id);
  console.log(parsedId);
  if (isNaN(parsedId))
    return response.status(400).send({ msg: "Bad Request. Invalid ID." });

  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
});
```

#### QUERY PARAMS

An example of query params being used is:
localhost:3000/products?key=value&key2=value2
? - denotes that we have a query string after it

The essence of query params is to send out/receive data in a certain format or with certain specifics, like getting data alphabetically or geeting from cheapest product to most expensive products etc

```js
app.get("/api/users", (request, response) => {
  console.log(request.query);

  const {
    query: { filter, value },
  } = request;
  //when filter and value are undefined
  // if (!filter && !value) return response.send(mockUsers);

  if (filter && value)
    return response.send(
      mockUsers.filter((user) => user[filter].includes(value))
    );

  //without the of check about this will still return all the users when one or more query params are missing
  response.send(mockUsers);
});
```

[text](http://localhost:3000/api/users?filter=username&value=an), this is how you write the url to include the query params

### POST REQUESTS

you need and http client to send request bodies
download thunder client extension in vscode (its a lightweight rest api)

```js
app.use(express.json()); // add this just after your initialization of express.js

//set up Post request
app.post("/api/users", (request, response) => {
  console.log(request.body);

  const { body } = request;
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };

  mockUsers.push(newUser);

  return response.status(201).send(newUser);
});
```

Then you go to your thunder client to test it out
![alt text]("C:\Users\omoef\OneDrive\Desktop\thunder-client.png")

### PUT REQUESTS

So for put requests they're used to update records ie all the fields in a record in the database( eg updating id, username and displayname all at once)

```js
//Set up a Put request by specific ids(ie using route params)

app.put("/api/users/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId); // this line was the problem it needed to be expliciitily returned

  //if the user isnt found parsedId will return false meaning the findUserIndex will return -1 so we have to deal with said case
  if (findUserIndex === -1) return response.sendStatus(404);

  mockUsers[findUserIndex] = { id: parsedId, ...body };

  return response.sendStatus(200);
});
```

#### PROBLEM ENCOUNTERED

Great to hear that it worked! Here's why the explicit return statement made a difference:

The Problem: Implicit vs. Explicit Return in Arrow Functions
In JavaScript, arrow functions can have implicit or explicit returns, and this is where the issue occurred.

Your Original Code:
javascript
Copy code
const findUserIndex = mockUsers.findIndex((user) => {
user.id === parsedId;
});
This version doesn't actually return a value from the arrow function because the curly braces {} create a function body. Once you have a function body, you must use the return keyword to return a value. Without the return, JavaScript doesn't return anything from the function, so it defaults to undefined, which is why findIndex didn't work and kept returning -1.

The Fixed Version:
javascript
Copy code
const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
Here, there's no {} after the arrow (=>), which means this is an implicit return. In this case, whatever expression follows the arrow (user.id === parsedId) will be automatically returned by the function.

How It Works:
With {} (Explicit Return Required):

javascript
Copy code
(user) => {
user.id === parsedId; // No return statement, so it returns undefined
}
In this case, the function body {} is used, so JavaScript expects you to explicitly use return. Since you didn’t have return in your function, it returned undefined.

Without {} (Implicit Return):

javascript
Copy code
(user) => user.id === parsedId;
When you remove the {}, the expression (user.id === parsedId) is automatically returned. This shorthand allows for a more concise syntax when the function body is just one expression.

Why findIndex Fails Without the Return:
The findIndex method expects the callback function to return true or false for each item. If no value is returned (i.e., undefined), the condition isn't met, so the findIndex method won't find the user and will return -1.

In your original version:

user.id === parsedId was calculated, but the result wasn't returned, so undefined was effectively being returned.
In the fixed version:

The comparison result (true or false) was returned, so findIndex could work properly.
Rule of Thumb:
If you use an arrow function with curly braces {}, you must use return inside the function to return a value.
If you don't use curly braces, the value is returned implicitly.
Let me know if you need any further clarification!
Patch requests are used to update records partially ie only 1 or 2 fields in a record (ie updating only username or displayname)

```js
app.patch("/api/users/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);

  //if the user isnt found parsedId will return false meaning the findUserIndex will return -1 so we have to deal with said case
  if (findUserIndex === -1) return response.sendStatus(404);

  // This means that we're passing in the whole record and the body of the request into the mockUsers[findUserIndex] to override the old field you want to change to the one you're changing it to.
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return response.sendStatus(204);
});
```

### PATCH REQUESTS

Patch requests are used to update records partially ie only 1 or 2 fields in a record (ie updating only username or displayname)

```js
app.patch("/api/users/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);

  //if the user isnt found parsedId will return false meaning the findUserIndex will return -1 so we have to deal with said case
  if (findUserIndex === -1) return response.sendStatus(404);

  // This means that we're passing in the whole record and the body of the request into the mockUsers[findUserIndex] to override the old field you want to change to the one you're changing it to.
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return response.sendStatus(204);
});
```

### DELETE REQUESTS

```js
//SET UP A DELETE REQUEST
app.delete("/api/users/:id", (request, response) => {
  const {
    params: { id },
  } = request;

  const parseId = parseInt(id);
  if (isNaN(parseId)) return response.sendStatus(400);
  const findUserIndex = mockUsers.findIndex((user) => user.id === parseId);
  if (findUserIndex === -1) return response.sendStatus(404);

  mockUsers.splice(findUserIndex, 1);
  return response.sendStatus(200);
});
```

## MIDDLEWARE
It a function that can have logic but it's also a function that can perform request handling as well
And the order matters
if you want your middleware to register before your routes then you include this code at the top of your project


- Middleware in Express.js refers to functions that have access to the request (req), response (res), and next middleware function in the application’s request-response cycle. Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.
 If the middleware function doesn’t end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

### Types of Middleware
#### Application-level Middleware

Bound to an instance of the app object, using app.use() or app.METHOD() where METHOD is an HTTP method (e.g., GET, POST).

#### Router-level Middleware
Bound to an instance of express.Router().

#### Error-handling Middleware

A special kind of middleware with four arguments (err, req, res, next). It is used for handling errors within the app.
Built-in Middleware

Express includes some middleware like express.json() and express.urlencoded() to parse incoming requests with JSON and URL-encoded payloads.
Third-party Middleware

#### Middleware provided by third-party libraries, such as morgan, cookie-parser, cors, etc.


#### Example: Application-level Middleware
```javascript
Copy code
// Importing necessary modules
import express from 'express';

const app = express();

// Example of application-level middleware
app.use((req, res, next) => {
  console.log('Request Type:', req.method);
  next();  // Proceed to the next middleware
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
Here, the middleware logs the request type and then calls next() to pass control to the next route handler or middleware function.
```

#### Example: Router-level Middleware
Router-level middleware works similarly but is attached to an express.Router() instance.

```javascript
Copy code
import express from 'express';

const app = express();
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Define routes for this router
router.get('/user/:id', (req, res) => {
  res.send('User Info');
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
This middleware logs the timestamp for every request made to routes prefixed with /api.
```
#### Example: Error-handling Middleware
Error-handling middleware is defined with four arguments, where the first is the error object.

```javascript
Copy code
import express from 'express';

const app = express();

// Application-level middleware
app.use((req, res, next) => {
  const err = new Error('Something went wrong');
  next(err);  // Passing the error to the error-handling middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
Here, if an error occurs, it is forwarded to the error-handling middleware, which logs the error and sends a 500 status code.

#### Built-in Middleware
Express provides some commonly used middleware as part of the framework.

express.json()
Parses incoming requests with JSON payloads.

```javascript

app.use(express.json());
express.urlencoded()
//Parses incoming requests with URL-encoded payloads.


app.use(express.urlencoded({ extended: true }));
```
#### Example: Third-party Middleware (e.g., morgan)
Third-party middleware can be added for logging, parsing, etc.

```javascript

import express from 'express';
import morgan from 'morgan';

const app = express();

// Using the 'morgan' third-party middleware for logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
Here, morgan is a logging middleware that logs HTTP requests.

### Ordering Middleware
Middleware is executed in the order it is defined. So the sequence in which you define middleware functions matters. For example, if you define a middleware function that terminates the request-response cycle and does not call next(), the subsequent middleware functions will not run.

```javascript
Copy code
app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware');
  res.send('Response from second middleware');
});
```

In the above example, the second middleware sends the response, so any middleware defined after it won’t be executed unless next() is called.

### Common Use Cases for Middleware
Authentication: Verifying user credentials before granting access to routes.
Logging: Keeping track of all HTTP requests made to the server.
Parsing request body: Reading JSON or form data from incoming requests.
Serving static files: Serving files like images, CSS, and JavaScript files.
Error handling: Catching and handling errors that occur during request processing.
### MY JOTTINGS
```js
app.use(express.json());
```

then the other ways to apply middleware are as follows

```js
//METHOD 1
//MIDDLEWARE FUNCTION
const loggingMiddleware = (request, response, next) => {
  console.log(`${request.method}-${request.url}`);

  //the next() function tells the program to call the next function/middleware in the case where you have more than 1 middleware or a function after a middleware
  next();
};
app.use(loggingMiddleware);

//METHOD 2
//landing page route
app.get(
  "/",
  (request, response, next) => {
    //another intance of using middleware is inside a request handled liek this
    console.log("Base URL");
    next();
  },
  (request, response) => {
    //response.send("Hello World !")
    response.status(201).send("Hollla");
  }
);
```

for the second method the middleware will only register when using that route( the route could be /api/users/:id)
