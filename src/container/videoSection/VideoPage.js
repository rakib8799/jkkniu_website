// import AOS from "aos";
import React from "react";
// import { useEffect } from "react";
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
                                        <Col md={6} xs={4}>
                                                <h4>
                                                        Visit Our Campus Life.
                                                        <br />
                                                        <span
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                You'll Love It
                                                        </span>
                                                </h4>
                                                <p className="text-lead text-justify">
                                                        Video shows the tour of
                                                        our JKKNIU campus. The
                                                        university has a duly
                                                        qualified and productive
                                                        band of youthful faculty
                                                        members and
                                                        officers/staffs who are
                                                        deeply committed to the
                                                        university's mission to
                                                        produce world class
                                                        graduates in academic
                                                        disciplines of arts,
                                                        social sciences, science
                                                        & engineering, and
                                                        business administration
                                                        - whose services and
                                                        dedications are urgently
                                                        needed for the
                                                        reconstruction of this
                                                        country.
                                                </p>
                                        </Col>
                                        <Col
                                                md={6}
                                                xs={6}
                                                className="player-wrapper"
                                        >
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
