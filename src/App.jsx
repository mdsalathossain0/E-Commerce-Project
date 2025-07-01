import React from 'react'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider,} from "react-router-dom";

import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Journal from './pages/Journal';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyAccount from './pages/MyAccount';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Error from './pages/Error';
import RootLayout from './layouts/RootLayout';
import ProductsDetails from './pages/ProductsDetails';

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
    <Route path="/" element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/productdetails/:title" element={<ProductsDetails />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/journal" element={<Journal />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/myaccount" element={<MyAccount />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/checkout" element={<CheckOut />}></Route>
    <Route path="/*" element={<Error />}></Route>
    </Route>
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App