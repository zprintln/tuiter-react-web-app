import './App.css'; 
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";

import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes> 
          <h1>Welcome to Web Dev!</h1>
          <Route path="/"       element={<Navigate to="/labs"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"   element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );

}
export default App;
