import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Messages from './components/messages.jsx'
import Search from './components/search.jsx'
import Footer from './components/footer.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/", element: <App />
  },
  {
    path: "/messages", element: <><Messages /> <Footer /></>
  },
  {
    path: "/search", element: <>
    <Search /> <Footer /></>
  }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
