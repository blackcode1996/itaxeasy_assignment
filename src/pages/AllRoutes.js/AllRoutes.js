import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Landing";
import Houserentallownace from "../Houserentallownace";
// import Incometax from "../Incometax";
import Howitworks from "../Howitworks";
import Incometax from "../Incometax";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/houserent" element={<Houserentallownace/>}/>
        <Route path="/incometax" element={<Incometax/>}/>
        <Route path="/howitworks" element={<Howitworks/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
