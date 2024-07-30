import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import HomePage from './components/home/HomePage.jsx';
import RegistrationPage from './components/registration/RegistrationPage.jsx';
import LogInPage from './components/login/LogInPage.jsx';
import AuthContextProvider from './contexts/AuthContextProvider.jsx';
import Cart from './components/cart/Cart.jsx';
import Profilepage from './components/profile/Profilepage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>,
        // loader: () => fetch('http://localhost:5000/data'),
      },
    ]
  },
  {
    path:'/registration',
    element:<RegistrationPage/>,
  },
  {
    path:'/login',
    element:<LogInPage/>,
  },
  {
    path:'/mycart',
    element:<Cart/>,
  },
  {
    path:'/profile',
    element:<Profilepage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
