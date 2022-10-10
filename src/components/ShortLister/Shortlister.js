import React, { useEffect, useState } from "react";
import Candidates from "../Candidates/Candidates";
import List from "../List/List";
import "./Shortlister.css";

const Shortlister = () => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    fetch("./candidates.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setCandidates(data);
        }
      });
  }, []);
  console.log(candidates);
  return (
    <div className="shortlister-components-container">
      <Candidates></Candidates>
      <List></List>
    </div>
  );
};

export default Shortlister;
