import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Posts, { loader as postLoader } from "./routes/Posts"
import PostsList from "./components/PostsList"
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader } from "./components/PostDetails"
import RootLayout from "./routes/RootLayout"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Posts />, loader: postLoader,  children: [
        { path: "/create-post", element: <NewPost />, action: newPostAction },
        { path: "/posts/:id", element: <PostDetails />, loader: postDetailsLoader }
      ]}
    ],
  },

  { path: "/posts", element: <PostsList /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>)