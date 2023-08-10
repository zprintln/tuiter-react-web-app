import React,  {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../services/tuits-thunks";        // import the thunk


const TuitsList = () => {

  const { tuits, loading } = useSelector(state => state.tuits) // grab tuits and loading flag from reducer
  const dispatch = useDispatch();                              // on component load...
  useEffect(() => {
    dispatch(findTuitsThunk())                                 //...invoke find tuits thunk to fetch tuits and put them in the reducer's store so 
                                                               //we can extract them with useSelector() and render the tuits here
  }, [])
 
  return(
    <ul className="list-group col-auto">
        { loading &&                                        // if loading flag is true, then show loading message while
                                                            // data is still coming back from the server
            <li className="list-group-item">                
                Loading...
            </li>
        }

        { tuits.map(tuit =>
            <TuitItem
                key={tuit._id}
                tuit={tuit}/>)
        }
    </ul>
  );
};
export default TuitsList;