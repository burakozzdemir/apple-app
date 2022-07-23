# Apple App
# [LIVE](https://innovance-app.vercel.app/)

https://user-images.githubusercontent.com/95588996/180251019-107a515c-395b-4731-b082-aa95f193b7b4.mp4


# Tech

- [React] - React is a JavaScript-based UI development framework.
- [React-Redux] - Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.
- [React-ReduxJs/Toolkit] - Redux Toolkit is an official, opinionated, batteries-included toolset for efficient Redux development.
- [Redux-Thunk] - Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
- [React-Router-v6] - React Router is a standard library for routing in React.
- [Node.js] - Evented I/O for the backend.
- [Axios] - Promise based HTTP client for the browser and node.js
- [SASS] - Sass is an extension of CSS that enables you to use things like variables, nested rules, inline imports, and more.
- [Mui Material] - Mui Material is an open-source project that features React components that implement Google's Material Design.
- [React Formik and Yup] - Formik is the world's most popular open source form library for React and React Native.
- [Bootstrap 5.2.0] - Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins. 
- [Visual-Studio-Code] - Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.

## Features and Functionality

- E-Commerce Web Application
- Add Cart
- Delete Cart
- Single Page Application
- 8 Different Pages with React Router v6
- Login Authentication
- Form Validation
- Create Backend Server and Heroku Deploy
- Clone This Repo

### How to build?

#### 1.Clone this repo

#### 2.Install all the dependencies

```sh
  npm i
```

#### 3.Let's build the optimized version

```sh
  npm run build
```

#### 4.Integrating Vercel

- Install Vercel CLI
- Login to Vercel

```sh
  vercel login
```

- Initialize Vercel

```sh
  vercel github
```

- Deploy clone and make it live

```sh
  vercel deploy
```
#### 5.Setup Backend Url with Heroku

- https://innovance-server.herokuapp.com


#### 6.Setup Redux

- All Product
- Add Cart
- Delete Cart
- Login

#### 7.Setup Axios

- Get All Product From Api URL

#### 8.Setup React Router v6

- Create different 8 pages

```sh
  home
  product
  product/:id
  about
  contact  
  login
  addcart
  addcart/checkout
```


## App Flow

Project Structure
```
project
|-- public
|-- src
|    |-- api
|    |-- assests
|    |      |-- images
|    |      |-- scss
|    |-- components
|    |      |-- Cart
|    |      |-- CartModal
|    |      |-- Header
|    |-- pages
|    |      |-- About
|    |      |-- AddCart
|    |      |-- Checkout
|    |      |-- Contact
|    |      |-- Home
|    |      |-- Login
|    |      |-- Product
|    |      |-- ProductDetail
|    |-- redux
|    |      |-- actions
|    |      |-- reducers
|    |      |-- store
|    |-- router
|    |      |-- Layout
|    |-- App.js
|    `-- index.js
|-- package.json
`-- README.md
```

## ToDo's

- waiting feedback