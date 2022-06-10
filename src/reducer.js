import {
  CREATE_BOOKMARK,
  CREATE_COLLECTION,
  FETCH_BOOKMARKS,
  FETCH_COLLECTIONS,
  SIGN_UP,
  SIGN_IN,
} from "./constants/actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("supabase.auth.token")) || null,
  bookmarks: [],
  isLoggedIn: false,
  collections: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP:
      return {
        ...state,
        isLoggedIn: true ? localStorage.getItem("supabase.auth.token") : false,
      };
    case SIGN_IN:
      return { ...state, isLoggedIn: true };
    case FETCH_BOOKMARKS:
      if (state.user !== null) {
        state.isLoggedIn = true;
      }
      return { ...state, bookmarks: payload };
    case FETCH_COLLECTIONS:
      return { ...state, collections: payload };
    case CREATE_BOOKMARK:
      return { ...state, bookmarks: [...state.bookmarks, payload] };
    case CREATE_COLLECTION:
      if (state.collections.length < 10)
        return { ...state, collections: [...state.collections, payload] };

    default:
      return state;
  }
};
