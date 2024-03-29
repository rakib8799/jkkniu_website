import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./Data";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

class PhotoGallery extends Component {
        constructor(props) {
                super(props);

                this.state = {
                        imageData: IMAGES.slice(0, 10),
                };
        }

        render() {
                return (
                        <section
                                // id="gallary"
                                style={{ backgroundColor: "#fff" }}
                        >
                                <Container className="message-container">
                                        <Row>
                                                <Col className="mx-auto mb-3 text-center text-capitalize">
                                                        <h1>
                                                                University{" "}
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
                                        <Gallery
                                                images={this.state.imageData}
                                                style={{ minWidth: "20vw" }}
                                        />
                                        {/* <div className="text-center">
                                                <Button
                                                        variant="danger"
                                                        data-aos="zoom-in"
                                                        style={{
                                                                margin: "20px 0",
                                                                color: "#fff",
                                                        }}
                                                        className=" btn-gallery"
                                                >
                                                        <Link to="/gallery">
                                                                View More
                                                        </Link>
                                                </Button>
                                        </div> */}
                                        <Row>
                                                <Col className="mx-auto text-center my-3">
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
                        </section>
                );
        }
}

export default PhotoGallery;
