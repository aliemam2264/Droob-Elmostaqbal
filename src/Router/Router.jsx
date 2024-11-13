import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import WhoWeAre from "../pages/WhoWeAre.jsx";
import SupportAndCommunication from "../pages/SupportAndCommunication.jsx";
import Blog from "../pages/Blog.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import StudyPrograms from "../pages/StudyPrograms.jsx";
import StudyCourses from "../pages/StudyCourses.jsx";
import { NavbarProvider } from "../contexts/NavBarContext";
import BlogPost from "../pages/BlogPost.jsx";
import ContactUs1 from "../components/ContactUs1.jsx";
import ContactUs2 from "../components/ContactUs2.jsx";
import Error from "../pages/error/Error.jsx";
import Test from "../pages/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "study-programs",
        element: <StudyPrograms />,
      },
      {
        path: "study-courses",
        element: <StudyCourses />,
      },
      {
        path: "who-we-are",
        element: <WhoWeAre />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "support-and-communication",
        element: <SupportAndCommunication />,
      },
      {
        path: "support-and-communication/contact-us-form",
        element: <ContactUs1 />,
      },
      {
        path: "support-and-communication/contact-us-phone",
        element: <ContactUs2 />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogPost />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <NavbarProvider>
      <RouterProvider router={router} />
    </NavbarProvider>
  );
};

export default AppRouter;
