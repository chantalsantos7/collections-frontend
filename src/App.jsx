import { useState } from 'react'
import { createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom'
import './fonts.css';
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {path: "/", element: <HomePage />}, 
  {path: "/auth/*", 
  children:[
    {path: "signup", element: <SignupPage /> },
    {path: "login", element: <LoginPage />}
  ] },
  { path: "*", element: <Root /> }
])



export default function App() {

  return <RouterProvider router={router} />
}

function Root() {
  return (
      <Routes>

      </Routes>
  );
}