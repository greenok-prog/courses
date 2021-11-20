import React, { useState } from "react";
import {
  UserPhoto,
  UserInfo,
  ProfileSidebar,
  Account,
} from "../components/Profile/exports";

function Profile() {
  const [selectedLink, setselectedLink] = useState("userInfo");
  const selectLink = (link) => {
    setselectedLink(link);
  };
  return (
    <div className="container-lg">
      <div className="row">
        <ProfileSidebar
          setselectedLink={selectLink}
          selectedLink={selectedLink}
        />
        {selectedLink === "userInfo" ? (
          <UserInfo />
        ) : selectedLink === "account" ? (
          <Account />
        ) : selectedLink === "photo" ? (
          <UserPhoto />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Profile;
