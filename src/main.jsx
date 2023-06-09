import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Orders from './Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import CartProductsLoader from './Loaders/CartProductsLoader';
import Checkout from './fakeData/Checkout/Checkout';
import SignUp from './component/SignUp/SignUp';
import AuthProvider from './component/AuthProvider/AuthProvider';
import PrivateRoutes from './component/Routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>,
        loader: CartProductsLoader
      },
      {
        path: 'inventory',
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
      },
      {
        path: 'checkout',
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
