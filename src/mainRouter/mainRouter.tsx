import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import DoctorsList from "../components/Admin/DoctorsList/DoctorsList";
import PatientList from "../components/Admin/PatientsList/PatientsList";
import Login from "../components/Auth/Login"
import Profile from "../components/Patient/Profile/Profile";
import MyAppointment from "../components/Patient/MyAppointment/MyAppointment";
import BookAppointment from "../components/Patient/BookAppointment/BookAppointment";
import DoctorProfile from "../components/Doctor/Profile/DoctorProfile";
import DoctorAppointment from "../components/Doctor/MyAppointment/DoctorAppointment";
import SetAppointment from "../components/Doctor/SetAppointment/SetAppointment";

const mainRouter = createBrowserRouter([
    {
      path: "/",
      element:<Login/>
    },
    {
      path: "/admin",
      element: <MainComponent />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
        {
          path: "/admin/doctor",
          element: <DoctorsList />,
        },
        {
          path: "/admin/patient",
          element: <PatientList />,
        },
      ],
    },
    {
      path: "/user",
      element: <MainComponent />,
      children: [
        {
          path: "/user",
          element: <Profile />,
        },
        {
          path: "/user/myappointment",
          element: <MyAppointment />,
        },
        {
          path: "/user/bookAppointment",
          element: <BookAppointment />,
        },
      ],
    },

    {
      path: "/doctor",
      element: <MainComponent />,
      children: [
        {
          path: "/doctor",
          element: <DoctorProfile />,
        },
        {
          path: "/doctor/myappointment",
          element: <DoctorAppointment />,
        },
        {
          path: "/doctor/setAppointment",
          element: <SetAppointment />,
        },
      ],
    },

  ]);

  export default mainRouter;