import React from "react";

import {
  Search,
  Filter,
  UnderHeader,
  Popular,
  Footer,
} from "../components/Home";

function Home() {
  const cards = [
    {
      title: "Дизайнер",
      desk: "Описание Дизайнера",
      cost: 20000,
      type: "Дизайн",
    },
    {
      title: "Программист",
      desk: "Описание Программиста",
      cost: 30000,
      type: "Программирование",
    },
    {
      title: "Питонист",
      desk: "Описание Питониста",
      cost: 30000,
      type: "Программирование",
    },
  ];
  const types = ["Дизайн", "Программирование"];
  return (
    <div>
      <UnderHeader />
      <Popular cards={cards} />
      <Search />
      <hr></hr>
      <Filter cards={cards} types={types} />
      <Footer />
    </div>
  );
}

export default Home;
