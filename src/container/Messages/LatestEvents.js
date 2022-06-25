import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./LEvents.css";

class LatestEvents extends Component {
        render() {
                const displayLatestEvents = [
                        {
                                events: "First International Conference on Humanities and Social Sciences, 14-15 June 2022",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/Banner-Keynote-Speakers-First-InternationalConference-2022-JKKNIU.jpg",
                        },
                        {
                                events: "শহীদ বুদ্ধিজীবি দিবস পালিত",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/IMG_5857-scaled.jpg",
                        },
                        {
                                events: "ত্রিশাল মুক্ত দিবস পালিত",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/IMG_5083-scaled.jpg",
                        },
                        {
                                events: "চলমান মুজিববর্ষ এবং স্বাধীনতার সুবর্ণজয়ন্তী উদযাপন উপলক্ষ্যে মাসব্যাপী অনুষ্ঠানমালা",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/261746853_332401974973280_9022559356421836173_n.jpg",
                        },
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
                                                        {course.events}
                                                </Card.Title>
                                                {/* <Card.Text>
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                </Card.Text> */}
                                                <div className="text-center">
                                                        <Button className="btn btn-optional text-center">
                                                                View details
                                                                events
                                                        </Button>
                                                </div>
                                        </Card.Body>
                                </Card>
                        </Col>
                ));

                return (
                        <Container>
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
