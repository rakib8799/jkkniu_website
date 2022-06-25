import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutPic from "../../images/course01.jpeg";

class AboutPage extends Component {
        render() {
                return (
                        <section>
                                <Container
                                        style={{
                                                backgroundColor: "brown",
                                                color: "#fff",
                                        }}
                                        className="text-center py-5 aboutpage"
                                        fluid
                                >
                                        <Row>
                                                <Col>
                                                        <h1>About</h1>
                                                        <p>
                                                                Home /{" "}
                                                                <span
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        About
                                                                </span>
                                                        </p>
                                                </Col>
                                        </Row>
                                </Container>
                                <Container fluid>
                                        <Row
                                                style={{
                                                        backgroundColor: "#fff",
                                                }}
                                        >
                                                <Col className="mx-auto px-lg-5 text-left mt-5 mb-5">
                                                        <h1>
                                                                VISIT OUR CAMPUS
                                                                LIFE.
                                                        </h1>
                                                        <div
                                                                style={{
                                                                        borderTop: "4px solid green",
                                                                        width: 50,
                                                                }}
                                                        ></div>
                                                        <p className="mt-3">
                                                                Video shows the
                                                                tour of our
                                                                JKKNIU campus.
                                                                The university
                                                                has a duly
                                                                qualified and
                                                                productive band
                                                                of youthful
                                                                faculty members
                                                                and
                                                                officers/staffs
                                                                who are deeply
                                                                committed to the
                                                                university's
                                                                mission to
                                                                produce world
                                                                class graduates
                                                                in academic
                                                                disciplines of
                                                                arts, social
                                                                sciences,
                                                                science &
                                                                engineering, and
                                                                business
                                                                administration -
                                                                whose services
                                                                and dedications
                                                                are urgently
                                                                needed for the
                                                                reconstruction
                                                                of this country.
                                                        </p>
                                                        <p className="mt-3">
                                                                Rated amongst
                                                                the top ranked
                                                                innovation-driven
                                                                private
                                                                universities and
                                                                technical
                                                                institutes in
                                                                the country,
                                                                Thapar Institute
                                                                of Engineering &
                                                                Technology has
                                                                been accredited
                                                                with an 'A+'
                                                                grade by the
                                                                National
                                                                Assessment and
                                                                Accreditation
                                                                Council (NAAC).
                                                                We constantly
                                                                evolve our
                                                                teaching
                                                                methods, and
                                                                provide quality
                                                                education to our
                                                                students, whom
                                                                we see as unique
                                                                individuals with
                                                                different
                                                                interests and
                                                                aspirations. We
                                                                keep the quality
                                                                of our
                                                                curriculum,
                                                                faculty and
                                                                infrastructure
                                                                unparalleled,
                                                                and believe in
                                                                encouraging
                                                                thousands of
                                                                young minds to
                                                                excel in India
                                                                and abroad. Our
                                                                alumni have
                                                                stood out in
                                                                varied fields
                                                                such as business
                                                                and industry,
                                                                administrative
                                                                and regulatory
                                                                services,
                                                                research and
                                                                education, and
                                                                social and human
                                                                rights
                                                                organisations.
                                                        </p>
                                                </Col>
                                        </Row>
                                        <Row
                                                style={{
                                                        backgroundColor:
                                                                "#E0E0E0",
                                                        color: "white",
                                                }}
                                        >
                                                <Col
                                                        xs={10}
                                                        lg={8}
                                                        md={6}
                                                        className="mx-auto px-lg-5 my-5"
                                                >
                                                        <h1 className="text-capitalize">
                                                                <strong className="banner-title">
                                                                        Mission
                                                                </strong>
                                                        </h1>
                                                        <div
                                                                style={{
                                                                        borderTop: "4px solid green",
                                                                        width: 50,
                                                                }}
                                                        ></div>
                                                        <p
                                                                className="my-4 text-muted w-75 about-text"
                                                                data-aos="fade-right"
                                                        >
                                                                Thapar Institute
                                                                of Engineering &
                                                                Technology,
                                                                which comprises
                                                                of
                                                                inter-disciplinary
                                                                exploration and
                                                                invention, has
                                                                contributed to
                                                                many
                                                                technological
                                                                advancements and
                                                                scientific
                                                                breakthroughs
                                                                within India and
                                                                beyond. The
                                                                teaching
                                                                pedagogy
                                                                employed for the
                                                                engineering
                                                                programmes
                                                                offered at
                                                                Thapar Institute
                                                                of Engineering &
                                                                Technology
                                                                reflects the
                                                                long held ethos,
                                                                which advocate
                                                                that engineering
                                                                education should
                                                                be broad-based
                                                                and should
                                                                enable students
                                                                to develop their
                                                                professional
                                                                careers, while
                                                                finding
                                                                solutions for
                                                                the unseen
                                                                challenges that
                                                                lie ahead.
                                                                <br />
                                                                Our sole mission
                                                                is to provide a
                                                                scholarly and
                                                                professional
                                                                environment that
                                                                enables our
                                                                faculty,
                                                                students and
                                                                staff to make
                                                                lasting
                                                                contributions to
                                                                the advancement
                                                                of learning. We
                                                                aim to be
                                                                dynamic,
                                                                innovative and
                                                                flexible in
                                                                devising
                                                                academic
                                                                programmes,
                                                                structures and
                                                                mechanisms. We
                                                                believe in
                                                                carrying out
                                                                cutting-edge
                                                                research and
                                                                development for
                                                                the benefit of
                                                                society.
                                                        </p>
                                                </Col>
                                                <Col
                                                        xs={10}
                                                        lg={4}
                                                        md={6}
                                                        className="mx-auto px-lg-5 my-5 align-self-center"
                                                        data-aos="fade-in"
                                                >
                                                        <div className="about-img_container">
                                                                <Image
                                                                        src={
                                                                                aboutPic
                                                                        }
                                                                        fluid
                                                                        style={{
                                                                                border: "1px solid brown",
                                                                                padding: "5px",
                                                                        }}
                                                                />
                                                        </div>
                                                </Col>
                                        </Row>
                                </Container>
                        </section>
                );
        }
}

export default AboutPage;
