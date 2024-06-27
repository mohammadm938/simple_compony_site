import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({ priceType }) => {
  const [cardSelect, setCardSelect] = useState(2);

  const card_list_mounth = [
    {
      id: 1,
      name: "Plan 1 ",
      price: 5,
      features: ["Feature1", "Feauture2", "Feauture3", "Feauture4"],
    },
    {
      id: 2,
      name: "Plan 2 ",
      price: 25,
      features: ["Feature1", "Feauture2", "Feauture3", "Feauture4"],
    },
    {
      id: 3,
      name: "Plan 3 ",
      price: 50,
      features: ["Feature1", "Feauture2", "Feauture3", "Feauture4"],
    },
  ];

  const card_list_yearly = [
    {
      id: 10,
      name: "Plan 1 ",
      price: 50,
      features: ["Feature1", "Feauture2", "Feauture3", "Feauture4"],
    },
    {
      id: 20,
      name: "Plan 2 ",
      price: 250,
      features: ["Feature1", "Feauture2", "Feauture3", "Feauture4"],
    },
    {
      id: 30,
      name: "Plan 3 ",
      price: 500,
      features: ["Feature1", "Feauture2", "Feauture3", "Feauture4"],
    },
  ];

  let card_list = priceType === "Yearly" ? card_list_yearly : card_list_mounth;

  return (
    <div className="mainFlexItems justify-between w-full items-start">
      <Card
        priceType={priceType}
        cardsList={card_list}
        cardSelect={cardSelect}
        setCardSelect={setCardSelect}
      />
    </div>
  );
};

export default Cards;
