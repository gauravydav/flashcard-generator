import { createSlice } from "@reduxjs/toolkit";

const flashcardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [
      {
        groupname: "",
        description: "",
        flashterms: [{ term: "", defination: "" }],
      },
    ],
  },
  reducers: {
    getCard: (state, action) => {
      const cardId = action.payload;
      const card = state.cards.find((card) => card.id === cardId);
    
      if (card) {
        state.card = card;
      } else {
        // Handle case where card is not found
        console.log(`Card with ID ${cardId} not found`);
      }
    }
    ,
    
    clearCard: (state) => {
      state.card = {
        name: "",
        lastname: "",
        dynamicFields: [],
      };
    },
    addCard: (state, action) => {
      state.cards = [action.payload, ...state.cards];
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((el) => el.id != action.payload);
    },
  },
});
export const { getCard, clearCard, addCard ,deleteCard} = flashcardSlice.actions;
export default flashcardSlice.reducer;
