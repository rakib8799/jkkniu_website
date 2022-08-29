import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import footerPic from "../../images/footer.jpg";
import "./footer.css";
// import MapContainer from "./MapContainer";

const Footer = () => {
        return (
                <footer
                        className="site-footer text-white"
                        id="contact"
                        style={{
                                // background: "linear-gradient(to right,#137e60,#4dddb4)",
                                background: "linear-gradient(to right,#025C53,#4dddb4)",
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
                                                        src={footerPic}
                                                        fluid
                                                        // style={{
                                                        //         width: "20vw",
                                                        // }}
                                                />
                                                <h4 className="mt-3 text-center">
                                                        Jatiya Kabi Kazi Nazrul
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
                                                                borderTop: "2px solid brown",
                                                                paddingTop: "0.5rem",
                                                        }}
                                                >
                                                        <p className="d-flex flex-wrap">
                                                                <span className="mr-4 footer-icon">
                                                                        <i className="fas fa-map"></i>
                                                                </span>
                                                                <span>
                                                                        Trishal,
                                                                        Mymensingh,
                                                                        Bangladesh
                                                                </span>
                                                        </p>
                                                        <p className="d-flex flex-wrap">
                                                                <span className="mr-4 footer-icon">
                                                                        <i className="fas fa-phone"></i>
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
                                                        <p className="d-flex flex-wrap">
                                                                <span className="mr-4 footer-icon">
                                                                        <i className="fas fa-envelope"></i>
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
                                                                borderTop: "2px solid brown",
                                                                paddingTop: "0.5rem",
                                                        }}
                                                >
                                                        <Nav className="mx-auto">
                                                                <Link
                                                                        to="/notice"
                                                                        className="mr-3 text-white font-weight-bold"
                                                                >
                                                                        {/* <Nav.Link to="/notice"> */}
                                                                        Notice
                                                                        Board
                                                                        {/* </Nav.Link> */}
                                                                </Link>
                                                                <Link
                                                                        to="/contact"
                                                                        className="text-white font-weight-bold"
                                                                >
                                                                        {/* <Nav.Link to="#contact"> */}
                                                                        Contact
                                                                        Us
                                                                        {/* </Nav.Link> */}
                                                                </Link>
                                                        </Nav>
                                                </div>
                                        </Col>
                                </Row>
                                <hr style={{ borderTop: "2px solid brown" }} />
                        </Container>
                        <Container>
                                <Row>
                                        <Col md={6} sm={6} xs={12}>
                                                <p className="copyright-text">
                                                        Copyright &copy;
                                                        {new Date().getFullYear()}{" "}
                                                        All Rights Reserved by
                                                        <Link
                                                                to="/copyright"
                                                                className="text-white font-weight-bold"
                                                        >
                                                                {" "}
                                                                MK Rakib
                                                        </Link>
                                                        .
                                                </p>
                                        </Col>
                                        <Col md={4} sm={4} xs={12}>
                                                <ul className="social-icons">
                                                        <li>
                                                                <Link
                                                                        className="facebook"
                                                                        to="/fb"
                                                                >
                                                                        <i className="fab fa-facebook-f"></i>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link
                                                                        className="twitter"
                                                                        to="/twitter"
                                                                >
                                                                        <i className="fab fa-twitter"></i>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link
                                                                        className="dribbble"
                                                                        to="/dribble"
                                                                >
                                                                        <i className="fab fa-dribbble"></i>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link
                                                                        className="linkedin"
                                                                        to="/linkedin"
                                                                >
                                                                        <i className="fab fa-linkedin-in"></i>
                                                                </Link>
                                                        </li>
                                                </ul>
                                        </Col>
                                        <Col md={2} sm={2} xs={2}>
                                                <div>
                                                        <ScrollToTop smooth />
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </footer>
        );
};

export default Footer;
