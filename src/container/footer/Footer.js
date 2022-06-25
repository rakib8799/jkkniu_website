import React, { Component } from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import college from "../../images/clogo.png";
import "./footer.css";
// import MapContainer from "./MapContainer";

export class Footer extends Component {
        render() {
                return (
                        <footer
                                className="site-footer"
                                id="contact"
                                style={{
                                        background: "linear-gradient(to right,#137e60,#4dddb4)",
                                }}
                        >
                                <Container fluid>
                                        {/* <Row>
                                                <MapContainer />
                                        </Row> */}
                                        <Row>
                                                <Col
                                                        sm={6}
                                                        md={4}
                                                        data-aos="fade-right"
                                                        className="mx-auto  d-flex justify-content-start align-items-center flex-column flex-wrap mt-3"
                                                >
                                                        <Image
                                                                src={college}
                                                                fluid
                                                                // style={{
                                                                //         width: "20vw",
                                                                // }}
                                                        />
                                                        <h4 className="mt-3 text-center">
                                                                Nazrul
                                                                University
                                                        </h4>
                                                </Col>
                                                <Col
                                                        sm={6}
                                                        md={4}
                                                        data-aos="fade-left"
                                                        className="d-flex mt-3 justify-content-start  flex-column flex-wrap"
                                                >
                                                        <h3 className="mb-2 text-capitalize text-start">
                                                                contact us
                                                        </h3>
                                                        <div
                                                                className="justify-content-start align-items-center flex-column"
                                                                style={{
                                                                        borderTop: "2px solid green",
                                                                        paddingTop: "0.5rem",
                                                                }}
                                                        >
                                                                <p class="d-flex flex-wrap">
                                                                        <span class="mr-4 footer-icon">
                                                                                <i class="fas fa-map"></i>
                                                                        </span>
                                                                        <span>
                                                                                Trishal,
                                                                                Mymensingh,
                                                                                Bangladesh
                                                                        </span>
                                                                </p>
                                                                <p class="d-flex flex-wrap">
                                                                        <span class="mr-4 footer-icon">
                                                                                <i class="fas fa-phone"></i>
                                                                        </span>
                                                                        <span>
                                                                                09032-56212,
                                                                                56214,
                                                                                56217,
                                                                                56245,
                                                                                56247,
                                                                                56248
                                                                        </span>
                                                                </p>
                                                                <p class="d-flex flex-wrap">
                                                                        <span class="mr-4 footer-icon">
                                                                                <i class="fas fa-envelope"></i>
                                                                        </span>
                                                                        <span>
                                                                                09032-56270
                                                                        </span>
                                                                </p>
                                                        </div>
                                                </Col>
                                                <Col
                                                        sm={6}
                                                        md={4}
                                                        data-aos="fade-left"
                                                        className="mx-auto mt-3 d-flex justify-content-start  flex-column flex-wrap"
                                                >
                                                        <h3 className="mb-2">
                                                                QUICK LINKS
                                                        </h3>

                                                        <div
                                                                style={{
                                                                        borderTop: "2px solid green",
                                                                        paddingTop: "0.5rem",
                                                                }}
                                                        >
                                                                <Nav className="mx-auto">
                                                                        <Link to="/">
                                                                                <Nav.Link href="#notice">
                                                                                        Notice
                                                                                        Board
                                                                                </Nav.Link>
                                                                        </Link>
                                                                        <Link to="/">
                                                                                <Nav.Link href="#contact">
                                                                                        Contact
                                                                                        Us
                                                                                </Nav.Link>
                                                                        </Link>
                                                                </Nav>
                                                        </div>
                                                </Col>
                                        </Row>
                                        <hr />
                                </Container>
                                <Container>
                                        <Row>
                                                <Col md={6} sm={6} xs={12}>
                                                        <p class="copyright-text">
                                                                Copyright &copy;
                                                                {new Date().getFullYear()}{" "}
                                                                All Rights
                                                                Reserved by
                                                                <a href="#copyright">
                                                                        {" "}
                                                                        Company
                                                                </a>
                                                                .
                                                        </p>
                                                </Col>
                                                <Col md={4} sm={4} xs={12}>
                                                        <ul class="social-icons">
                                                                <li>
                                                                        <a
                                                                                class="facebook"
                                                                                href="#fb"
                                                                        >
                                                                                <i class="fab fa-facebook-f"></i>
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a
                                                                                class="twitter"
                                                                                href="#twitter"
                                                                        >
                                                                                <i class="fab fa-twitter"></i>
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a
                                                                                class="dribbble"
                                                                                href="#dribble"
                                                                        >
                                                                                <i class="fab fa-dribbble"></i>
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a
                                                                                class="linkedin"
                                                                                href="#linkedin"
                                                                        >
                                                                                <i class="fab fa-linkedin-in"></i>
                                                                        </a>
                                                                </li>
                                                        </ul>
                                                </Col>
                                                <Col md={2} sm={2} xs={2}>
                                                        <div>
                                                                <ScrollToTop
                                                                        smooth
                                                                />
                                                        </div>
                                                </Col>
                                        </Row>
                                </Container>
                        </footer>
                );
        }
}

export default Footer;
