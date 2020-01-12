import React from "react";


const UserHeader = ({user}) => {
  
  return (
    <div className="header-wrapper">
        <div className="user-wrapper">
            <img src={user.img} alt={`${user.name} image`} className="logged-in-user"></img>
            <div>{user.name}</div>
        </div>
    </div>
  );
};

export default UserHeader;
