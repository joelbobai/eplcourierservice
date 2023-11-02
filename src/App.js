import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import OrderTracking from "./pages/OrderTracking";
import DashboardLayout from "./layouts/dashboard";
import GeneralApp from "./pages/GeneralApp";
import Page404 from "./pages/Page404";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/app" replace />, index: true },
      { path: "app", element: <GeneralApp /> },
      { path: "Order-Tracking", element: <OrderTracking /> },
      // { path: "activity", element: <Activity /> },
      // { path: "card", element: <Card /> },

      { path: "404", element: <Page404 /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
  { path: "*", element: <Navigate to="/404" replace /> },
  {
    path: "app",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
