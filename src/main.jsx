import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about.jsx";
import Blog from "./pages/blog.jsx";
import Contact from "./pages/contact.jsx";
import Layout from "./components/layout/layout.jsx";
import AboutLayout from "./components/layout/aboutlayout.jsx";
import Milestones from "./pages/milestones.jsx";
import Testimony from "./pages/testimony.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "About",
//     element: <About />,
//   },
//   {
//     path: "blog",
//     element: <Blog />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "About",
        element: <AboutLayout />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: "milestones",
            element: <Milestones />,
          },
          {
            path: "testimonials",
            element: <Testimony />,
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
