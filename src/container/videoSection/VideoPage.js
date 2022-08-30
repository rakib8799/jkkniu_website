import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
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
                                        <Col className="mt-5 mb-3 text-capitalize">
                                                <h1 className="text-center">
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
                                <Row className="video-row d-flex justify-content-center align-items-center">
                                        <Col xs={12} className="video-col">
                                                {/* <video
                                                        
                                                        loop
                                                        
                                                        controls
                                                >
                                                        <source
                                                                src={jkkniuVideo}
                                                                type="video/mp4"
                                                        ></source>
                                                </video> */}
                                                <ReactPlayer
                                                        // ref={(p) => {
                                                        //         this.p = p;
                                                        // }}
                                                        url={jkkniuVideo}
                                                        className="react-player"
                                                        playing
                                                        controls
                                                        loop
                                                        width="100%"
                                                        height="100%"
                                                />
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
