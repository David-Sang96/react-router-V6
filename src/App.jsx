import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import ContactForm, { FormAction } from "./components/ContactForm";
import ErrorMessage from "./components/ErrorMessage";
import HotelReviewDetail, {
  FetchDetails,
} from "./components/HotelReviewDetail";
import HotelsList, { ApiFetchLoader } from "./components/HotelsList";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
          errorElement: <ErrorMessage />,
          children: [
            {
              index: true,
              element: <HotelsList />,
              loader: ApiFetchLoader,
            },
            {
              path: "/details/:id",
              element: <HotelReviewDetail />,
              loader: FetchDetails,
            },
          ],
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "contact-us",
          element: <Contact />,
          children: [
            {
              path: "contact-detail",
              element: <ContactDetail />,
            },
            {
              path: "contact-form",
              element: <ContactForm />,
              action: FormAction,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
