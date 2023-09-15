import "./App.css";
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Table from "./components/table";
import Add from "./components/Add";
import Edit from "./components/Edit";
function App() {
  return(
   <div className="App">
      <Routes>
       <Route path="/contact/view" element={<Table/>}/>
       <Route path="/contact/add" element={<Add/>}/>
       <Route path="/contact/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}
export default App;