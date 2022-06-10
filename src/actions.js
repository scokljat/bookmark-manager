import {
  FETCH_BOOKMARKS,
  FETCH_COLLECTIONS,
  CREATE_BOOKMARK,
  CREATE_COLLECTION,
  SIGN_UP,
  SIGN_IN,
} from "./constants/actionTypes";
import { supabase } from "./supabase";

export const signUp = (newUser) => async (dispatch) => {
  try {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", newUser.email);

    if (data.length === 0) {
      await supabase.auth.signUp({
        email: newUser.email,
        password: newUser.password,
      });

      await supabase
        .from("users")
        .insert([{ email: newUser.email, password: newUser.password }]);
      dispatch({ type: SIGN_UP });
    } else {
      console.log("User exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (existedUser) => async (dispatch) => {
  try {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", existedUser.email)
      .eq("password", existedUser.password);

    if (data.length !== 0) {
      await supabase.auth.signIn({
        email: existedUser.email,
        password: existedUser.password,
      });

      dispatch({ type: SIGN_IN });
    } else {
      console.log("User doesn't exist with this email and password");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBookmarks = () => async (dispatch) => {
  try {
    const { data } = await supabase.from("bookmarks").select();
    console.log(data);

    dispatch({ type: FETCH_BOOKMARKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const pagination = () => async (dispatch) => {
//   const { data, error } = await supabase
//     .from("bookmarks")
//     .select("*")
//     .range(9, 14);
//   console.log("pagination", data);
// };

export const addBookmark = (newBookmark) => async (dispatch) => {
  try {
    const { data, error } = await supabase.from("bookmarks").insert([
      {
        description: newBookmark.description,
        url: newBookmark.url,
        collection: newBookmark.collection,
        tag: newBookmark.tag,
        user_id: "2",
      },
    ]);

    data.map((post) => dispatch({ type: CREATE_BOOKMARK, payload: post }));
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
