import React from "react";
import CardItem from "../CardItem";

function Recomendation({ cards }) {
  return (
    <div>
      <div className="fast_courses">
        <div className="fast_courses_inner container-lg justify-content-center text-center">
          <h4 className="fast_courses_title">
            Курсы, которые можно пройти за день
          </h4>
          <p className="fast_courses_subtitle">
            Более 4000 курсов по таким темам, как бизнес-аналитика, графический
            дизайн, Python и прочим.
          </p>
          <div className="row justify-content-center">
            {cards.map((item, index) => (
              <CardItem
                key={index}
                title={item.title}
                text={item.text}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recomendation;
