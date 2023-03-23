
 import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
import AllRestaurants from "./Components/AllRestaurants";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Header from "./Components/Header";
import "./App.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <AllRestaurants />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  }
]);

export default AppRouter;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);

// 20230109164830
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING



// import axios from 'axios'
// import { useEffect } from 'react';
// import './App.css';
// import Header from './Components/Header';

// function App() {
 
 


//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

// export default App;