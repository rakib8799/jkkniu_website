/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import course01 from "../../images/course01.jpg";
// import "./message.css";
// import "../courses/courses.css";

const Journals = () => {
        const displayMessageCard = [
                {
                        notices: "Science Faculty Journal",
                        description: "Science Faculty",
                        // image: "https://jkkniu.edu.bd/wp-content/uploads/Banner-Keynote-Speakers-First-InternationalConference-2022-JKKNIU.jpg",
                },
                {
                        notices: "JKKNIU Journal of Computer Science and Engineering",
                        description:
                                "Computer Science and Engineering Department",
                },
                {
                        notices: "JKKNIU Journal of Electrical And Electronics Engineering",
                        description:
                                "Electrical And Electronics Engineering Department",
                },
                {
                        notices: "Arts Faculty Journal",
                        description: "Arts Faculty",
                },
                {
                        notices: "JKKNIU Journal of English",
                        description: "English Department",
                },
                {
                        notices: "Fine Arts Faculty Journal",
                        description: "Fine Arts Faculty",
                },
                {
                        notices: "JKKNIU Journal of Fine Arts",
                        description: "Fine Arts Department",
                },

                {
                        notices: "Business Faculty Journal",
                        description: "Business Faculty",
                },
        ].map((course, index) => (
                <Col
                        xs={10}
                        className="course-item mx-auto my-3 position-relative"
                        key={course + index}
                        data-aos="fade-up"
                >
                        <Card
                                className="journal-card"
                                style={{ height: "auto" }}
                        >
                                <div className="d-flex">
                                        <img
                                                src={course01}
                                                alt=""
                                                style={{ width: "30%" }}
                                        />
                                        <Card.Body>
                                                <Card.Title>
                                                        {course.notices}
                                                </Card.Title>
                                                <Card.Text>
                                                        <div>
                                                                Date: 2022-06-06
                                                        </div>
                                                        <div>
                                                                {`Published by the
                                                                ${course.description},
                                                                Jatiya Kabi Kazi
                                                                Nazrul Islam
                                                                University. Full
                                                                text articles
                                                                available.`}
                                                        </div>
                                                </Card.Text>
                                                <div className="">
                                                        <Link
                                                                to={`/journals/${course.notices}`}
                                                        >
                                                                <Button
                                                                        className="btn btn-optional position-absolute mb-3"
                                                                        style={{
                                                                                bottom: "0",
                                                                        }}
                                                                >
                                                                        View
                                                                        Journal
                                                                </Button>
                                                        </Link>
                                                        {/* <Button
                                                        className="btn btn-optional position-absolute mb-3"
                                                        style={{
                                                                bottom: "0",
                                                                right: "50%",
                                                                left: "40%",
                                                        }}
                                                >
                                                        Current Issue
                                                </Button>
                                                <Button
                                                        className="btn btn-optional position-absolute mb-3"
                                                        style={{
                                                                bottom: "0",
                                                                right: "65%",
                                                                left: "15%",
                                                        }}
                                                >
                                                        Register
                                                </Button> */}
                                                </div>
                                        </Card.Body>
                                </div>
                        </Card>
                </Col>
        ));

        return (
                <section style={{ background: "#fff" }} className="pt-5">
                        <Container
                                fluid
                                // className="message-container my-3"
                        >
                                <Row>
                                        <Col className="mx-auto my-3 text-center text-capitalize">
                                                <h1>
                                                        JKKNIU{" "}
                                                        <strong
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Journals
                                                        </strong>
                                                </h1>
                                        </Col>
                                </Row>
                                <Row className="mx-3 main-row">
                                        {displayMessageCard}
                                </Row>
                                <Row>
                                        <Col className="mx-auto text-center my-3">
                                                <Button
                                                        className="btn btn-main"
                                                        style={{
                                                                margin: "20px 0",
                                                        }}
                                                >
                                                        View More
                                                </Button>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        );
};

export default Journals;
