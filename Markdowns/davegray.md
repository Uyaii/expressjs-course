# DAVE GRAY 9 HOUR REACT TUTORIAL

## CHAPTER 0 -REFRESH ON HIGHER ORDER ARRAY METHODS/FUNCTIONS

## CHAPTER 1

## CHAPTER 2

JSX means Javascript in XML and it allows us to put javascript expressions in our code

In your code {} (curly braces) are used tell the compiler that we want to write javascript code

## CHAPTER 3 - FUNCTIONAL COMPONENTS

rafce comand is for creating a boiler template for small components

```javascript
import "./App.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
```

```javascript
import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Anne", "Bob", "Dave", "Kevin"];
    const int = Math.floor(Math.random() * 3 + 1);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleNameChange()} !</p>
    </main>
  );
};

export default Content;
```

```javascript
import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Groceries List</h1>
    </header>
  );
};

export default Header;
```

```javascript
import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
```

## CHAPTER 4 - APPLYING CSS STYLES

- **Inline style**:

- **Using A Variable**:

```javascript
import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
  };
  return (
    <header style={headerStyle}>
      <h1>Groceries List</h1>
    </header>
  );
};

export default Header;
```

- **Using Seperate StyleSheets**

## CHAPTER 5 - CLICK EVENTS

You can obviously run functions in an onclick event

Now we have 3 functions in the code below

The first function "handleNameChange", it's being called immediately the page refreshes because of the () placed

But for the second "handleClick", it will only be called when the button is clicked

Then for the last one "handleClick2", it's not being called because it's being wrapped inside an anonymous function

```javascript
import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Anne", "Bob", "Dave", "Kevin"];
    const int = Math.floor(Math.random() * 3 + 1);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  return (
    <main>
      <p>Hello {handleNameChange()} !</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2("Dave")}>Click It</button>
    </main>
  );
};

export default Content;
```

There is also the onDoubleClick event

```javascript
return (
  <main onDoubleClick={handleClick}>
    <p>Hello {handleNameChange()} !</p>
    <button onClick={handleClick}>Click It</button>
    <button onClick={() => handleClick2("Dave")}>Click It</button>
    <button onClick={(e) => handleClick3(e)}>Click It</button>
  </main>
);
```

## CHAPTER 6 - useState HOOK

```javascript
import React from "react";
import { useState } from "react";

const Content = () => {

const [name, setName] = useState("Anne")

```

[name, setName]

- name is the container holding the new value for the state
- setName is going to be the default value for the state

```javascript
import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Anne");

  const handleNameChange = () => {
    const names = ["Anne", "Bob", "Dave", "Kevin"];
    const int = Math.floor(Math.random() * 3 + 1);
    setName(names[int]);
  };

  const handleClick = () => {
    console.log("You clicked it");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main onDoubleClick={handleClick}>
      <p>Hello {name} !</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={() => handleClick2("Dave")}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
```

The name argument was passed into the paragraph element so we can see what the name changes into
In the code above we created the useState then in the handlenamechange function instead of return we used the setName argument to get the values
After that we called the handlenamechange on one of the buttons to see the effect

### DO NOT DO THIS BECAUSE IT WONT WORK

```javascript
const handleClick = () => {
  setCount(count + 1); //!!!!!!!!!!!!!!!!!!!!!!
  console.log(count);
};
```

## CHAPTER 7 - LISTS AND KEYS

```javascript
import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Cocoa",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  return (
    <main>
      <ul>
        {items.map((item) => {
          return (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label>{item.item}</label>
              <FaTrashAlt role="button" tabIndex="0" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
```

First of all we created a function that would iterate through the list array and display each item

```javascript
return (
  <main>
    <ul>
      {items.map((item) => {
        return (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        );
      })}
    </ul>
  </main>
);
```

We used the .map() method to do it and in the input we set the onchange attribute to an anonymous function that will run the main function we want to use that is handleCkeck and we passed in an argument of item.id, basically saying we need the id of them item before we can even run the function

After that we created a usestate and in the default values we used the array with item objects **i think this step comes first!!!**

```javascript
const [items, setItems] = useState([
  {
    id: 1,
    checked: true,
    item: "Cocoa",
  },
  {
    id: 2,
    checked: false,
    item: "Item 2",
  },
  {
    id: 3,
    checked: false,
    item: "Item 3",
  },
]);
```

