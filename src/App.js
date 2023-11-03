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
import About from "./pages/About";
import Terms from "./pages/Terms";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/app" replace />, index: true },
      { path: "app", element: <GeneralApp /> },
      { path: "Order-Tracking/:id", element: <OrderTracking /> },
      { path: "about", element: <About /> },
      { path: "terms", element: <Terms /> },

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
