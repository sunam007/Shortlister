import React from "react";
import "./List.css";

const List = (props) => {
  console.log(props);
  const { name } = props.shortlist;
  return (
    <div className="shortlist-container">
      <h2>
        Total shortlisted candidates:{" "}
        <span id="shortlist-total">{props.shortlist.length}</span>
      </h2>
      <div className="shortlisted-candidates">
        {props.shortlist.map((candidate) => (
          <li key={candidate._id}>{candidate.name}</li>
        ))}
      </div>
    </div>
  );
};

export default List;
