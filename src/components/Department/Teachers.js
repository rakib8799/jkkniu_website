import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "../../container/courses/courses.css";
import { Link } from "react-router-dom";

const Teachers = () => {
        const displayCourses = [
                {
                        courses: "Teacher 1",
                        shortForm: "Teacher1",
                        image: course01,
                },
                {
                        courses: "Teacher 2",
                        shortForm: "Teacher2",
                        image: course01,
                },
                {
                        courses: "Teacher 3",
                        shortForm: "Teacher3",
                        image: course01,
                },
                {
                        courses: "Teacher 4",
                        shortForm: "Teacher4",
                        image: course01,
                },
                {
                        courses: "Teacher 5",
                        shortForm: "Teacher5",
                        image: course01,
                },
                {
                        courses: "Teacher 6",
                        shortForm: "Teacher6",
                        image: course01,
                },
                {
                        courses: "Teacher 7",
                        shortForm: "Teacher7",
                        image: course01,
                },
                {
                        courses: "Teacher 8",
                        shortForm: "Teacher8",
                        image: course01,
                },
                {
                        courses: "Teacher 9",
                        shortForm: "Teacher9",
                        image: course01,
                },
        ].map((course, index) => (
                <Col
                        xs={10}
                        sm={6}
                        lg={4}
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
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                        </Card.Text>
                                        <div className="text-center">
                                                <Link
                                                        to={`/course/${course.shortForm}`}
                                                        className="btn btn-optional text-center"
                                                >
                                                        See Details
                                                </Link>
                                        </div>
                                </Card.Body>
                        </Card>
                </Col>
        ));
        return (
                <>
                        <section id="courses" className="courses py-5">
                                {/* <div>Department: {params.department}</div> */}
                                <Container>
                                        {/* <Row>
                                                <Col
                                                        xs={10}
                                                        sm={6}
                                                        className="mx-auto text-center course-title"
                                                >
                                                        <h1 className="text-capitalize text-dark">
                                                                Our Featured{" "}
                                                                <strong
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        Courses
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
                                                                Our Featured
                                                                Courses are
                                                                selected through
                                                                a rigorous
                                                                process and
                                                                uniquely created
                                                                for each
                                                                semester.
                                                        </p>
                                                </Col>
                                        </Row> */}
                                        <Row>{displayCourses}</Row>
                                        <Row>
                                                <Col
                                                        className="mx-auto my-3"
                                                        data-aos="zoom-in"
                                                >
                                                        <div className="text-center">
                                                                <Button className="btn btn-main">
                                                                        View
                                                                        More
                                                                </Button>
                                                        </div>
                                                </Col>
                                        </Row>
                                </Container>
                        </section>
                </>
        );
};

export default Teachers;
