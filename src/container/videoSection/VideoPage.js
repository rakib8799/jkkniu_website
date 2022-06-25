import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import jkkniu from "../../videos/JKKNIU.mp4";
import "./video.css";
// import CountUp from "react-countup";

const VideoPage = () => {
        return (
                <section style={{ background: "#fff" }}>
                        <Container fluid className="video-container">
                                <Row>
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
                                                                src={jkkniu}
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
