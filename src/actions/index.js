import jsonplaceholder from "../apis/jsonPlaceholder";

//Action creactor
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
