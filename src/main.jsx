import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about.jsx";
import Cart from "./pages/cart.jsx";
import Contact from "./pages/Contect.jsx";

import ProductList from "./Components/ProductList.jsx";
import Product from "./pages/Product.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Products",
        element: <ProductList />,
      },

      {
       path:"/product_details/:id",
       element:<Product/>
      },

      {
        path: "/about",
        element: <About />,
      },

      
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
