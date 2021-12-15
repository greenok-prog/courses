import React from "react";

function AboutCourseList({ list }) {
  return (
    <ul className="aboutCourse_list row">
      {list.map((el, index) => (
        <li className="aboutCourse_list-item col-6" key={index}>
          <img src="/images/done.png" alt="" />
          {el}
        </li>
      ))}
    </ul>
  );
}

export default AboutCourseList;
