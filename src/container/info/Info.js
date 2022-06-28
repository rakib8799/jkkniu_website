import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import vc_sir from "../../images/vc_sir.jpg";
import "./Info.css";

const Info = () => {
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
                                                lg={4}
                                                md={6}
                                                className="mx-auto my-5 align-self-center"
                                                data-aos="fade-in"
                                        >
                                                <div className="about-img_container">
                                                        <Image
                                                                src="https://res.cloudinary.com/mkrakib/image/upload/v1656415008/JKKNIU_Images/vc_sir_hxnvlu.jpg"
                                                                fluid
                                                        />
                                                </div>
                                        </Col>
                                        <Col
                                                xs={10}
                                                lg={8}
                                                md={6}
                                                className="mx-auto my-5"
                                        >
                                                <h1 className="text-capitalize">
                                                        Message from
                                                        <br />
                                                        <strong className="banner-title">
                                                                Vice-Chancellor
                                                        </strong>
                                                </h1>
                                                <p
                                                        className="my-4 text-muted w-100 about-text text-justify"
                                                        data-aos="fade-right"
                                                >
                                                        Welcome to the
                                                        University of Dhaka’s
                                                        website, featuring the
                                                        oldest, largest and the
                                                        premier
                                                        multidisciplinary
                                                        university of
                                                        Bangladesh! Founded in
                                                        1921, The University of
                                                        Dhaka has always had the
                                                        mission of uplifting the
                                                        educational standards of
                                                        the people of the
                                                        region. It was initially
                                                        meant to provide
                                                        tertiary education to
                                                        people who didn’t have
                                                        access to higher studies
                                                        till then. Subsequently,
                                                        it has contributed
                                                        significantly to the
                                                        socio-cultural and
                                                        political development of
                                                        what was once East
                                                        Bengal and then East
                                                        Pakistan, and is now
                                                        Bangladesh. Since its
                                                        establishment, the
                                                        university has been
                                                        fulfilling the hopes and
                                                        aspirations of its
                                                        students and their
                                                        parents. It has, of
                                                        course, not only been a
                                                        lighthouse of learning,
                                                        but has also acted as a
                                                        torch-bearer of the
                                                        people of the region in
                                                        issues such as
                                                        democracy, freedom of
                                                        expression, and the need
                                                        for a just and equitable
                                                        society.
                                                </p>
                                                <Link
                                                        to="/about"
                                                        className="btn btn-main text-uppercase learn-more text-white"
                                                        data-aos="fade-right"
                                                >
                                                        learn more
                                                        <i
                                                                style={{
                                                                        marginLeft: 10,
                                                                }}
                                                                className="fas fa-arrow-right"
                                                        ></i>
                                                </Link>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        );
};

export default Info;
