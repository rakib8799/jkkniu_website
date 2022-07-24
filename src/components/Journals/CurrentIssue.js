/* eslint-disable jsx-a11y/no-distracting-elements */
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
// import course01 from "../../images/course01.jpg";
// import "./message.css";
// import "../courses/courses.css";

const CurrentIssue = () => {
        const params = useParams();
        const displayMessageCard = [
                {
                        notices: "Facial Expression Identification using Regularized Supervised Distance Preserving Projection",
                        description:
                                "Sohana Jahan, Moriyam Akter, Sifta Yeasmin, Farhana Ahmed Simi",
                        number: "70-75",
                },
                {
                        notices: "Synthesis and Characterization of Mixed Ligand Complexes of Copper(II) with Adenine and Dicarboxylic Acids",
                        description:
                                "Sumaia Abdullah, M. S. Rahman, Humaira Yeasmin, A. A. Shaikh, Pradip K. Bakshi",
                        number: "76-81",
                },
                {
                        notices: "Analyzing Infant Mortality in Rural Bangladesh: A Frailty Modeling Approach",
                        description: "Bikash Pal, Ahsan Rahman Jaamee",
                        number: "63-69",
                },
                {
                        notices: "Pregnancy Complications in Women with PCOS: A Meta-Analysis",
                        description: "KM Tanvir, Mohammad Lutfor Rahman",
                        number: "82-87",
                },
                {
                        notices: "Performance Enhancement of an a-Si:H/μc-Si:H Heterojunction p-i-n Solar Cell by Tuning the Device Parameters",
                        description:
                                "Md. Nazmul Islam Sarkar, Himangshu Ranjan Ghosh",
                        number: "88-95",
                },
                {
                        notices: "Studying the Third Cumulant of the Mixture of Dirichlet-multinomial Distributions",
                        description: "Farzana Afroz",
                        number: "96-100",
                },
        ].map((course, index) => (
                <Col
                        xs={10}
                        className="course-item mx-auto my-3 position-relative"
                        key={course + index}
                        data-aos="fade-up"
                >
                        <Card
                                className="journal-card"
                                style={{ minHeight: "20vh" }}
                        >
                                {/* <div className="d-flex"> */}
                                {/* <img
                                                src={course01}
                                                alt=""
                                                style={{ width: "30%" }}
                                        /> */}
                                <Card.Body>
                                        <Card.Title>
                                                {course.notices}
                                        </Card.Title>
                                        <Card.Text>
                                                <div>
                                                        by {course.description}
                                                </div>
                                                {/* <div>
                                                        {`Published by the
                                                                ${course.description},
                                                                Jatiya Kabi Kazi
                                                                Nazrul Islam
                                                                University. Full
                                                                text articles
                                                                available.`}
                                                </div> */}
                                        </Card.Text>
                                        <div className="d-flex">
                                                <Link
                                                        to={`/journals/${params.journalDetails}/${course.number}`}
                                                        className="mr-5"
                                                >
                                                        {/* <Button
                                                                className="btn btn-optional position-absolute mb-3"
                                                                style={{
                                                                        bottom: "0",
                                                                }}
                                                        > */}
                                                        PDF {/* </Button> */}
                                                </Link>
                                                <Link
                                                        to={`/journals/${params.journalDetails}/${course.number}`}
                                                >
                                                        <FontAwesomeIcon
                                                                icon={faBook}
                                                        />{" "}
                                                        {course.number}
                                                </Link>
                                                {/* <Button
                                                        className="btn btn-optional position-absolute mb-3"
                                                        style={{
                                                                bottom: "0",
                                                                right: "50%",
                                                                left: "40%",
                                                        }}
                                                >
                                                        Current Issue
                                                </Button>
                                                <Button
                                                        className="btn btn-optional position-absolute mb-3"
                                                        style={{
                                                                bottom: "0",
                                                                right: "65%",
                                                                left: "15%",
                                                        }}
                                                >
                                                        Register
                                                </Button> */}
                                        </div>
                                </Card.Body>
                                {/* </div> */}
                        </Card>
                </Col>
        ));

        return (
                <section style={{ background: "#fff" }} className="pt-2">
                        <Container
                                fluid
                                // className="message-container my-3"
                        >
                                <Row>
                                        <Col className="mx-auto text-center text-capitalize">
                                                <h1>
                                                        JKKNIU{" "}
                                                        <strong
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                {
                                                                        params.journalDetails
                                                                }
                                                        </strong>
                                                </h1>
                                                <h4>Vol 69, No 2 (2021)</h4>
                                                <h5>Table of Contents</h5>
                                                <h6>Articles</h6>
                                        </Col>
                                </Row>
                                {/* <Container> */}
                                <Row>
                                        <Col>
                                                <div className="d-flex justify-content-center">
                                                        <Link
                                                                to="/all-issues"
                                                                className="mr-3"
                                                        >
                                                                All Issues
                                                        </Link>
                                                        <Link
                                                                to="/current-issue"
                                                                className="mr-3"
                                                        >
                                                                Current Issue
                                                        </Link>
                                                        <Link to="/previous-issue">
                                                                Previous Issue
                                                        </Link>
                                                </div>
                                        </Col>
                                </Row>
                                {/* </Container> */}
                                <Row className="main-row">
                                        {displayMessageCard}
                                </Row>
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
};

export default CurrentIssue;
