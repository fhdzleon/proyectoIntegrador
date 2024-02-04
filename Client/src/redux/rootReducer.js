import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
        allCharacters: state.allCharacters.filter(
          (char) => char.id !== payload
        ),
      };

    case FILTER_CARDS:
      let filteredFavorites;
      if (payload === "All") {
        filteredFavorites = state.allCharacters;
      } else {
        filteredFavorites = state.allCharacters.filter(
          (char) => char.gender === payload
        );
      }
      return {
        ...state,
        myFavorites: filteredFavorites,
      };

    case ORDER_CARDS:
      const sortedCards = [...state.allCharacters].sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: sortedCards,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
