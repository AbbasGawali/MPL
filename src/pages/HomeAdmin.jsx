import React from "react";
import "./AdminDesign/HomeAdmin.css";
import { HeaderAdmin } from "./HeaderAdmin";
import { Sidebar } from "./Sidebar";
// import { PlayerTable } from "./PlayerTable";
// import { AdminUpdate} from "./AdminUpdate";
// import { UpcomingMatch } from "./UpcomingMatch";
import { AdminLiveAuction } from "./AdminLiveAuction";

export const HomeAdmin = () => {
  return (
    <>
      <div className="dashboard">
        <HeaderAdmin />
        <Sidebar />
        <div className="content">
          {/* <PlayerTable /> */}
          {/* <AdminUpdate /> */}
          {/* <UpcomingMatch /> */}
          <AdminLiveAuction />


        </div>
      </div>
    </>
  );
};