Now to handle the checking and unchecking we write the handleCheck function

```javascript
const handleCheck = (id) => {
  const listItems = items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  setItems(listItems);
  localStorage.setItem("shopping list", JSON.stringify(listItems));
};
```

Basically we created a variable/array that will loop through the items array, check if the current item id is the same as the id parameter and if it is it will now check if the item being clicked is already checked or unchecked and then if it is then it will change to its opposite but if it isn't then it just leaves it the way it is

We also did the same thing for the handle delete function

```javascript
const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  localStorage.setItem("shopping list", JSON.stringify(listItems));
};

return (
  <main>
    {items.length ? (
      <ul>
        {items.map((item) => {
          return (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={
                  item.checked ? { textDecoration: "line-through" } : null
                }>
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    ) : (
      <p style={{ marginTop: "2rem" }}>Your list is empty!</p>
    )}
  </main>
);
```

## CHAPTER 8 - PROP (PROPERTIES) DIRLLING

The props come from the parent component

```javascript
//Props
function App() {
  return (
    <div className="App">
      <Header title="Groceries" />
      <Content />
      <Footer />
    </div>
  );
}

//Child
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};
```

Or we can use the destrucuring method

```javascript
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
```

Default props allow us to set values for the props expected in the componenet so that if any of the props arent made available an error wont show

```javascript
Header.defaultProps = {
  title: "Default Title",
};
```

In this case our main goal is to show the total number of items in the list in the footer but initially the items have been confined to just the content component but we need to be able to pass the information about the list to the footer and we can't do it from the content component because it's not a parent component

So all the logic from the content we moved it to the app.js file and set the props in the content component

```javascript
return (
  <div className="App">
    <Header />
    <Content
      items={items} //were passing/drilling all the props to content.js since we moved the functions and array from it
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    />
    <Footer />
  </div>
);
```

Then in the content component we pass the props using the destructuring method

```javascript
const Content = ({ items, handleCheck, handleDelete }) => {};
```

Now we can pass the information we need to the footer

```javascript
//PARENT COMPONENT
<Footer length={items.length} />;

//CHILD COMPONENT

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} List {length === 1 ? "Item" : "Items"}
      </p>
    </footer>
  );
};
```

After that we drilled the properties more we made an itemList componenet and a lineItem componenent and the item, handleCheck and handleDelete were drilled down to the last component

```javascript
//lineItem
const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

//itemList

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};
```

## CHAPTER 9 - CONTROLLED INPUTS/COMPONENTS

In this chapter we're making a form and we want to make the input element a controlled input and to do that we tie it to state

```javascript
//parent element

   <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}

      />

//child element
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
      <form className='addForm' onSubmit={handleSubmit}>
          <label htmlFor='addItem'>Add Item</label>
          <input
              autoFocus
              id='addItem'
              type='text'
              placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
          />
```

Now we write the function to add the item

```javascript
const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false, item };
  const listItems = [...items, myNewItem];
  setAndSaveItems(listItems);
};
```

The additem function will take in an item argument

To explain the above better, items[items.length - 1].id, that line means that the computer should check the items array for an index and that index should be the length of the array minus 1 to get the last item in the array(you know that indexes in arrays are counted useing index based counting so if the array has 3 items and we want the index of the last item, we do 3-1 to get 2, so 2 is the position or index of the last item in the array)

Then after getting the index we do that index.id that means the last items id and then we just add 1 to it to give it a new and unique number

So after that we write the code for the handlesubmit

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;

  // add item function
  addItem(newItem);
  setNewItem("");
};
```

Passing the newItem state variable as the parameter to be used in the additem function

After all of that we want to load the list based on what we're storing in the localstorage so that our list wint keep refreshing to the default one initially created

So what we did was that we removed the initial array that was used as the default values and we did this instead

```javascript
const [items, setItems] = useState(
  JSON.parse(localStorage.getItem("shopping list"))
);
```

### Now we want to implement a search bar that will dynamically search through our grocery list without using any button to actuall search

First we created the searchitem component and did the neccesary linking

```javascript
import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searc">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;

//PARENT COMPONENT

import SearchItem from "./searchItem";

