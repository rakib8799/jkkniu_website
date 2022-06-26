/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import course01 from "../../images/course01.jpeg";
// import "./message.css";
// import "../courses/courses.css";

const Notice = () => {
        const displayMessageCard = [
                {
                        notices: "বাংলাদেশের ৫০ বছর পূর্তিতে সেমিনার",
                        // image: "https://jkkniu.edu.bd/wp-content/uploads/Banner-Keynote-Speakers-First-InternationalConference-2022-JKKNIU.jpg",
                },
                {
                        notices: "REVISED ADMISSION NOTICE OF MBA(EVENING) PROGRAM (FALL-2021)",
                },
                {
                        notices: "MBA(EVENING) FALL-2021 APPLICATION FORM",
                },
                {
                        notices: "First International Conference on Humanities and Social Sciences, 14-15 June 2022",
                },
                {
                        notices: "Call for papers, Journal of Nazrul University",
                },
                {
                        notices: "MDS Admission Notice for Summer 2022",
                },
                {
                        notices: "২০২০-২১ শিক্ষাবর্ষে মাস্টার্স অব সায়েন্স এ নিয়মিত প্রোগ্রামে ভর্তির বিজ্ঞপ্তি",
                },
                {
                        notices: "শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস উদযাপন সংক্রান্ত বিজ্ঞপ্তি",
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
                                style={{ height: "30vh" }}
                        >
                                {/* <div className="img-container">
                                                <Card.Img
                                                        variant="top"
                                                        src={course01}
                                                        className="course-img"
                                                />
                                                <span className="course-item-icon">
                                                        <i className="fas fa-star"></i>
                                                </span>
                                        </div> */}
                                <Card.Body>
                                        <Card.Title>
                                                {course.notices}
                                        </Card.Title>
                                        <Card.Text>
                                                Published: 2022-06-06
                                        </Card.Text>
                                        <div className="">
                                                <Button
                                                        className="btn btn-optional position-absolute mb-3"
                                                        style={{ bottom: "0" }}
                                                >
                                                        View Notice
                                                </Button>
                                        </div>
                                </Card.Body>
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
                                                        Notice{" "}
                                                        <strong
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Board
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

export default Notice;
