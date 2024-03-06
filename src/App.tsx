import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { View } from "./View";

const router = createHashRouter([
  {
    path: "/",
    element: <View />,
  },
]);

const App = () => <RouterProvider router={router} />;

export { App };
