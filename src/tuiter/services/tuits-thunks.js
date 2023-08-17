import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";


export const createTuitThunk = createAsyncThunk(
  "tuits/createTuit",
  async (tuit) => {
    const newTuit = await service.createTuit(tuit);
    console.log(newTuit);
    return newTuit;
  }
);

export const findTuitsThunk = createAsyncThunk(
  "tuits/findTuits",
  async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
  "tuits/deleteTuit",
  async (tuitId) => {
    await service.deleteTuit(tuitId);
    return tuitId;
  }
);


export const updateTuitThunk = createAsyncThunk(
  "tuits/updateTuit",
  async (tuit) => {
    const updatedTuit = await service.updateTuit(tuit);
    return updatedTuit;
  }
);