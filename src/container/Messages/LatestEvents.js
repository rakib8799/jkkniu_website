import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./LEvents.css";
import course01 from "../../images/course01.jpeg";

class LatestEvents extends Component {
        render() {
                const displayLatestEvents = [
                        "event01",
                        "event02",
                        "event03",
                        "event04",
                ].map((course, index) => (
                        <Col
                                xs={10}
                                sm={6}
                                lg={4}
                                className="course-item mx-auto my-3"
                                key={course + index}
                                data-aos="fade-up"
                        >
                                <Card className="course-card">
                                        <div className="img-container">
                                                <Card.Img
                                                        variant="top"
                                                        src={course01}
                                                        className="course-img"
                                                />
                                                <span className="course-item-icon">
                                                        <i className="fas fa-star"></i>
                                                </span>
                                        </div>
                                        <Card.Body>
                                                <Card.Title>
                                                        Card Title
                                                </Card.Title>
                                                <Card.Text>
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                </Card.Text>
                                                <div className="text-center">
                                                        <Button className="btn btn-optional text-center">
                                                                Register
                                                        </Button>
                                                </div>
                                        </Card.Body>
                                </Card>
                        </Col>
                ));

                return (
                        <Container fluid>
                                <Row>
                                        <Col className="mx-auto mt-5 text-capitalize text-center mb-5">
                                                <h1>
                                                        Latest{" "}
                                                        <strong
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Events
                                                        </strong>
                                                </h1>
                                        </Col>
                                </Row>
                                <Row>{displayLatestEvents}</Row>
                                <Row>
                                        <Col className="mx-auto text-center">
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
                );
        }
}

export default LatestEvents;
