import React from "react";
import("./Listcard.css");

const Listcard = (props) => {
  //   console.log(props.candidate.name);
  const { picture, name, balance, role } = props.candidate;
  return (
    <div className="card-container">
      <img src={picture} alt="" />
      <div className="card-deatails">
        <h5>{name}</h5>
        <p>{role}</p>
        <p>Salary: BDT {balance}</p>
        <button className="confirm-btn">Confirm</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default Listcard;