<SearchItem search={search} setSearch={setSearch} />;
```

Now in the content component we used the .filter() method to filter the list according to our search

```javascript
<Content
  items={items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  )} //were passing/drilling all the props to content.js since we moved the functions and array from it
  handleCheck={handleCheck}
  handleDelete={handleDelete}
/>
```

items={...}: This is passing the items prop to the Content component. The items prop is an array of objects, each representing an item in a shopping list.

items.filter((item) => ...): This is using the filter method on the items array to create a new array that includes only the items that satisfy a certain condition.

item.item.toLowerCase().includes(search.toLowerCase()): The condition inside the filter function is checking whether the lowercase version of the item's name includes the lowercase version of the search string. Let's break it down further:

item.item: Accesses the item property of each object in the items array. In your case, it's the name of the item.

.toLowerCase(): Converts the item's name and the search string to lowercase. This ensures a case-insensitive comparison.

.includes(search.toLowerCase()): Checks if the lowercase item's name includes the lowercase search string. This means that if the search string is found anywhere in the item's name, the item will be included in the filtered array.

So, this filtered array of items is then passed as the items prop to the Content component. This way, only the items that match the search criteria are displayed in the Content component.

So now we want to auto focus on our input element again after pressing the add button to add an item so we use the useRef hook

```javascript
import { useRef } from "react";


const inputRef = useRef()
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button
        type="submit"
        aria-label="Add Item"
      onClick={()=> inputRef.current.focus()}
      >
        <FaPlus />
      </button>
```

so we set the ref attribute in the input element to our inputref object we created
And then we add an onclick event to the button, using an annonymous function we set it to inputref.current.focus to auto focus back on the input after clicking it

## CHAPTER 10 - PROJECT CHALLENGE

We were told to make a project that incpudes and input and a div, anytime we type in that input we want the background color of the div to change
so this is how i did it

```javascript
//APP.JS FILE
import ActualColor from "./actualColor";
import InputColor from "./inputColor";
import { useState } from "react";


function App() {
  const [color, setColor] = useState("")

  return (
    <div className="App">
      <ActualColor color={color} />
      <InputColor setColor={setColor} />
    </div>
  );
}

export default App;


//INPUTCOLOR.JS FILE
import React from 'react'

const InputColor = ({setColor}) => {
  return (
      <input
          placeholder='Add color name'
          onChange={(e)=>setColor(e.target.value)}
      />
  )
}

export default InputColor


//ACTUALCOLOR
import React from "react";

const ActualColor = ({ color }) => {
  return (
    <div className="actualColor" style={{ backgroundColor: `${color}` }}>
      <label>{color ? color : "Empty Value"}</label>
    </div>
  );
};

export default ActualColor;


```

## CHAPTER 11 - USEEFFECT HOOK

```javascript
useEffect(() => {
  console.log("render");
}, [items]);
```

This hook is used to run a piece of code when a compnent re-renders, in the code above the word "render" will log in the console whenever a change to our list occurs be it adding to the list or removing from it

In this case the useEffect is looking to it's dependency([items]) to know when to run

UseEffect is ascyncronous, it runs it's code after everything on the page has rendered

## CHAPTER 12 - JSON SERVER

```bash
 npx json-server -p 3500 -w data/db.json
```

-p is for port
-w is for watch

we're setting up a dummy server(RSET API) to store some data and mock our backend

## CHAPTER 13 - FETCH API DATA

## CHAPTER 14 - CRUD OPERATIONS

## CHAPTER 15 - FETCH DATA CHALLENGE

## CHAPTER 16 - REACT ROUTER

First if all you install react router

```bash
PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE DAVE\reactrouter>npm i react-router-dom -S
```

Then in your index.js make the follwoing changes according to what you want

```js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
```

React Router routes components

First of all we create a layout component for the permanent components that we dont want to change no matter what (ie home, nave and footer)
so it will look like this

```js
import React from "react";
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
```

The Outlet hook is used to signify the remaining pages(routes) that will be interchanging (ie newpost, missing,about etc)

Then after that in the app component you start with the routes hook and in the routes you're basically defining all the possible routes in your application

Our main route is the layout route because that has all the fixed components we need, we define both the path and the element it's refering to in this case it's refering to the layout component

```js
<Routes>
      <Route path="/" element={<Layout />}>

      </Route>
