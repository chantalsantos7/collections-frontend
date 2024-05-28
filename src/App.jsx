import { useState } from 'react'
import { createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom'
import './fonts.css';
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage';
import { AuthProvider } from './contexts/AuthContext';

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

  return <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
}

function Root() {
  return (
      <Routes>

      </Routes>
  );
}