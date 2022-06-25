/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import LatestEvents from "./LatestEvents";
import "./message.css";
// import "../courses/courses.css";

class Message extends Component {
        // constructor(props) {
        //         super(props);
        //         this.marquee = React.createRef();
        // }
        render() {
                const displayMessageCard = [
                        {
                                newsTitle: "First International Conference on Humanities and Social Sciences, 14-15 June 2022",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/Banner-Keynote-Speakers-First-InternationalConference-2022-JKKNIU.jpg",
                        },
                        {
                                newsTitle: "জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়উপাচার্য পদে প্রফেসর ড. সৌমিত্র শেখর দে’র যোগদান...",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/Final-PP.jpg",
                        },
                        {
                                newsTitle: "শহীদ বুদ্ধিজীবি দিবস পালিত",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/IMG_5857-scaled.jpg",
                        },
                        {
                                newsTitle: "শহীদ বুদ্ধিজীবি দিবস-2021",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/111-1.jpg",
                        },
                        {
                                newsTitle: "ত্রিশাল মুক্ত দিবস পালিত",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/IMG_5083-scaled.jpg",
                        },
                        {
                                newsTitle: "চলমান মুজিববর্ষ এবং স্বাধীনতার সুবর্ণজয়ন্তী উদযাপন উপলক্ষ্যে মাসব্যাপী অনুষ্ঠানমালা",
                                image: "https://jkkniu.edu.bd/wp-content/uploads/261746853_332401974973280_9022559356421836173_n.jpg",
                        },
                ].map((news, index) => (
                        <Col
                                xs={10}
                                sm={6}
                                lg={4}
                                className="course-item mx-auto my-3"
                                key={news + index}
                                data-aos="fade-up"
                        >
                                <Card className="course-card">
                                        <div className="img-container">
                                                <Card.Img
                                                        variant="top"
                                                        src={news.image}
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
                                                        {news.newsTitle}
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
                                                                View Full News
                                                        </Button>
                                                </div>
                                        </Card.Body>
                                </Card>
                        </Col>
                ));

                return (
                        <section id="messages">
                                <Container className="message-container">
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
                                                        {/* <div className="latest-news">
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
                                                        </div> */}
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
