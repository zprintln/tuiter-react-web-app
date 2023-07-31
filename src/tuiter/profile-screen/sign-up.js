import {Link, useNavigate}

  from "react-router-dom";

 

function SignUp () {

 

 const nav = useNavigate();

  const signUp = () => {

   // signup with server tbd

   // go to profile if success

   nav('/profile')

  }

 return(

  <div>

   <h1>Sign Up</h1>

     ...

   <button onClick={signUp}

           className="btn

                 btn-primary">

       Sign Up</button>

   <Link to="/signin">

        Sign In</Link>

  </div>

 )

}

export default SignUp;