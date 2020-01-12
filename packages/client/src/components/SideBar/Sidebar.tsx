import React from "react";
//import './Sidebar.css'
import Userlist from './UserList'
const Sidebar = ({userListDetail}) => {
  return (
    <div className="sidebar">
        <Userlist userListDetail={userListDetail}/>
    </div>
  );
};

export default Sidebar;