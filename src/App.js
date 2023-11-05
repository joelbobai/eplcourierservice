import { useEffect } from "react";
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
let firstRender = true;
function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);
  return (
    <div className="App">
      <div id="google_translate_element"></div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
