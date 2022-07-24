import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import event01 from "../../images/events/event01.jpg";
import event02 from "../../images/events/event02.jpg";
import event03 from "../../images/events/event03.jpg";
import event04 from "../../images/events/event04.jpg";
import "./LEvents.css";
import "./message.css";

const LatestEvents = () => {
        const displayLatestEvents = [
                {
                        events: "First International Conference on Humanities and Social Sciences, 14-15 June 2022",
                        image: event01,
                },
                {
                        events: "শহীদ বুদ্ধিজীবি দিবস পালিত",
                        image: event02,
                },
                {
                        events: "ত্রিশাল মুক্ত দিবস পালিত",
                        image: event03,
                },
                {
                        events: "চলমান মুজিববর্ষ এবং স্বাধীনতার সুবর্ণজয়ন্তী উদযাপন উপলক্ষ্যে মাসব্যাপী অনুষ্ঠানমালা",
                        image: event04,
                },
        ].map((course, index) => (
                <Col
                        xs={10}
                        sm={6}
                        lg={4}
                        className="course-item mx-auto my-3 position-relative"
                        key={course + index}
                        data-aos="fade-up"
                >
                        <Card
                                className="course-card"
                                style={{
                                        height: "60vh",
                                        // background: "#444444",
                                }}
                        >
                                <div className="img-container">
                                        <Card.Img
                                                variant="top"
                                                src={course.image}
                                                className="course-img"
                                                style={{
                                                        height: "35vh",
                                                }}
                                        />
                                        <span className="course-item-icon">
                                                <i className="fas fa-star"></i>
                                        </span>
                                </div>
                                <Card.Body>
                                        <Card.Title>
                                                <Link
                                                        to="/events"
                                                        className="text-dark"
                                                >
                                                        {/* {course.events} */}
                                                        {course?.events.length <
                                                        57
                                                                ? course.events
                                                                : course?.events.slice(
                                                                          0,
                                                                          56
                                                                  ) + "..."}
                                                </Link>
                                        </Card.Title>
                                        {/* <Card.Text>
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                </Card.Text> */}
                                        <div className="">
                                                <Link to="/events">
                                                        <Button
                                                                className="btn btn-optional position-absolute mb-3"
                                                                style={{
                                                                        bottom: "0",
                                                                        top: "85%",
                                                                        right: "30%",
                                                                        left: "30%",
                                                                }}
                                                        >
                                                                View Event
                                                        </Button>
                                                </Link>
                                        </div>
                                </Card.Body>
                        </Card>
                </Col>
        ));

        return (
                <section
                        className="about py-5"
                        id="about"
                        style={{ backgroundColor: "#ffffff" }}
                >
                        <Container>
                                <Row>
                                        <Col className="mx-auto mt-5 text-capitalize text-center mb-3">
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
                </section>
        );
};

export default LatestEvents;
