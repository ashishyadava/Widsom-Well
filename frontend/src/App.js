import './App.css';
import Login from './pages/Login';
import RootLayout from './layouts/RootLayout';
import { UserProvider } from './UserContext';
import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import AdminLayout from './pages/admin/AdminLayout';
import AllBorrowedBooks from './pages/admin/AllBorrowedHistory';
import AllReturnedBooks from './pages/admin/AllReturnedBooks';
import AllStudents from './pages/admin/AllStudents';
import AllBooks from './pages/admin/AllBooks';

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
      path: "/admin-dashboard",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <AdminDashboard />
        },
        {
          path: "students",
          element: <AllStudents />
        },
        {
          path: "books",
          element: <AllBooks />,
          children: [
            {
              path: "borrowed",
              element: <AllBorrowedBooks />
            },
            {
              path: "returned",
              element: <AllReturnedBooks />
            }
          ]
        }
        
      ]
    },
    {
      path: "/student-dashboard",
      element: <StudentDashboard />
    },

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
