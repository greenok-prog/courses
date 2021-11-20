import React from "react";
import { Link } from "react-router-dom";
function ProfileSidebar({ setselectedLink, selectedLink }) {
  const sidebarLinks = [
    { link: "userInfo", name: "Профиль" },
    { link: "account", name: "Учетная запись" },
    { link: "photo", name: "Фотография" },
  ];
  return (
    <div className="col-lg-4 profile_sidebar d-flex flex-column">
      <div className="profile_sidebar__info d-flex flex-column align-items-center justify-content-center">
        <div className="avatar d-flex justify-content-center"></div>
        <p className="profile_sidebar__username">Артем Фризен</p>
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