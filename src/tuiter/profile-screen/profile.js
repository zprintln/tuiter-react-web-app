import {Link, useNavigate}

  from "react-router-dom";

 

function Profile () {

 

 const nav = useNavigate();

 const logout = () => {

   // logout from server tbd

   nav('/signin');

 }

 

 return(

   <div className="w-50">

     <h1>Profile</h1>

      ...

     <button onClick={logout}

             className="btn

                  btn-danger">

       Logout</button>

     <Link to="/home">

           Home</Link>

   </div>

 )

}

export default Profile;