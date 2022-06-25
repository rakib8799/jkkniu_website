import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "../../container/courses/courses.css";
import "../../container/about/about.css";
import { Link } from "react-router-dom";

function Department() {
        // render() {
        // const params = useParams();

        const displayDepartment = [
                {
                        departments: "Bangla Language and Literature",
                        shortForm: "Bangla",
                        image: course01,
                },
                {
                        departments: "English Language and Literature",
                        shortForm: "English",
                        image: course01,
                },
                {
                        departments: "Music",
                        shortForm: "Music",
                        image: course01,
                },
                {
                        departments: "Theatre and Performance Studies",
                        shortForm: "Theatre",
                        image: course01,
                },
                {
                        departments: "Film and Media",
                        shortForm: "Film",
                        image: course01,
                },
                {
                        departments: "Philosophy",
                        shortForm: "Philosophy",
                        image: course01,
                },
        ].map((department, index) => (
                <Col
                        xs={10}
                        sm={6}
                        lg={4}
                        className="course-item mx-auto my-3"
                        key={department + index}
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
                                                {department.departments}
                                        </Card.Title>
                                        <Card.Text>
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                        </Card.Text>
                                        <div className="text-center">
                                                <Link
                                                        to={`/department/${department.shortForm}`}
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
                <section id="courses" className="courses">
                        {/* <div>Faculty: {params.faculty}</div> */}
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
                                                <h1>Department</h1>
                                                <p>
                                                        Academics / Faculty /{" "}
                                                        <span
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Department
                                                        </span>
                                                </p>
                                        </Col>
                                </Row>
                        </Container>
                        <Container>
                                <Row>
                                        <Col
                                                xs={10}
                                                sm={6}
                                                className="mt-5 mx-auto text-center course-title"
                                        >
                                                <h1 className="text-capitalize text-dark">
                                                        Our Featured{" "}
                                                        <strong
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Departments
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
                                                        Our Featured Courses are
                                                        selected through a
                                                        rigorous process and
                                                        uniquely created for
                                                        each semester.
                                                </p>
                                        </Col>
                                </Row>
                                <Row>{displayDepartment}</Row>
                                <Row>
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
                                </Row>
                        </Container>
                </section>
        );
}
// }

export default Department;
