import axios from 'axios';

// const TUITS_API = 'http://localhost:4000/api/tuits'; //for development
// const TUITS_API = 'https://tuiter-node-server-app-i73h.onrender.com/api/tuits';   //for production
//We don't use above implementations because it would force us to manually change the URL every time we deploy the app.

//instead we use the following:
const API_BASE = 'https://tuiter-node-server-app-i73h.onrender.com/api';
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
  console.log("create tuit");
    const response = await axios.post(TUITS_API, tuit)
    console.log(response.data);
    return response.data;
}

export const findTuits = async () => {
  console.log("find tuits");
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
  console.log("delete tuit");
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
  console.log("update tuit");
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}