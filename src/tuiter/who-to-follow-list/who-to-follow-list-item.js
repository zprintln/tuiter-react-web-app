import React from "react";
const WhoToFollowListItem = (
{
    who = { userName: '', handle: '', avatarIcon: '' }
}
) => {
return(

    <li className="list-group-item">
        <div className="row">
            <div className="col-3">
            <img className="rounded-circle" alt="profile pic" height={48} width={48} src={`/images/${who.avatarIcon}`}/>
            </div>
            <div className="col-6 float-start">
            <div className="fw-bold">{who.userName}</div>
            <div>@{who.handle}</div>
            </div>
            <div className="col-3">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
            </div>
        </div>
     </li>

 );
};
export default WhoToFollowListItem;