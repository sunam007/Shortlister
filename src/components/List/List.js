import React from "react";
import Listcard from "../Listcard/Listcard";
import "./List.css";

const List = (props) => {
  // const { name } = props.shortlist;
  return (
    <div className="shortlist-container">
      <h2>
        Total shortlisted candidates:{" "}
        <span id="shortlist-total">{props.shortlist.length}</span>
      </h2>
      <div className="shortlisted-candidates">
        {props.shortlist.map((candidate) => (
          <Listcard key={candidate._id} candidate={candidate}></Listcard>
        ))}
      </div>
      {/* <Listcard></Listcard> */}
    </div>
  );
};

export default List;
