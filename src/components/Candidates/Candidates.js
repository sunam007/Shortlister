import React from "react";
import "./Candidates.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Candidates = (props) => {
  // console.log(props);
  const { age, balance, email, name, phone, picture, role } = props.candidate;
  return (
    <Card className="my-1 card-background" style={{ width: "15rem" }}>
      <Card.Img
        className="border rounded-circle w-50 mx-auto my-1"
        variant="top"
        src={picture}
      />
      <Card.Body className="h-50">
        <Card.Title>{name}</Card.Title>
        <Card.Text>Age: {age}</Card.Text>
        <Card.Text>
          Role: <br />
          <strong>{role}</strong>
        </Card.Text>
        <Card.Text>
          Salary: <strong>BDT {balance}</strong>{" "}
        </Card.Text>
        <Card.Text>{email}</Card.Text>
        <Card.Text>Cell: {phone}</Card.Text>
        <Button onClick={() => props.handleAddToShortlist(props.candidate)}>
          <i class="fa-solid fa-circle-plus"></i> Add to shortlist
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Candidates;
