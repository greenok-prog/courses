import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Recomendation from "../components/Home/Recomendation";
import Search from "../components/Home/Search";
import UnderHeader from "../components/Home/UnderHeader";

function Home(addToFavorite) {
  const PopularCards = [
    {
      id: 1,
      title: "Python",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 2.png",
      type: "design",
    },
    {
      id: 2,
      title: "Ржавый скрипт",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 3.png",
      type: "programming",
    },
    {
      id: 3,
      title: "Дизайн",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 3.png",
      type: "design",
    },
  ];

  const trends = [
    { type: "design", name: "Дизайн" },
    { type: "programming", name: "Программирование" },
    { type: "marketing", name: "Маркетинг" },
  ];
  return (
    <div>
      <Container>
        <UnderHeader />
      </Container>
      <Recomendation addToFavorite={addToFavorite} cards={PopularCards} />
      <Search addToFavorite={addToFavorite} trends={trends} />
      <Footer />
    </div>
  );
}

export default Home;
