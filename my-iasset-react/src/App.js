import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/features/home/home';
import Borrow from '../src/components/features/userManage/borrow/borrow'
import Return from '../src/components/features/userManage/return/return'
import CrudUser from "./components/features/settingAdmin/crudUser/crudUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
          </div>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/return" element={<Return />} />
        <Route path="/userCreate" element={<CrudUser />} />
      </Routes>
    </Router>
  );
}

export default App;
