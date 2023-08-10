import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits-list.json";

const currentUser = {
    "userName": "Deer",
    "handle": "@deerilou",
    "image": "deer.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Entertainment",
    "time": "20sec",
    "liked": false,
    "replies": 0,
    "retuits": 1,
    "likes": 1,
    "handle": "@deerilou",
};


const tuitsSlice = createSlice({
  name: "tuitslist",
  initialState: { tuits: tuits },
  reducers: {
    createTuit(state, action) {
      console.log(action.payload);
      state.tuits.unshift({
        tuit: action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.tuits.findIndex(
        (tuit) => tuit._id === action.payload
      );
      state.tuits.splice(index, 1);
    },
    toggleLikeTuit(state, action) {
      const index = state.tuits.findIndex(
        (tuit) => tuit._id === action.payload
      );
      if (state.tuits[index].liked) state.tuits[index].likes -= 1;
      else state.tuits[index].likes += 1;
      state.tuits[index].liked = !state.tuits[index].liked;
    },
  },
});
export const { createTuit, deleteTuit, toggleLikeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;