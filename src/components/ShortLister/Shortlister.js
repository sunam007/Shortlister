import React, { useEffect, useState } from "react";
import Candidates from "../Candidates/Candidates";
import List from "../List/List";
import "./Shortlister.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Shortlister = () => {
  const [candidates, setCandidates] = useState([]);
  const [shortlist, setShortlist] = useState([]);
  useEffect(() => {
    fetch("./candidates.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setCandidates(data);
        }
      });
  }, []);
  const handleAddToShortlist = (candidate) => {
    // console.log(candidate.name);
    const newShortlist = [...shortlist, candidate];
    setShortlist(newShortlist);
  };
  // console.log(shortlist);

  return (
    <Container className="my-3 ">
      <Row>
        <Col
          className="d-flex flex-wrap justify-content-evenly order-lg-1 order-2"
          xs={12}
          lg={9}
        >
          {candidates.map((candidate) => (
            <Candidates
              key={candidate._id}
              candidate={candidate}
              handleAddToShortlist={handleAddToShortlist}
            ></Candidates>
          ))}
        </Col>
        <Col className="order-lg-2 mx-auto order-1" xs={8} lg={3}>
          <List shortlist={shortlist}></List>
        </Col>
      </Row>
    </Container>
  );
};

export default Shortlister;
