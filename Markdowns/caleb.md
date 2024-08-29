# CALEB REACT TUTORIAL

##

Goals

- Deal with pages
- How to do navigation and routing in react
- Functionality and linking it to the nav bar

First of all we create a new folder named pages and create an employee.js file, then paste the old employee.js into it and edit it

```js
import Header from "./components/header";
import Employees from "./pages/employees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Header>
      <Router>
        <Routes>
          <Route path="/Employees" element={<Employees />} />
        </Routes>
      </Router>
    </Header>
  );
}

export default App;
```

We used the header to wrap the routes so that the header will be present in every page we go to

Now to make that path actually work we go to our header component

First we created a navigation array with different navigation objects that include their name and paths/href

```js
const navigation = [
  {
    name: "Employees",
    href: "/Employees",
  },
  {
    name: "Customers",
    href: "/Customers",
  },
  {
    name: "Projects",
    href: "/other",
  },
  {
    name: "Calender",
    href: "/other2",
  },
];
```

After that we imported the navlink component from react router dom and inserted it into out li element

```js
return (
  <>
    <header>
      <nav>
        <ul>
          <div className="leftSide">
            //First we mapped through the navigation array and returned an li
            element and in the li element we inserted the navlink component and
            it has an attribute naed "to" that is where we now put the href of
            each navigator and then obviously the name
            {navigation.map((navigator) => {
              return (
                <li>
                  <NavLink
                    to={navigator.href}
                    className={({ isActive }) => {
                      return isActive ? "isActive" : "notActive";
                    }}>
                    {navigator.name}
                  </NavLink>
                </li>
              );
            })}
          </div>
          <li>Dashboard</li>
        </ul>
      </nav>
    </header>
    {props.children}
  </>
);
```

First we mapped through the navigation array and returned an li element and in the li element we inserted the navlink component and it has an attribute naed "to" that is where we now put the href of each navigator and then obviously the name

Now for the isActive attribute we wanted to style/show which page is currently active so we just destructured the navlink to get the isactive attribute and used a tenary to check if it's active or not then i styles both the isactive and not active class

research discloseres on headless ui

## USEEFFECT

Useeffect allow us to have some section of code thhat wil execute when the state changes, in addition it will run after the page is initially loaded

```js
import { useState, useEffect } from "react";

const Dictionary = () => {
  const [word, setWord] = useState();

  useEffect(() => {
    console.log("state updated " + word);

    //limit what state useeffect cares about --> dependency array
  });

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />

      <h1>Let's get the definition of {word}</h1>
    </div>
  );
};
export default Dictionary;
```

The dependency array is the second argument you can pass intp the useeffect hook and it allows us to restrict what state we want useeffect to care about

```js
useEffect(() => {
  console.log("state updated ", word);

  //limit what state useeffect cares about --> dependency array

  //np dependency array --> it will execute at every state change
  //empty dependency array --> only executes on initial page load
  //value in empty array --> will execute when the state of that value changes
}, [word]);
```

To limit what state useeffect cares about we use a **dependency array**

- For no dependency array --> it will execute at every state change
- For a value( eg state ) in array --> will execute when the state of that value changes

```js
import { useEffect, useState, version } from "react";
import { v4 as uuidv4 } from "uuid";

const Definition = () => {
  const [word, setWord] = useState();
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`) //NA ME!!!!
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, [searchWord]);
  return (
    <>
      <input type="text" onChange={(e) => setSearchWord(e.target.value)} /> /
      {/*NA MEE!!!!!*/}
      <h1>Here is a definition</h1>
      {word
        ? word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })
        : null}
    </>
  );
};
export default Definition;
```

## useParams

This is used to pass parameters through the url
so first of all we go to where our routes are defined and do add a new route with the same elemnt but we add a /:whatever word you want to use

```js
<Route path="/Definition/:search" element={<Definition />} />
```

Then in the definition page, we import useparams and then declare a variable for it and That variable name will be the one you used in the path

```js
let { search } = useParams();
```

after that you just append it to the url

```js
useEffect(() => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    .then((response) => response.json())
    .then((data) => {
      setWord(data[0].meanings);
      console.log(data[0].meanings);
    });
}, []);
```

## useNavigate

Wr can use this to force the user to go to another page/url but its not like links where you have to actually click on them, we can just place it in an event handler and it will work from there

so first of all we wont be needing the route for the definition again instead we'll just leave the second one becaue we want to use the dictionary component to search for the words we're looking for

```js
<Router>
  <Header>
    <Routes>
      <Route path="/Employees" element={<Employees />} />
      <Route path="/Dictionary" element={<Dictionary />} />

      <Route path="/Definition/:search" element={<Definition />} />
      <Route path="/Customers" element={<Customer />} />
    </Routes>
  </Header>
