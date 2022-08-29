import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import jkkniuVideo from "../../video/স্বপ্নের নজরুল বিশ্ববিদ্যালয়ে ভর্তি নিয়ে উপাচার্যের দিকনির্দেশনা _ Kazi Nazrul Islam University, MYM.mp4";
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
                                                        
                                                        loop
                                                        
                                                        controls
                                                >
                                                        <source
                                                                src={jkkniuVideo}
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
