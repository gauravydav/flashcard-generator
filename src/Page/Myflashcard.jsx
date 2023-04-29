/*import React from "react";
import { useSelector } from "react-redux";
import SingleFlashCard from "../Components/SingleFlashCard";
import "../index.css";

const Myflashcard = () => {
  const cards = useSelector((state) => state.card.cards);

  return (
    <div className="flashcard-container">
      {cards && cards.length > 1 ? (
        <>
          {cards.map((card, index) => (
            <SingleFlashCard key={index} card={card} />
          ))}
        </>
      ) : (
        <div className="no-cards-message">
          <h3>No Flash Cards to Show.</h3>
        </div>
      )}
    </div>
  );
};

export default Myflashcard;*/
import { useSelector } from "react-redux";
import SingleFlashCard from "../Components/SingleFlashCard";
import "../index.css";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";

const Myflashcard = () => {
  const cards = useSelector((state) => state.card.cards);

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">My Flashcards</h2>
      <div className="flex flex-wrap justify-center">
        {cards && cards.length > 0 ? (
          <>
            {cards.map((card, index) => (
              <SingleFlashCard key={index} card={card} />
            ))}
          </>
        ) : (
          <div className="mx-24 my-10 font-semibold text-xl">
            <h3 className="text-red-600 ">
              No Flash Cards to Show.
              <br />
            </h3>
            <h2 className="mt-8 "> Click Below to Create Your Flash Cards </h2>
            <Link to="/" className="flex text-blue-600">
              <GiClick />
              <GiClick />
              <GiClick />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Myflashcard;
