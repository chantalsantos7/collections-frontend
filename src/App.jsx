import { useState } from 'react'
import { createBrowserRouter, Link, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import './fonts.css';
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "*", element: <Root /> },
      { path: "/", element: <HomePage /> },
      {
        path: "/auth/*",
        children: [
          { path: "signup", element: <SignupPage /> },
          { path: "login", element: <LoginPage /> }
        ]
      },
      
    ]
  },

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

function Layout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}