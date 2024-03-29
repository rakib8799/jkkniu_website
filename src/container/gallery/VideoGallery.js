import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VideoGallery = () => {
        return (
                <Container>
                        <Row>
                                <Col className="mx-auto text-center mt-5 mb-3">
                                        <h1 style={{ color: "brown" }}>
                                                Videography
                                        </h1>
                                </Col>
                        </Row>
                        <Row>
                                <Col lg={4} sm={6} className="mx-auto">
                                        <iframe
                                                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                                                frameborder="1"
                                                allow="autoplay; encrypted-media"
                                                allowfullscreen
                                                title="video"
                                                className="video-frame"
                                        />
                                </Col>
                                <Col lg={4} sm={6} className="mx-auto">
                                        <iframe
                                                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                                                frameborder="1"
                                                allow="autoplay; encrypted-media"
                                                allowfullscreen
                                                title="video"
                                                className="video-frame"
                                        />
                                </Col>
                                <Col lg={4} sm={6} className="mx-auto">
                                        <iframe
                                                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                                                frameborder="1"
                                                allow="autoplay; encrypted-media"
                                                allowfullscreen
                                                title="video"
                                                className="video-frame"
                                        />
                                </Col>
                        </Row>
                </Container>
        );
};

export default VideoGallery;
