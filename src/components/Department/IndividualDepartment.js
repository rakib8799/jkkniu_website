import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "../../container/courses/courses.css";
import { Link, useParams } from "react-router-dom";
import ControlledTab from "./ControlledTab";

const IndividualDepartment = () => {
        // render() {
        const params = useParams();

        const displayCourses = [
                {
                        courses: "Course 1",
                        shortForm: "Course1",
                        image: course01,
                },
        ].map((course, index) => (
                <Col
                        xs={10}
                        sm={10}
                        lg={10}
                        className="course-item mx-auto my-3"
                        key={course + index}
                        data-aos="fade-up"
                >
                        <Card className="course-card">
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
                                                <div className="d-flex">
                                                        <div>Department</div>
                                                        <div>Duration</div>
                                                        <div>Credits</div>
                                                </div>
                                        </Card.Text>
                                        <div className="text-center">
                                                <Link
                                                        to={`/course/${course.shortForm}`}
                                                        className="btn btn-optional text-center"
                                                >
                                                        Download Syllabus
                                                </Link>
                                        </div>
                                </Card.Body>
                        </Card>
                </Col>
        ));

        return (
                <section id="courses" className="courses py-5">
                        {/* <div>Department: {params.department}</div> */}
                        <Container fluid>
                                <Row>
                                        <Col
                                                xs={10}
                                                sm={6}
                                                className="mx-auto text-center course-title"
                                        >
                                                <h1 className="text-capitalize text-dark">
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
                                                </h1>
                                                <p
                                                        style={{
                                                                borderTop: "3px solid white",
                                                                width: 70,
                                                                marginTop: 20,
                                                        }}
                                                ></p>
                                                <p
                                                        className="text-muted"
                                                        data-aos="fade-up"
                                                >
                                                        Total Students 400 Total
                                                        Teachers 12 Total Staffs
                                                </p>
                                        </Col>
                                </Row>
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
