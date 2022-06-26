import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
                {
                        courses: "Course 2",
                        shortForm: "Course2",
                        image: course01,
                },
                {
                        courses: "Course 3",
                        shortForm: "Course3",
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
                                style={{ height: "65vh" }}
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
                <section id="courses" className="courses py-5">
                        {/* <div>Department: {params.department}</div> */}
                        <Container>
                                <Row>
                                        <Col
                                                xs={10}
                                                sm={6}
                                                className="mx-auto text-center course-title"
                                        >
                                                <h3 className="text-capitalize text-dark">
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
                                                </h3>
                                                <p
                                                        style={{
                                                                borderTop: "3px solid white",
                                                                // width: 70,
                                                                // marginTop: 20,
                                                        }}
                                                ></p>
                                                <div className="d-flex">
                                                        <div
                                                                style={{
                                                                        marginRight:
                                                                                "2rem",
                                                                }}
                                                        >
                                                                <p
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
                                                                </p>
                                                        </div>
                                                        <div>
                                                                <p
                                                                        className="text-muted"
                                                                        data-aos="fade-up"
                                                                >
                                                                        Department
                                                                </p>
                                                                <p
                                                                        className="text-muted"
                                                                        data-aos="fade-up"
                                                                >
                                                                        Duration
                                                                </p>
                                                                <p
                                                                        className="text-muted"
                                                                        data-aos="fade-up"
                                                                >
                                                                        Credits
                                                                </p>
                                                        </div>
                                                </div>
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
                                </Row>
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
