import React from "react";

import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ( {tuit} ) => {

    const dispatch = useDispatch();

    // Shorten long numbers: 1465 = 1.4K
    const shortenNum = (num) => {
        return num > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : num
    }

    return(
        <div className="row">
            <div className="col">
                <i className="bi bi-chat"></i> &nbsp;
                {shortenNum(tuit.replies)}
            </div>

             <div className="col">
                <i className={`bi ${tuit.retuited === true ? "bi-recycle text-primary" : "bi-recycle"}`}   
                    onClick={() => dispatch(updateTuitThunk({ ...tuit, retuited: true, retuits: tuit.retuits + 1}))}></i> &nbsp;
                {shortenNum(tuit.retuits)}
            </div>

            <div className="col">
                <i className={`bi ${tuit.liked === true ? "bi-heart-fill text-danger" : "bi-heart"}`}
                    onClick={() => dispatch(updateTuitThunk({ ...tuit, liked: true, likes: tuit.likes + 1}))}></i> &nbsp;
                {shortenNum(tuit.likes)}
            </div>

            <div className="col">
                <i className={`bi ${tuit.liked === false && tuit.dislikes !== 0? "bi-hand-thumbs-down-fill text-primary" : "bi-hand-thumbs-down"}`}
                    onClick={() => dispatch(updateTuitThunk({ ...tuit, liked: false, dislikes: tuit.dislikes + 1}))}></i> &nbsp;
                {shortenNum(tuit.dislikes)}
            </div>

            <div className="col-2">
                <i class="bi bi-share"></i> &nbsp;
            </div>
        </div>
    )
}

export default TuitStats;