import React from "react";
import Listcard from "../Listcard/Listcard";
import "./List.css";

const List = (props) => {
  let total = 0;
  for (let candidate of props.shortlist) {
    total += candidate.balance;
  }
  console.log(total);
  return (
    <div className="shortlist-container">
      <h4>
        Shortlisted Candidates:{" "}
        <span id="shortlist-total">{props.shortlist.length}</span>
      </h4>
      <h4> Total Monthly Salary: {total} BDT</h4>
      <div className="shortlisted-candidates">
        {props.shortlist.map((candidate) => (
          <Listcard key={candidate._id} candidate={candidate}></Listcard>
        ))}
      </div>
    </div>
  );
};

export default List;
