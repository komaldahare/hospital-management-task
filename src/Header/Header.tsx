import React from "react";
import { ButtonMedium, LinkButton } from "../common/Buttons";
import { useSelector } from "react-redux";

const adminTabs = [
  { id: 1, label: "dashboard", path: "/" },
  { id: 2, label: "all doctors", path: "/doctor" },
  { id: 3, label: "all patients ", path: "/patient" },
];

const userTabs = [
  { id: 1, label: "profile", path: "/admin" },
  { id: 2, label: "My Appointment", path: "/user/myappointment" },
  { id: 3, label: "Book Appointment ", path: "/user/bookappointment" },
];

const Header: React.FC = () => {

  const { userData } = useSelector((state: any) => state.user);

  console.log("userData", userData);

  return (
    <header className="bg-sky-600 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">My App</h1>
        <nav>
          {adminTabs.map((tab) => (
            <LinkButton
              key={tab.id}
              label={tab.label}
              bgColor="bg-blue-400"
              path={tab.path}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
