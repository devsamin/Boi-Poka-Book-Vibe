import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : 'books/:bookId',
        element : <BookDetails></BookDetails>,
        loader : ()=> fetch('/booksData.json')
      },
      {
        path : "/dashboard",
        element : <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