</Router>
```

then after that we open the dictionary component, import usenavigate, declare a variable to it and use it in an onclick event to navigate to whatever word is typed

```js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dictionary = () => {
  const [word, setWord] = useState();
  const navigate = useNavigate(); //!!!!!!!!!!!!!!!!!!!!!

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button onClick={() => navigate("/dictionary/" + word)}>Search</button>
      {/*!!!!!!!!!!!*/}
    </div>
  );
};
export default Dictionary;
```

the we add a replace value to take us back to the page we just came from

```js
<button onClick={() => navigate("/dictionary/" + word)}>Search</button>
```

Now we want to deal with what would/should happen when we type a wrong text or we gert a 404 response

First of all we create a notfound component/page that will show anytime we have such an error

```js
const NotFound = () => {
  return <p>The page you're looking for was not found'</p>;
};
export default NotFound;
```

After that we define the route in the app.js router

```js
<Route path="/NotFound" element={<NotFound />} />
```

Now it's time to handle how we get the response and how to fizx it, and we do it in the definition page

```js
useEffect(() => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    .then((response) => {
      if (response.status === 404) {
        //redirect the page
        //navigate("/notfound") OR
        setNotFound1(true);
      }

      return response.json();
    })
    .then((data) => {
      if (data[0]?.meanings) {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      } else {
        setNotFound1(true);
      }
    });
}, [search, navigate]);

if (NotFound1 === true) {
  return (
    <>
      <NotFound />
      <Link to="/dictionary">Search Another</Link>
    </>
  );
}
```

Now to briefly explain, in the useeffect hook we had a .then(response) and a .then(data) code block, we're handling the errors there

After doing that we can now traverse and loop through the api to get the specific data we need

```js
{
  word ? (
    <>
      <h1 style={{ margin: "1rem" }}>Here is a definition</h1>
      {word.map((meaning) => {
        return (
          <p key={uuidv4()} style={{ margin: "1rem" }}>
            {meaning.partOfSpeech + ": "}
            {meaning.definitions[0].definition}
          </p>
        );
      })}
      <p style={{ margin: "1rem" }}>Search Again</p>
      <DefinitionSearch />
    </>
  ) : null;
}
```

# BACKEND APPLICATION

## Python Backend

In our terminal we create a backend for our project by saying

```bash
PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB> mkdir backend
```

then we ente rthe new directory and create a virtual environment

```bash

PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB> cd backend
PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> py -m venv .venv
```

after that we activate it

    ```bash
    PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> .venv\Scripts\Activate.ps1

(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend\.venv>

````
Now we install django

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend\.venv> py -m pip install django
````

then we type

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend\.venv> django-admin
```

and a list wil pop up, type

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend\.venv> django-admin startproject customers .
```

Now we run the server

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> py manage.py runserver
```

Now we open the folder in vscode

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> code .
```

First of all we want to initialize a git repository and create a gitignore file

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> git init
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> echo > .gitignore
```

Then

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> git add .
```

```bash
git remote add origin https://github.com/Uyaii/react-backend-django.git
  git branch -M main
  git push -u origin main
```

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> git push origin
```

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> pip install django-rest-framework
```

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> pip freeze
```

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> pip freeze > requirements.txt
```

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> git add .
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> git commit -m "add requirements.txt"
```

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> git push
```

## Creation of REST API

We're going to be creating

- A model
- A url path
- A serlizer(how we go )

first of all we type this in the terminal

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> py manage.py migrate
```

Then after that we create a file named "models.py" in the customers folder and add the following

```py
from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=200)
    industry=models.CharField(max_lenght=100)
```

now after that we first add our customers app to the insalled apps in settings.py and then type this in the terminal

```bash
.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> py manage.py makemigrations customers
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> py manage.py migrate
```

Now we got to the urls.py file and add a e=new path

```py
from customers import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/customers', views.customers, name="customers"),
]
```

that views is a file we'll create in our customers app

```py
def customers(request):
    #invoke serialzer and return to client
    pass
```

Now we want to create a serialzer but first we go back to setting and add "rest_framework to our installed apps
so frist of all create a serializer file then add this

```py
from rest_framework import serializers
from customers.models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields="__all__"
```

After doing that put this in your views.py file

```py
from customers.models import Customer
from customers.serializers import CustomerSerializer
from django.http import JsonResponse

