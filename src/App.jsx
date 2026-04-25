import { useState } from 'react'
import "./App.css"
import pfp from "./assets/pfp.jpg"
import mail from "./assets/mail.svg"
import calendar from "./assets/calendar.svg"
import location from "./assets/location.svg"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/skills",
      element: (
        <>
         <Skills/>
        </>
      ),
    },
    {
      path: "/portfolio",
      element: (
        <>
          <Portfolio/>
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
         <Contact/>
        </>
      ),
    },
    
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
