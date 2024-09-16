import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 ml-16 md:ml-64 bg-gray-100 h-screen">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
