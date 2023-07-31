import {Link, useNavigate}

  from "react-router-dom";

 

function SignIn () {

 const username = 'alice';

 const nav = useNavigate();

 const signIn = () => {

    /* signin to server tbd */

     navigate('/profile');

    }


 return(

  <div>

   <h1>Sign In</h1>

    ...

   <button onClick={signIn}

           className="btn

                 btn-primary">

       Sign In</button>

     <Link to="/signup">

          Sign Up</Link>

   </div>

 )

}

export default SignIn;