def customers(request):
   data=Customer.objects.all()
   serializer = CustomerSerializer(data, many=True)
   return JsonResponse({"customer": serializer.data})
```

###

Now we're going to be adding information to our json, so first we go to the url/admin
then to create an account to use to login we use the terminal

```bash
 py manage.py createsuperuser
```

Then login on the admin site

now we create a new file named admin.py(for crud access to the db) and type

```py
from django.contrib import admin
from customers.models import Customer

admin.site.register(Customer);
```

then you log in to see your new customers table and add customers to the api

So Going back to react, we create a fetch request in our customers component

```js
import { useEffect, useState } from "react";

const Customer = () => {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/customers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCustomers(data);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "gray", padding: ".5rem" }}>
      <h2>Hiiiii</h2>
    </div>
  );
};
```

Now by default our backend is going to deny any request that come from an origin that's not explicitly allowed

```js
Access to fetch at 'http://localhost:8000/api/customers' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

so now we have to install a pacakge named CORS

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> pip install django-cors-headers
```

now we pip freeze again(do it whenever we install something)

```bash
(.venv) PS C:\Users\HP PC\Desktop\CODING ME\REACT COURSE CALEB\backend> pip freeze > requirements.txt
```

So now we add it to our installed apps and middleware and create a list of allowed origins

```py
#installed apps
INSTALLED_APPS = [
    'corsheaders',
    -------
]

#middleware

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    -----
]


#allowed origns

CORS_ALLOWED_ORIGINS =['http://localhost:3000']
```

Now in our cusomter page we map through the data and display what we want

```js
import { useEffect, useState } from "react";

const Customer = () => {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/customers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCustomers(data.customers);
      });
  }, []);
  return (
    <div style={{ padding: ".5rem" }}>
      <h2>Here are our customers</h2>

      {customers
        ? customers.map((customer) => {
            return <p>{customer.name}</p>;
          })
        : null}
    </div>
  );
};
export default Customer;
```

## Making A Details Page For Our Customers

We wnat to make a details page for each customer so we have to make sort of an api that will fetch the individual data of each customer

First of all we go to the backend and add a new path

```py
   path('api/customers/<int:id>', views.customer, name='customer'),
```

After that we go to the views.py and create a customer class

```py
def customer(request, id):
   data=Customer.objects.get(pk=id)
   serializer = CustomerSerializer(data)
   return JsonResponse({'customer': serializer.data})
```

Once that is set up we can go back to our frontend to get the data, so in the return statement we just use the link component from the react router dom to surround our customers and give the to attribute as the customers plus the customer.id

```js
<Route path="/Customers/:id" element={<Customer />} />
```

```js
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../shared";
const Customer = () => {
  const [customer, setCustomer] = useState();
  const [NotFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const url = baseUrl + "api/customers/" + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          //redirect to a 404 page
          navigate("/404");
          //render/embed a 404 componenet in this page
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, []);
  const { id } = useParams();
  return (
    <>
      {NotFound ? <NotFound /> : null}

      {customer ? (
        <div style={{ margin: ".5rem" }}>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}

      <Link to="/customers">Go Back2</Link>
    </>
  );
};
export default Customer;
```

Now we're going to be dealing with any errors that could occur

```py
def customer(request, id):
   try:
      data=Customer.objects.get(pk=id)
   except Customer.DoesNotExist:
      raise Http404('Customer does not exist')
   serializer = CustomerSerializer(data)
   return JsonResponse({'customer': serializer.data})
```

## Making Our API better

```py
from customers.models import Customer
from customers.serializers import CustomerSerializer
from django.http import JsonResponse, Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET','POST' ])
def customers(request):
   if request.method =='GET':
      data=Customer.objects.all()
      serializer = CustomerSerializer(data, many=True)
      return Response({'customers': serializer.data})
   elif request.method =='POST':
      serializer = CustomerSerializer(data=request.data)
      if serializer.is_valid():
         serializer.save()
         return Response({'customers': serializer.data}, status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST', 'DELETE'])
def customer(request, id):
   try:
      data=Customer.objects.get(pk=id)
   except Customer.DoesNotExist:
     return Response(status.HTTP_404_NOT_FOUND)
   if request.method =='GET':
      serializer = CustomerSerializer(data)
      return Response({'customer': serializer.data})
   elif request.method =='DELETE':
      data.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)
   elif request.method == 'POST':
      serializer = CustomerSerializer(data, data=request.data)
      if serializer.is_valid():
         serializer.save()
         return Response({'customer': serializer.data})
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


```
