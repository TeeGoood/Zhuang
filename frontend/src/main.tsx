import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './error-page.tsx'
import Student from './pages/student/page.tsx'
import Course from './pages/course/page.tsx'
import Redirect from './pages/redirect/page.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Redirect />
      },
      {
        path: "students/:id",
        element: <Student />
      },
      {
        path: "courses/:id",
        element: <Course />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
