import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import jkkniu from "../../videos/JKKNIU.mp4";
import "./video.css";
// import CountUp from "react-countup";

const VideoPage = () => {
        return (
                <section
                        style={{ background: "#fff" }}
                        className="d-flex justify-content-center"
                >
                        <Container className="video-container">
                                <Row className="">
                                        <Col className="mx-auto mt-5 mb-3 text-center text-capitalize">
                                                <h1>
                                                        Our{" "}
                                                        <strong
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Campus
                                                        </strong>
                                                </h1>
                                        </Col>
                                </Row>
                                <Row className="video-row">
                                        <Col
                                                xs={10}
                                                className="mx-auto video-col"
                                        >
                                                <video
                                                        autoPlay
                                                        loop
                                                        muted
                                                        // controls
                                                >
                                                        <source
                                                                src="https://res.cloudinary.com/mkrakib/video/upload/v1656417010/JKKNIU_Images/JKKNIU_hjxnqx.mp4"
                                                                type="video/mp4"
                                                        ></source>
                                                </video>
                                                {/* <div className="video-text">
                                                                <p>
                                                                        OUR
                                                                        CAMPUS
                                                                </p>
                                                        </div> */}
                                        </Col>
                                </Row>
                        </Container>
                </section>
        );
};

export default VideoPage;
