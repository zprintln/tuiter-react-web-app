import React from "react";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "",
     "userName": "",
     "time": "",
     "title": ``,
     "image": ""
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
     <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2">
       <img width={70} height={70} className="float-end rounded-3" alt="tuit" src={`/images/${tuit.image}`}/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;

