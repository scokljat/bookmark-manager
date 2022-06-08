import {
  FETCH_BOOKS,
  FETCH_COLLECTIONS,
  CREATE_COLLECTION,
} from "./constants/actionTypes";
import { supabase } from "./supabase";

export const getBookmarks = () => async (dispatch) => {
  try {
    const { data } = await supabase.from("bookmarks").select();
    console.log(data);

    dispatch({ type: FETCH_BOOKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCollections = () => async (dispatch) => {
  try {
    const { data } = await supabase.from("collections").select();

    dispatch({ type: FETCH_COLLECTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addCollection =
  ({ collection }) =>
  async (dispatch) => {
    console.log(collection);
    const { data, error } = await supabase
      .from("collections")
      .insert({ name: collection });
    console.log(data);
    data.map((post) => dispatch({ type: CREATE_COLLECTION, payload: post }));
  };
export const getUser = () => async (dispatch) => {
  let { data: bookmarks, error } = await supabase.from("bookmarks").select(`
    description,
    users (
      username
    )
  `);
  console.log(bookmarks);
};
