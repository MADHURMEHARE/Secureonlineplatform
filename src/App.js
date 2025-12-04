import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/layout";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Hero from "./pages/app/hero/Hero";
import ChapterList from "./pages/app/chapter/chapterList";
import Chapter from "./pages/app/chapter/Chapter";
import Page404 from "./pages/misc/Page404/Page404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<Page404/>,
      children: [
        { path: "/", element: <Hero /> },
          { path: "about", element: <Hero/> }, 
          { path: "chapter", element: <Chapter/> }, 
        {
          path: "course",
          children: [
            { index: true, element: <Courses /> },               // /course
            { path: ":id", element: <Details /> },               // /course/:id
            { path: ":id/chapter", element: <ChapterList /> },   // /course/:id/chapter
            { path: ":id/chapter/:num", element: <Chapter /> },  // /course/:id/chapter/1
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
