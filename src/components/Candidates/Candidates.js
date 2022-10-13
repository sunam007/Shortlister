import React from "react";
import "./Candidates.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Candidates = (props) => {
  // console.log(props.candidate);
  const { balance, email, name, phone, picture, role, skills } =
    props.candidate;
  console.log(skills);
  const [skill1, skill2, skill3, skill4] = skills;

  return (
    <Card className="my-1 mx-1 card-background" style={{ width: "15rem" }}>
      <Card.Img
        className="profile-pic mx-auto my-1"
        variant="top"
        src={picture}
      />
      <Card.Body className="h-50">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>{role}</strong>
        </Card.Text>
        <Card.Text>
          Skills:{" "}
          <strong>
            {skill1}, {skill2}, {skill3}, {skill4}
          </strong>
        </Card.Text>
        <Card.Text>
          Salary: <strong>BDT {balance}</strong>{" "}
        </Card.Text>
        <Card.Text>{email}</Card.Text>
        <Card.Text>Cell: {phone}</Card.Text>
        <Button onClick={() => props.handleAddToShortlist(props.candidate)}>
          <i className="fa-solid fa-circle-plus"></i> Add to shortlist
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Candidates;
