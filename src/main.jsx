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
import NotFound from "./pages/not-found.jsx";
import Profile from "./pages/profile.jsx";
import SingleBlogPost from "./pages/single-blog-post.jsx";
import ThePost from "./pages/the-post.jsx";

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
        path: "about",
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
        path: "blog/:slug",
        element: <ThePost />,
      },
      {
        path: "profile/:userid",
        element: <Profile />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
