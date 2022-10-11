import React, { useEffect, useState } from "react";
import Candidates from "../Candidates/Candidates";
import List from "../List/List";
import "./Shortlister.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  const handleAddToShortlist = () => {};

  return (
    <Container className="my-3">
      <Row>
        <Col
          className="d-flex d-flex justify-content-evenly flex-wrap gap-1"
          xs={12}
          sm={8}
        >
          {candidates.map((candidate) => (
            <Candidates key={candidate._id} candidate={candidate}></Candidates>
          ))}
        </Col>
        <Col xs={6} sm={4}>
          <List></List>
        </Col>
      </Row>
    </Container>
  );
};

export default Shortlister;
