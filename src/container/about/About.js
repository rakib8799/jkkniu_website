import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import college from "../../images/College Logo.png";
import "./about.css";

class About extends Component {
        render() {
                return (
                        <section
                                className="about py-5"
                                id="about"
                                style={{ backgroundColor: "#ffffff" }}
                        >
                                <Container>
                                        <Row>
                                                <Col
                                                        xs={10}
                                                        lg={6}
                                                        md={6}
                                                        className="mx-auto my-5"
                                                >
                                                        <h1 className="text-capitalize">
                                                                about the <br />
                                                                <strong className="banner-title">
                                                                        University
                                                                </strong>
                                                        </h1>
                                                        <p
                                                                className="my-4 text-muted w-100 text-justify about-text"
                                                                data-aos="fade-right"
                                                        >
                                                                Jatiya Kabi Kazi
                                                                Nazrul Islam
                                                                University was
                                                                established by
                                                                the Government
                                                                of Bangladesh on
                                                                09 May 2006,
                                                                though the
                                                                initiative for
                                                                its
                                                                establishment
                                                                was taken some
                                                                years before,
                                                                firstly by a
                                                                non-official
                                                                group of
                                                                socio-cultural
                                                                local elites,
                                                                namely Greater
                                                                Mymensingh
                                                                Cultural Forum.
                                                                The university
                                                                was originally
                                                                conceived to be
                                                                built as the
                                                                first cultural
                                                                university in
                                                                Bangladesh, but
                                                                the JKKNIU Act
                                                                enacted in 2006
                                                                made it a
                                                                general
                                                                university with
                                                                a special focus
                                                                on
                                                                liberal-cum-performing
                                                                arts education
                                                                and research.
                                                        </p>
                                                        <a
                                                                href="/about"
                                                                className="btn btn-main text-uppercase learn-more"
                                                                data-aos="fade-right"
                                                        >
                                                                <Link
                                                                        to="/about"
                                                                        className="text-white"
                                                                >
                                                                        learn
                                                                        more
                                                                </Link>
                                                                <span>
                                                                        <i
                                                                                style={{
                                                                                        marginLeft: 10,
                                                                                }}
                                                                                className="fas fa-arrow-right"
                                                                        ></i>
                                                                </span>
                                                        </a>
                                                </Col>
                                                <Col
                                                        xs={10}
                                                        lg={6}
                                                        md={6}
                                                        className="mx-auto my-5 align-self-center"
                                                        data-aos="fade-in"
                                                >
                                                        <div className="about-img_container">
                                                                <Image
                                                                        src={
                                                                                college
                                                                        }
                                                                        fluid
                                                                        className="rounded"
                                                                />
                                                        </div>
                                                </Col>
                                        </Row>
                                </Container>
                        </section>
                );
        }
}

export default About;
