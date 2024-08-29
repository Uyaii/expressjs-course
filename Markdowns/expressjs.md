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

## GET REQUESTS

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

### ROUTE PARAMS

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

### QUERY PARAMS

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

## POST REQUESTS
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

## PUT REQUESTS
So for put requests they're used to update records ie all the fields in a record in the database( eg updating id, username and displayname all at once)

## PATCH REQUESTS
Patch requests are used to update records partially ie only 1 or 2 fields in a record (ie updating only username or displayname)


## DELETE REQUESTS
