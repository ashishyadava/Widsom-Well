import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RootLayout from './layouts/RootLayout';
import { UserProvider } from './UserContext';
import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    }
  ]
);

function App() {
  return (
    <UserProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  );
}

export default App;
