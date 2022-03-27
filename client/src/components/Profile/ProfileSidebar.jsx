import React from "react";
import { useSelector } from "react-redux";
import confing from "../../config/default.json";
import { Link } from "react-router-dom";
function ProfileSidebar({ setselectedLink, selectedLink }) {
  const serverApi = confing.API_SERVER;

  const sidebarLinks = [
    { link: "userInfo", name: "Профиль" },
    { link: "account", name: "Учетная запись" },
    { link: "photo", name: "Фотография" },
  ];
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser.user.firstName && currentUser.user.secondName);
  return (
    <div className="col-lg-4 profile_sidebar d-flex flex-column">
      <div className="profile_sidebar__info d-flex flex-column align-items-center justify-content-center">
        {/* ---------Аватар--------- */}
        <div className="avatar d-flex justify-content-center">
          <img src={serverApi + currentUser.user.avatar} alt="" />
        </div>
        {/* ---------Аватар--------- */}
        <p className="profile_sidebar__username">
          {currentUser.user.firstName && currentUser.user.secondName
            ? currentUser.user.secondName + " " + currentUser.user.firstName
            : currentUser.user.username}
        </p>
      </div>
      <ul className="profile_sidebar__links d-flex flex-column ">
        {sidebarLinks.map((el, index) => (
          <li
            key={el.link}
            onClick={() => setselectedLink(el.link)}
            className={` profile_sidebar__link ${
              selectedLink === el.link ? "profile_sidebar__link-active" : ""
            }`}
          >
            <Link to="">{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileSidebar;
