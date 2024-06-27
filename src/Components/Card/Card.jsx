const Card = ({ priceType, cardsList, cardSelect, setCardSelect }) => {
  return cardsList.map((card) => (
    <div
      key={card.id}
      className="flex-col space-y-4 rounded-md border shadow-lg p-5 w-1/4 "
    >
      <p className="text-gray-800">{card.name}</p>
      <div className="flex space-y-3 space-x-1">
        <h3 className="font-bold text-3xl">${card.price}</h3>
        <span>per {priceType}</span>
      </div>
      <ul className=" mb-auto flex-col space-y-2 list-inside list-disc text-gray-500">
        {card.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <button
        onClick={() => setCardSelect(card.id)}
        className={`w-full border border-black rounded-md p-1 hover:transition-all transition-all  ${
          cardSelect === card.id
            ? "bg-black text-white"
            : "hover:bg-black hover:text-white"
        }`}
      >
        Select
      </button>
    </div>
  ));
};

export default Card;
