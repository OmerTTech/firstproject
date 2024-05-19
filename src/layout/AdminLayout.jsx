import React from "react";
import Sidebar from "../admin/Sidebar";
import '../admin/admin.css'
const AdminLayout = (props) => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <main>{props.children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
