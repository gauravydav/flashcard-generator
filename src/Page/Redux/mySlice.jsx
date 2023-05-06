import { createSlice } from "@reduxjs/toolkit";

// create a new slice of the Redux store for flashcards
const flashcardSlice = createSlice({
  // specify the name of the slice
  name: "card",
  // set the initial state for the slice
  initialState: {
    cards: [
      {
        groupname: "",
        description: "",
        flashterms: [{ term: "", defination: "" }],
      },
    ],
  },
  // specify the reducers for the slice
  reducers: {
    // a reducer for getting a specific card by ID
    getCard: (state, action) => {
      const cardId = action.payload;
      const card = state.cards.find((card) => card.id === cardId);
    
      if (card) {
        state.card = card;
      } else {
        // Handle case where card is not found
        console.log(`Card with ID ${cardId} not found`);
      }
    },
    // a reducer for clearing the currently selected card
    clearCard: (state) => {
      state.card = {
        name: "",
        lastname: "",
        dynamicFields: [],
      };
    },
    // a reducer for adding a new card to the list of flashcards
    addCard: (state, action) => {
      state.cards = [action.payload, ...state.cards];
    },
    // a reducer for deleting a card from the list of flashcards
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((el) => el.id != action.payload);
    },
  },
});

// export the individual reducers as named exports
export const { getCard, clearCard, addCard ,deleteCard} = flashcardSlice.actions;

// export the default reducer for the flashcard slice
export default flashcardSlice.reducer;