<Routes>
```

So after that we define the other routes in the main layout route
Now in the case of the home route we included a keyword named "index" to indicate that it is the default page that should load when the page loads

```js
<Routes>
      <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home />}
               />
      </Route>
<Routes>
```

Now we open another route for the post, but here we will put 2 routes into it, the first one is for the newpost page and the second is for the actual postpage

```js
<Routes>
      <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home />}
               />
      </Route>

       <Route path="post">
          <Route index element={<NewPost />} />

          <Route path=":id" element={<PostPage />} />
        </Route>
<Routes>
```

In the above we made the newpost page the index(ie the default page that loads when we put our url/post)

Now after that we can now define our about and missing page route outside of the post route

```js
<Routes>
      <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home />}
               />
      </Route>

       <Route path="post">
          <Route index element={<NewPost />} />

          <Route path=":id" element={<PostPage />} />
        </Route>

         <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
<Routes>
```

So the final result looks something like this

```js
import Home from "./components/home";
import NewPost from "./components/newPost";
import PostPage from "./components/postPage";
import About from "./components/about";
import Missing from "./components/missing";
import Layout from "./components/layout";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="post">
          <Route index element={<NewPost />} />

          <Route path=":id" element={<PostPage />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
```

## CHAPTER 17 - ROUTER HOOKS AND LINKS

In this chapter we built up our blog more

We defined 3 usestates, posts, search and searchresults

```js
const [posts, setPosts] = useState([
  {
    id: 1,
    title: "My first post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "lorem ipsum dlor sit ament consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "My second post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "lorem ipsum dlor sit ament consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "My third post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "lorem ipsum dlor sit ament consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "My fourth post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "lorem ipsum dlor sit ament consectetur adipisicing elit.",
  },
]);
const [search, setSearch] = useState("");
const [searchResults, setSearchResults] = useState([]);
```

Starting with the layout component, since it has components nested in it we're actually dealing with those components

Firstly the header component will have a title prop and that will be drilled into the header component

```js
import React from "react";
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = ({search, setSearch}) => {
  return (
    <div className="App">
      <Header
      title="React JS Blog"
      />
      <Nav/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;


//HEADER COMPONENT
import React from "react";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

```

Then after that we deal with the nav component, In the nav component we plan to have both a nav element and a search bar, so first of all we will pass the search and setsearch props down to the nav component

```js
return (
  <div className="App">
    <Header title="React JS Blog" />
    <Nav search={search} setSearch={setSearch} />
    <Outlet />
    <Footer />
  </div>
);
```

Then we go to the nav component to first destructure the props then place our elements.
first of all we put our Nav element and in it we place our form element for the search bar and then the ul for the actual nav list

In the form we set the value attribute to the search prop and the onchange attribute to an anonymous function that takes the e as an parameter and then the setsearch is set to the target value of the e

```js
<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
  <label htmlFor="search">Search Posts</label>
  <input
    id="search"
    type="text"
    placeholder="Search Posts"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</form>
```

Here we import a react dom hook that will be used to route to our pages
Now in the ul we place 3 li items and in those 3 li items we have the link hook that have a to attribute that basically tells the computer what page or link to take the user to

```js
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
```

Now we're done with the nav component, we go back to the app.js and move to the Home route and set a prop named posts to the posts array earlier defined

```js
<Route index element={<Home posts={posts} />} />
```

Then we go to the home component to edit it, first of all we destructure the posts prop we drilled down

then we write logic that says tha if posts.length is true(ie if it exists) then it should display a Feed component that we also drill the posts prop down to else it should just display no posts yo display

```js
import React from "react";
import Feed from "./feed";

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No Posts to display</p>
      )}
    </main>
  );
};

export default Home;
```

Now we go to the feed component, we destructure first, then we go on to map throught the posts and display each post in a Post component that has each individual post props drilled down into it and we also assign a key to the post

```js
import React from "react";
import Post from "./post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
```

Then in the post component, we destructure, after that we place an article element and in it we have a Link hook with a to attribute that will help us link to each individual post

```js
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      </Link>

      <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
