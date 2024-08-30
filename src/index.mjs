import express from "express";

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

//MIDDLEWARE FUNCTION
// const loggingMiddleware = (request, response, next) => {
//   console.log(`${request.method}-${request.url}`);

//   //the next() function tells the program to call the next function/middleware in the case where you have more than 1 middleware or a function after a middleware
//   next()

// }
// app.use(loggingMiddleware)

const resolveIndexByUserId = (request, response, next) => {
  const {
    params: { id },
  } = request;

  const parseId = parseInt(id);
  if (isNaN(parseId)) return response.sendStatus(400);
  const findUserIndex = mockUsers.findIndex((user) => user.id === parseId);
  if (findUserIndex === -1) return response.sendStatus(404);

  //we dynamically assigned a method to the request object
  request.findUserIndex = findUserIndex;
  next();
};
const mockUsers = [
  { id: 1, username: "anne", displayName: "anney" },
  { id: 2, username: "nsikak", displayName: "nsila" },
  { id: 3, username: "stella", displayName: "stellz" },
  { id: 4, username: "tina", displayName: "Tina" },
  { id: 5, username: "jason", displayName: "Jason" },
  { id: 6, username: "henry", displayName: "Henry" },
  { id: 7, username: "mary", displayName: "Mary" },
];
//setting up a simple GET request

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

//users api
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

//products api
app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

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

//set up Post request
app.post("/api/users", (request, response) => {
  const { body } = request;
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };

  mockUsers.push(newUser);

  return response.status(201).send(newUser);
});

//Set up a Put request by specific ids(ie using route params)

app.put("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { body, findUserIndex } = request;

  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };

  return response.sendStatus(200);
});

//SET UP A PATCH REQUEST!!!!
app.patch("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { body, findUserIndex } = request;
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return response.sendStatus(204);
});

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

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
//Define routes and how your users can access said routes
