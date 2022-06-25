/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import LatestEvents from "./LatestEvents";
import "./message.css";
// import "../courses/courses.css";

class Message extends Component {
        constructor(props) {
                super(props);
                this.marquee = React.createRef();
        }
        render() {
                const displayMessageCard = [
                        "card01",
                        "card02",
                        "card03",
                        "card04",
                        "card05",
                        "card06",
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
                        <section id="messages">
                                <Container
                                        fluid
                                        className="message-container my-3"
                                >
                                        <Row>
                                                <Col className="mx-auto my-3 text-center text-capitalize">
                                                        <h1>
                                                                Latest{" "}
                                                                <strong
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        News
                                                                </strong>
                                                        </h1>
                                                        <div className="latest-news">
                                                                <marquee
                                                                        ref={
                                                                                this
                                                                                        .marquee
                                                                        }
                                                                        onMouseEnter={() =>
                                                                                this
                                                                                        .marquee &&
                                                                                this
                                                                                        .marquee
                                                                                        .current &&
                                                                                this.marquee.current.stop()
                                                                        }
                                                                        onMouseLeave={() =>
                                                                                this
                                                                                        .marquee &&
                                                                                this
                                                                                        .marquee
                                                                                        .current &&
                                                                                this.marquee.current.start()
                                                                        }
                                                                >
                                                                        <p>
                                                                                <a
                                                                                        href="/notification"
                                                                                        className="marq-a"
                                                                                >
                                                                                        We
                                                                                        are
                                                                                        coming
                                                                                        soon
                                                                                        with
                                                                                        bunch
                                                                                        of
                                                                                        surprises
                                                                                </a>
                                                                                <i
                                                                                        class="fas fa-certificate"
                                                                                        style={{
                                                                                                marginRight:
                                                                                                        "2rem",
                                                                                                marginLeft: "10px",
                                                                                        }}
                                                                                ></i>
                                                                                <a
                                                                                        href="/notification"
                                                                                        className="marq-a"
                                                                                >
                                                                                        We
                                                                                        are
                                                                                        coming
                                                                                        soon
                                                                                        with
                                                                                        bunch
                                                                                        of
                                                                                        surprises
                                                                                </a>
                                                                                <i
                                                                                        class="fas fa-certificate"
                                                                                        style={{
                                                                                                marginRight:
                                                                                                        "2rem",
                                                                                                marginLeft: "10px",
                                                                                        }}
                                                                                ></i>
                                                                                <a
                                                                                        href="/notification"
                                                                                        className="marq-a"
                                                                                >
                                                                                        We
                                                                                        are
                                                                                        coming
                                                                                        soon
                                                                                        with
                                                                                        bunch
                                                                                        of
                                                                                        surprises
                                                                                </a>
                                                                                <i
                                                                                        class="fas fa-certificate"
                                                                                        style={{
                                                                                                marginRight:
                                                                                                        "2rem",
                                                                                                marginLeft: "10px",
                                                                                        }}
                                                                                ></i>
                                                                                <a
                                                                                        href="/notification"
                                                                                        className="marq-a"
                                                                                >
                                                                                        We
                                                                                        are
                                                                                        coming
                                                                                        soon
                                                                                        with
                                                                                        bunch
                                                                                        of
                                                                                        surprises
                                                                                </a>
                                                                                <i
                                                                                        class="fas fa-certificate"
                                                                                        style={{
                                                                                                marginRight:
                                                                                                        "2rem",
                                                                                                marginLeft: "10px",
                                                                                        }}
                                                                                ></i>
                                                                        </p>
                                                                </marquee>
                                                        </div>
                                                </Col>
                                        </Row>
                                        <Row className="mx-3 main-row">
                                                {displayMessageCard}
                                        </Row>
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
                                <LatestEvents />
                        </section>
                );
        }
}

export default Message;
