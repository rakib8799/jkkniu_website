/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import LatestEvents from "./LatestEvents";
import news01 from "../../images/news/news01.jpg";
import news02 from "../../images/news/news02.jpg";
import news03 from "../../images/news/news03.jpg";
import news04 from "../../images/news/news04.jpg";
import news05 from "../../images/news/news05.jpg";
import news06 from "../../images/news/news06.jpg";

import "./message.css";
import { Link } from "react-router-dom";
// import "../courses/courses.css";

const Message = () => {
        // constructor(props) {
        //         super(props);
        //         this.marquee = React.createRef();
        // }
        const displayMessageCard = [
                {
                        newsTitle: "First International Conference on Humanities and Social Sciences, 14-15 June 2022",
                        image: news01,
                },
                {
                        newsTitle: "নজরুল চর্চা করতে হবে আমাদের ঘর থেকে, পরিবার থেকে : উপাচার্য",
                        image: news02,
                },
                {
                        newsTitle: "শহীদ বুদ্ধিজীবি দিবস পালিত",
                        image: news03,
                },
                {
                        newsTitle: "শহীদ বুদ্ধিজীবি দিবস-2021",
                        image: news04,
                },
                {
                        newsTitle: "ত্রিশাল মুক্ত দিবস পালিত",
                        image: news05,
                },
                {
                        newsTitle: "চলমান মুজিববর্ষ এবং স্বাধীনতার সুবর্ণজয়ন্তী উদযাপন উপলক্ষ্যে মাসব্যাপী অনুষ্ঠানমালা",
                        image: news06,
                },
        ].map((news, index) => (
                <Col
                        xs={10}
                        sm={6}
                        lg={4}
                        className="course-item mx-auto my-3 position-relative"
                        key={news + index}
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
                                                src={news.image}
                                                className="course-img"
                                                style={{
                                                        // objectFit: "contain",
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
                                                        to="/news"
                                                        className="text-dark"
                                                >
                                                        {/* {news.newsTitle} */}
                                                        {news?.newsTitle
                                                                .length < 57
                                                                ? news.newsTitle
                                                                : news?.newsTitle.slice(
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
                                                <Link to="/news">
                                                        <Button
                                                                className="btn btn-optional position-absolute mb-3"
                                                                style={{
                                                                        bottom: "0",
                                                                        top: "85%",
                                                                        right: "30%",
                                                                        left: "30%",
                                                                }}
                                                        >
                                                                View News
                                                        </Button>
                                                </Link>
                                        </div>
                                </Card.Body>
                        </Card>
                </Col>
        ));

        return (
                <section id="messages">
                        <Container className="message-container">
                                {/* <h2>amo</h2> */}
                                <Row className="">
                                        <Col className="mx-auto mt-5 mb-3 text-center text-capitalize">
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
                                        </Col>
                                </Row>
                                <Row className="main-row">
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
};

export default Message;
