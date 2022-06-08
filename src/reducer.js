import {
  CREATE_COLLECTION,
  FETCH_BOOKS,
  FETCH_COLLECTIONS,
} from "./constants/actionTypes";

const initialState = {
  bookmarks: [],
  isLoggedIn: true,
  collections: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS:
      return { ...state, bookmarks: payload };
    case FETCH_COLLECTIONS:
      return { ...state, collections: payload };
    case CREATE_COLLECTION:
      if (state.collections.length < 10)
        return { ...state, collections: [...state.collections, payload] };

    default:
      return state;
  }
};
