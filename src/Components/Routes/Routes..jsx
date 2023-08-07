import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"; 
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import TopRated from "../Pages/TopRated";
import Cart from "../Pages/Cart";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, 
      children :[
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/toprated',
            element : <TopRated />
        },
        {
            path : '/about',
            element : <About></About>
        },
        {
            path : '/cart',
            element : <Cart></Cart>
        },
      ]
    },
  ]); 

  export default router