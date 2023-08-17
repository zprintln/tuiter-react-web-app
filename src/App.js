import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {

  return (
    <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/tuiter" />} />
            <Route path="/labs/*" element={<Labs />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/tuiter/*" element={<Tuiter />} />
          </Routes>
        </div>
    </BrowserRouter>
  );

}
export default App;
