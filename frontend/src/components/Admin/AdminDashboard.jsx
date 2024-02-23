import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import AdminHome from "./pages/AdminHome"
import AdminTeachers from "./pages/AdminTeachers"
import AdminQueries from "./pages/AdminQueries"

export default function AdminDashboard() {
  const [pageToRender, setPageToRender] = useState("dashboard");

  const renderDashPage = (pageToRender) => {
    switch (pageToRender) {
      case "dashboard":
        return <AdminHome pageFunc={setPageToRender}/>;
      case "teachers":
        return <AdminTeachers/>
      case "queries":
        return <AdminQueries/>
      default:
        return <AdminHome />;
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <Sidebar activePage={pageToRender} pageFunc={setPageToRender} />
      {renderDashPage(pageToRender)}
    </div>
  );
}