```

Now we want to build up the individual post page in the postPage component and we'll be useing useParams (since we have set up a link to go to each posts individual page using their id we'll use useParams to refer to it here)

```js
//handleDelete function
const handleDelete = (id) => {
  const postsList = posts.filter((post) => post.id !== id);
  setPosts(postsList);
  navigate("/");
};

import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams(); // this is inlinw with the path we used in the app.js
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}

        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our HomePage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
```

Now in the newPost element we pass some props down that we will create

```js
const [postTitle, setPostTitle] = useState("");
const [postBody, setPostBody] = useState("");

const handleSubmit = () => {};

<Route
  index
  element={
    <NewPost
      handleSubmit={handleSubmit}
      postTitle={postTitle}
      setPostTitle={setPostTitle}
      postBody={postBody}
      setPostBody={setPostBody}
    />
  }
/>;
```

so now we set up the newPost component

```js
import React from "react";

const NewPost = ({
  handleSubmit,
  postBody,
  setPostBody,
  postTitle,
  setPostTitle,
}) => {
  return (
    <main className="NewPost">
      <h2>NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postTitle"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
```

Now dealing with the handleSubmit function we install a package

```bash
PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE DAVE> cd reactrouter
PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE DAVE\reactrouter>  npm i date-fns -S
```

so we apply it in pur handleSubmit function

```js
const handleSubmit = (e) => {
  e.preventDefault();
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const datetime = format(new Date(), "MMMM dd, yyyy pp");
  const newPost = {
    id,
    title: postTitle,
    datetime,
    body: postBody,
  };

  const allPosts = [...posts, newPost];
  setPosts(allPosts);
  setPostTitle("");
  setPostBody("");
  navigate("/");
};
```

After doing that we're going to make our searchbar functional

```js
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse())
  },[posts, search])


   <Route index element={<Home posts={searchResults} />} />

```

All that is left now is to work on the about, missing and footer components

```js
import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page not found</h2>
      <p>Well that's disappointing.</p>
      <Link to="/">Visit our Homepage</Link>
    </main>
  );
};

export default Missing;


import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p> Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
};

export default Footer;


import React from "react";

const About = () => {
  return (
    <main className="About">
      <h2>About</h2>
      <p style={{marginTop:"1rem"}}>This blog app is a project in the learn react tutorial series </p>
    </main>
  );
};

export default About;

```

## CHAPTER 18 - FLEXBPX COMPONENTS

## CHAPTER 19 - AXIOS API REQUESTS

Create a data folder and a db.json file inside that folder and then move your posts array there and then remove the array in the app.js

now we install axios

```bash
PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE DAVE\reactrouter>  npm i  axios

```

now we create an API folder in the src folder and a posts.js file inside that folder and type

```js
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3500",
});
```

And start our json server

```bash
PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE DAVE\reactrouterer> npx json-server -p 3500 -w data/db.json

```

```js
import api from "./API/posts.js";

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await api.get("/posts");
      setPosts(response.data);
    } catch (err) {
      if (err.response) {
        //Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  fetchPosts();
}, []);
```

After that we edit the handleSubmit function

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const datetime = format(new Date(), "MMMM dd, yyyy pp");
  const newPost = {
    id,
    title: postTitle,
    datetime,
    body: postBody,
  };
  try {
    const response = await api.post("/posts", newPost);
    const allPosts = [...posts, response.data];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
```

After that we dealt with the delete function

```js
const handleDelete = async (id) => {
  try {
    await api.delete(`/posts/${id}`);
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  } catch (err) {
    console.log(err.message);
  }
};
```

Moving on we're going to make a handleUpdate function

```js
//Edit Function
const handleEdit = async (id) => {
  const datetime = format(new Date(), "MMMM dd, yyyy pp");
  const updatedPost = {
    id,
    title: editTitle,
    datetime,
    body: editBody,
  };

  try {
    const response = await api.put(`/posts/${id}`, updatedPost);
    setPosts(
      posts.map((post) => (post.id === id ? { ...response.data } : post))
    );
    setEditBody("");
    setEditTitle("");
    navigate("/");
  } catch (err) {
    console.log(err.message);
  }
};
```

We don't have a edit component yet so we want to make it now

