import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FlashCardDetails = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const location = useLocation();
  const cardId = location.pathname.split("/").pop();
  const cards = useSelector((state) => state.card.cards);
  console.log(cards);
  const card = cards ? cards.find((card) => card.id === cardId) : null;

  return (
    <>
      {card ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-6">
            {card.groupname} {card.description}
          </h2>
          <div>
            {card.flashterms.map((term) => (
              <div key={term.term}>
                <h3>{term.term}</h3>
                <p>{term.definition}</p>
                <h3>{term.defination}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Card not found</div>
      )}
    </>
  );
};

export default FlashCardDetails;
