import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { View } from "./View";

const router = createBrowserRouter([
  {
    path: "/",
    element: <View />,
  },
]);

const App = () => <RouterProvider router={router} />;

export { App };
