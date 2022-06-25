import React from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./Data";
import { Container, Row, Col } from "react-bootstrap";
import VideoGallery from "./VideoGallery";

const FullGallery = () => {
        // const [state, setState] = useState({});
        // const updateState = () => {
        //         setState({
        //                 imageData: IMAGES,
        //         });
        // };
        return (
                <section id="gallary" style={{ backgroundColor: "#fff" }}>
                        <Container fluid className="message-container">
                                <Row>
                                        <Col className="mx-auto my-3 text-center text-capitalize">
                                                <h1>
                                                        <strong
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Gallery
                                                        </strong>
                                                </h1>
                                        </Col>
                                </Row>
                                <Gallery images={IMAGES} />
                        </Container>
                        <VideoGallery />
                </section>
        );
};

export default FullGallery;
