import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Recomendation from "../components/Home/Recomendation";
import Search from "../components/Home/Search";
import UnderHeader from "../components/Home/UnderHeader";

function Home() {
  const cards = [
    {
      title: "Полное руководство по Python 3: от новичка до специалиста",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 2.png",
    },
    {
      title: "Полное руководство по Python 3: от новичка до специалиста",
      text: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире",
      img: "image 3.png",
    },
  ];
  return (
    <div>
      <Container>
        <UnderHeader />
      </Container>
      <Recomendation cards={cards} />
      <Search cards={cards} />
      <Footer />
    </div>
  );
}

export default Home;