```js
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postTitle"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />

            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Page not found</h2>
          <p>Well that's disappointing.</p>
          <Link to="/">Visit our Homepage</Link>
        </>
      )}
    </main>
  );
};
export default EditPost;
```

## CHAPTER 20 - CUSTOM HOOKS

#### RULES OF HOOKS IN REACT
- Only call hooks at the top level(ie don't call hooks inside loops, conditions or nested functions )
- Call hooks from react function components
- Call hooks from custom hooks (we can use react hooks inside our custom hooks but it can't work the other way round)

We're going to start with creating a hooks folder in the src folder and in that hooks folder we'll create a file for our first hook useWindowSize.js

```js
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const cleanUp = () => {
      window.removeEventListener("resize", handleResize);
    };

    return cleanUp;
  }, []);

  return windowSize;
};

export default useWindowSize;


```


Basically we're trying to track the window size of our screen

After that we import it into our app.js file and declare the width which is the only property we're using like this 
```js
  const { width } = useWindowSize();
```

Now we pass the down to the header component

After doing that we write logic to use that width we just received in the header component

```js
import {FaLaptop, FaTabletAlt, FaMobileAlt} from "react-icons/fa"

const Header = ({ title, width }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
    : <FaLaptop/>}
    </header>
  );
};

export default Header;
```

We're basically changing the icon placed in the header based  on the size of the screen 

Now we want to make a custom axiox fetch hook 

```js
import { useState, useEffect } from "react";
import axios from "axios";


//we're going to be receiving a url to work with in our app.js
const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]) //this is for the data we'll receive
    const [fetchError, setFetchError] = useState(null) //For errors
    const [isLoading, setIsLoading] = useState(false) //for loading time


    useEffect(() => {
        let isMounted = true; //to confirm our components are mounted
        const source = axios.CancelToken.source()  //for a cancel request


//this is being used to fetch data from the url we'll provide
        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                })
                if (isMounted) {
                    setData(response.data)
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message)
                    setData([])
                }
            } finally {
                isMounted && setTimeout(()=> setIsLoading(false),2000)
            }

        }
        fetchData(dataUrl)

        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }
        return cleanUp
}, [dataUrl])

    return { data, fetchError, isLoading };
}

export default useAxiosFetch;
```


now in app.js

```js
import useAxiosFetch from "./hooks/useAxiosFetch.js";
const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts")
  // New UseEffect for fetching the posts data from our api
  useEffect(() => {
  setPosts(data)
}, [data])
<Route index element={<Home posts={searchResults} 
          fetchError={fetchError}
          isLoading={isLoading}
        />} />
        
```
After that we move to the home.js file

```js
import React from "react";
import Feed from "./feed";

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="Home">
      {isLoading && <p className="statusMessage">Loading Posts.....</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}

      {!isLoading &&
        !fetchError &&
        (posts.length ? <Feed posts={posts} /> : <p className="statusMessage">No post to display.</p>)}
    </main>
  );
};

export default Home;
  

```

## CHAPTER 21 - CONTEXT API

- Used instead of drilling props down 
- Create a context foler and a datacontext.js file in the folder and place your skeleton of the file

```js
import { createContext, useState, useEffect } from "react";
const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}

export default DataContext
```

-import your dataprovider file in your app.js

-wrap your routes/components with the <DataProvider> tags

-Now move your import statements, your usestates and your functions/logic to your datacontext file

-Now we want to apply this to our width prop from the usewindowsize hook, so first of all since it's already imported in the datacontext file we add it as a value 
```js
 return <DataContext.Provider value={{width  }}>{children}</DataContext.Provider>;
}
```

Now we go to wherever we're paasing that prop down to and make some changes in this cas we're mamking changes to the layout and header components

```js
import { useContext } from "react";
import DataContext from "../context/dataContext";

 const { width } = useContext(DataContext);
```

And with that we dont need to drill down the width prop anymore
Now you can do the same thing for all the other props you're drilling down


## CHAPTER 22 - EASY PEASY REDUX (SO HE SAYS :(  )


## CHAPTER 4 - APPLYING CSS STYLES

## CHAPTER 4 - APPLYING CSS STYLES

## CHAPTER 4 - APPLYING CSS STYLES

## CHAPTER 4 - APPLYING CSS STYLES

## CHAPTER 4 - APPLYING CSS STYLES
