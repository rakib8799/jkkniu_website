import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpg";
import avatar from "../../images/avatar.jpg";
import "../../container/courses/courses.css";
import "../../container/about/about.css";
import { Link, useParams } from "react-router-dom";
import ControlledTab from "./ControlledTab";

const IndividualDepartment = () => {
        // render() {
        const params = useParams();

        const displayCourses = [
                {
                        courses: "Program 1",
                        shortForm: "Program1",
                        image: course01,
                },
                {
                        courses: "Program 2",
                        shortForm: "Program2",
                        image: course01,
                },
                {
                        courses: "Program 3",
                        shortForm: "Program3",
                        image: course01,
                },
        ].map((course, index) => (
                <Col
                        xs={10}
                        sm={6}
                        lg={4}
                        className="course-item mx-auto my-3 position-relative"
                        key={course + index}
                        data-aos="fade-up"
                >
                        <Card
                                className="course-card"
                                style={{ height: "70vh" }}
                        >
                                <div className="img-container">
                                        <Card.Img
                                                variant="top"
                                                src={course01}
                                                className="course-img"
                                        />
                                        <span className="course-item-icon">
                                                <i className="fas fa-star"></i>
                                        </span>
                                </div>
                                <Card.Body>
                                        <Card.Title>
                                                {course.courses}
                                        </Card.Title>
                                        <Card.Text>
                                                <p>
                                                        Lorem ipsum dolor sit
                                                        amet consectetur
                                                        adipisicing elit. Eaque,
                                                        accusantium.
                                                </p>
                                        </Card.Text>
                                        <div className="">
                                                <Link
                                                        to={`/course/${course.shortForm}`}
                                                        className="btn btn-optional text-white position-absolute mb-3"
                                                        style={{ bottom: "0" }}
                                                >
                                                        View Details
                                                </Link>
                                        </div>
                                </Card.Body>
                        </Card>
                </Col>
        ));

        return (
                <section id="courses" className="courses">
                        {/* <div>Department: {params.department}</div> */}

                        <Container className="pt-5">
                                <Row>
                                        <Col
                                                xs={10}
                                                sm={6}
                                                lg={5}
                                                className="text-center"
                                        >
                                                <h3>
                                                        Message from Department
                                                        Head
                                                </h3>
                                                <img
                                                        src={avatar}
                                                        alt=""
                                                        className="img-fluid"
                                                />
                                                <p className="text-muted text-justify">
                                                        Jatiya Kabi Kazi Nazrul
                                                        Islam University was
                                                        established by the
                                                        Government of Bangladesh
                                                        on 01 March 2005. The
                                                        academic program of this
                                                        university started on 03
                                                        June 2007 with four
                                                        departments under two
                                                        Faculties. The
                                                        department of Computer
                                                        Science and Engineering
                                                        is one of them. The
                                                        development of the
                                                        present state of the
                                                        society greatly depends
                                                        on technological
                                                        improvement.
                                                </p>
                                        </Col>
                                        <Col
                                                xs={10}
                                                sm={6}
                                                lg={7}
                                                className="mx-auto text-center course-title text-dark"
                                        >
                                                <h2 className="text-capitalize text-center">
                                                        {/* Our Featured{" "} */}
                                                        <strong
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                {
                                                                        params.department
                                                                }
                                                        </strong>
                                                </h2>
                                                <p
                                                        className="text-justify text-muted"
                                                        style={{
                                                                borderTop: "3px solid white",
                                                                color: "black",
                                                                // width: 70,
                                                                // marginTop: 20,
                                                        }}
                                                >
                                                        In this modern world to
                                                        compete with the first
                                                        world countries we need
                                                        to be habituated
                                                        ourselves with the use
                                                        of technological
                                                        equipments. So opening
                                                        such a department (CSE)
                                                        was a notable decision.
                                                        The department of
                                                        Computer Science and
                                                        Engineering is therefore
                                                        aware of proving quality
                                                        education. The
                                                        department provides an
                                                        excellent and bright
                                                        young brand of teachers
                                                        who are deeply committed
                                                        to the university to
                                                        bring out best graduates
                                                        in academic disciplines
                                                        and is contributing to
                                                        the perfect development
                                                        the backbone of ICT of
                                                        nation. Our graduates
                                                        are in forth in serving
                                                        the nation with
                                                        reputation. Currently we
                                                        are providing B.Sc.
                                                        (Engg.) and MS degree.
                                                        However we dream to
                                                        commence PhD program as
                                                        well.
                                                </p>
                                                <div className="d-flex">
                                                        <div
                                                                style={{
                                                                        marginRight:
                                                                                "2rem",
                                                                }}
                                                        >
                                                                <h6>
                                                                        Duration
                                                                </h6>
                                                                <strong
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        <p>
                                                                                M.Sc.
                                                                                -
                                                                                3
                                                                                Semesters
                                                                        </p>
                                                                        <p>
                                                                                B.Sc.
                                                                                -
                                                                                8
                                                                                Semesters
                                                                        </p>
                                                                </strong>
                                                        </div>
                                                        <div
                                                                style={{
                                                                        marginRight:
                                                                                "2rem",
                                                                }}
                                                        >
                                                                <h6>Credits</h6>
                                                                <strong
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        <p>
                                                                                M.Sc.-36
                                                                        </p>
                                                                        <p>
                                                                                B.Sc.-162
                                                                        </p>
                                                                </strong>
                                                        </div>
                                                        <div>
                                                                <Button
                                                                        className="btn btn-main ml-5"
                                                                        style={{
                                                                                margin: "20px 0",
                                                                        }}
                                                                >
                                                                        Download
                                                                        Syllabus
                                                                </Button>
                                                        </div>

                                                        {/* <p
                                                                        className="text-muted"
                                                                        data-aos="fade-up"
                                                                >
                                                                        Total
                                                                        Students
                                                                        400
                                                                </p>
                                                                <p
                                                                        className="text-muted"
                                                                        data-aos="fade-up"
                                                                >
                                                                        Total
                                                                        Teachers
                                                                        12
                                                                </p>
                                                                <p
                                                                        className="text-muted"
                                                                        data-aos="fade-up"
                                                                >
                                                                        Total
                                                                        Staffs 4
                                                                </p> */}
                                                        {/* <div> */}

                                                        {/* </div> */}
                                                        {/* </div> */}
                                                        {/* <div>
                                                                <Button
                                                                        className="btn btn-main ml-5"
                                                                        style={{
                                                                                margin: "20px 0",
                                                                        }}
                                                                >
                                                                        Download
                                                                        Syllabus
                                                                </Button>
                                                        </div> */}
                                                </div>
                                                <div className="d-flex mt-5">
                                                        <div
                                                                style={{
                                                                        marginRight:
                                                                                "2rem",
                                                                }}
                                                        >
                                                                <h6>
                                                                        Total
                                                                        Students
                                                                </h6>
                                                                <strong
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        <p>
                                                                                300
                                                                        </p>
                                                                </strong>
                                                        </div>
                                                        <div
                                                                style={{
                                                                        marginRight:
                                                                                "2rem",
                                                                }}
                                                        >
                                                                <h6>
                                                                        Total
                                                                        Teachers
                                                                </h6>
                                                                <strong
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        <p>
                                                                                15
                                                                        </p>
                                                                </strong>
                                                        </div>
                                                        <div>
                                                                <h6>
                                                                        Total
                                                                        Staffs
                                                                </h6>
                                                                <strong
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        <p>7</p>
                                                                </strong>
                                                        </div>
                                                </div>
                                        </Col>
                                </Row>
                                <h2 className="text-center text-capitalize mt-5">
                                        our <s />
                                        <strong style={{ color: "brown" }}>
                                                Programs
                                        </strong>
                                </h2>

                                <Row>{displayCourses}</Row>
                                {/* <Row>
                                        <Col
                                                className="mx-auto my-3"
                                                data-aos="zoom-in"
                                        >
                                                <div className="text-center">
                                                        <Button className="btn btn-main">
                                                                View More
                                                        </Button>
                                                </div>
                                        </Col>
                                </Row> */}
                                {/* <Row>
                                        <Col className="mx-auto text-center">
                                                <Button
                                                        className="btn btn-main"
                                                        style={{
                                                                margin: "20px 0",
                                                        }}
                                                >
                                                        Download Syllabus
                                                </Button>
                                        </Col>
                                </Row> */}
                                <Row>
                                        <Col>
                                                <ControlledTab />
                                        </Col>
                                </Row>
                        </Container>
                </section>
        );
};
// }

export default IndividualDepartment;
