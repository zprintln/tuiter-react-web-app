import React, {useRef} from "react";

import {Outlet, useNavigate} from "react-router-dom";

 

function Calculator() {

 const aRef = useRef(0);

 const bRef = useRef(0);

 const nav = useNavigate();

 const calc = (op) => {

  nav(`/calc/${op}/

       ${aRef.current.value}/

       ${bRef.current.value}`)

 }

 return(

  <>

   <h1>Calculator</h1>

   <input ref={aRef}

          className="form-control w-50"/>

   <input ref={bRef}

          className="form-control w-50"/>

   <button className="btn btn-warning w-25"

           onClick={() => {calc('add')}}>

           +</button>

   <button className="btn btn-primary w-25"

           onClick={() => {calc('sub')}}>

           -</button><br/>

   <Outlet/>

  </>

 )

}

export default Calculator;