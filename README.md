**Read in another language: [Українська](README.ukr.md), [English](README.md).**

# Pizza Day App

---

[![Pizza Day](https://i.gyazo.com/7730057de70718294c5ba768d1ed5506.gif)](https://gyazo.com/7730057de70718294c5ba768d1ed5506)

---

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](#)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](#)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)](#)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](#)
[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)](#)
[![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)](#)

This is the Pizza Day React app

This basic application demonstrates a pizza delivery service example, where users can select multiple types of pizzas and specify the desired quantity for each

The app in this repo is hosted on [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](#), hosting public URL: [https://pizza-day-azure.vercel.app/](https://pizza-day-azure.vercel.app/)

But you can use this app manually on your local machine

## Used dependencies:

- **Vite** - A fast and modern build tool that provides lightning-fast hot module replacement (HMR) for development, optimized for frameworks
- **React** - Library used for building user interfaces, particularly for single-page applications where you need a fast, interactive experience
- **React Router DOM** - Routing library for managing navigation in React apps
- **React Hook Form** - Lightweight library for managing forms and validation in React
- **Redux Toolkit** - Official toolset for efficient global state management, help reduce boilerplate code and simplify state management in modern React applications
- **MUI (Material UI)** - Modern, customizable UI component library for React
- **SASS** - CSS preprocessor with advanced features like variables and nesting
- **Yup** - JavaScript schema builder for form validation (works well together with React Hook Form for managing complex forms and state)

The full list of dependencies can be found in the **package.json** file.

---

## Used React features:

- **Components** - Building blocks of React applications, reusable and encapsulated UI pieces
- **useState, useEffect** - Core hooks for managing state and component lifecycle
- **Props** - Mechanism to pass data and event handlers from parent to child components
- **Rendering Lists** - Dynamically displaying multiple elements by iterating over arrays
- **Conditional Rendering** - Displaying different UI elements based on application state, props or conditions
- **Context API** - Provides a way to share values like themes or user data between components without props drilling
- **useContext Hook** - Simplifies consuming React Context within functional components
- **memo** - Higher-order component that memoizes functional components to prevent unnecessary re-renders
- **useCallback** - Returns a memoized callback function to optimize performance when passing functions as props (preventing unnecessary re-renders)
- **useMemo** - Memoizes expensive calculations and returns cached results unless dependencies change (preventing unnecessary re-renders)
- **Custom Hooks** - Reusable functions that encapsulates component logic and state using built-in React hooks
- **React Hook Form Controller Component** - Integrates controlled components with React Hook Form for advanced form handling
- **useReducer** - Alternative to useState for managing complex state logic using reducers
- **Redux Toolkit (store, reducers, actions)** - Simplifies Redux setup and state management with standard best practices
- **Redux Toolkit createAsyncThunk** - Utility for handling asynchronous logic and side effects in Redux
- **useRef** - Stores a reference to a DOM element or a value without causing re-renders
- **forwardRef** - Forwards a ref through a component to access a child’s DOM node or instance
- **React.lazy** - Dynamically loads components only when they are needed
- **Suspense** - Displays a fallback (like a loader) while lazy-loaded components are being fetched

---

## Contents

- [Installation](#installation)
- [Usage](#usage)

### Installation

1. Clone the repository:

```shell
git clone https://github.com/labattaria/pizza-day.git
```

2. Install project dependencies:

```shell
cd pizza-day
npm install
```

### Usage

Start the react-dev-server using the following command:

```shell
npm run dev
```

Server will be located at **http://localhost:5173/**
