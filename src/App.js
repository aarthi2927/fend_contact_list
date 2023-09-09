import "./App.css";
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Table from "./components/table";

function App() {
  return(
   <div className="App">

      <Routes>
       <Route path="/contact/view" element={<Table/>}/>
      </Routes>
    </div>
  );
}
export default App;