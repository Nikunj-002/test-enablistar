import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import AddPage from "./pages/AddBeneficiary";
import EditPage from "./pages/EditBeneficiary";
import DetailsPage from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/add", element: <AddPage /> },
      { path: "/edit/:pid", element: <EditPage /> },
      { path: "/details/:bid", element: <DetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
