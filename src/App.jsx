import './css/site.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/fonts.css';
import { createBrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import ViewPage from './components/ViewPage/ViewPage';

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
      {
        path: "/collections/*",
        children: [
          { path: "view", element: <ViewPage /> }
        ]
      }
      
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