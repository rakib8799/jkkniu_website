import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "../../container/courses/courses.css";
import { Link } from "react-router-dom";

class FacultyPage extends Component {
        render() {
                const displayFaculty = [
                        {
                                faculty: "FACULTY OF ARTS",
                                shortForm: "FACARTS",
                                image: "https://picsum.photos/130/130?image=1027",
                        },
                        {
                                faculty: "FACULTY OF FINE ARTS",
                                shortForm: "FACFINEARTS",
                                image: "https://picsum.photos/130/130?image=1027",
                        },
                        {
                                faculty: "FACULTY OF SCIENCE AND ENGINEERING",
                                shortForm: "FACSCI",
                                image: "https://picsum.photos/130/130?image=1027",
                        },
                        {
                                faculty: "FACULTY OF SOCIAL SCIENCE",
                                shortForm: "FACSOCIALSCI",
                                image: "https://picsum.photos/130/130?image=1027",
                        },
                        {
                                faculty: "FACULTY OF LAW",
                                shortForm: "FACLAW",
                                image: "https://picsum.photos/130/130?image=1027",
                        },
                        {
                                faculty: "FACULTY OF BUSINESS ADMINISTRATION",
                                shortForm: "FACBUSINESS",
                                image: "https://picsum.photos/130/130?image=1027",
                        },
                ].map((faculty, index) => (
                        <Col
                                xs={10}
                                sm={6}
                                lg={4}
                                className="course-item mx-auto my-3"
                                key={faculty + index}
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
                                                        {faculty.faculty}
                                                </Card.Title>
                                                <Card.Text>
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                </Card.Text>
                                                <div className="text-center">
                                                        <Link
                                                                to={`/faculty/${faculty.shortForm}`}
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
                        <section id="courses" className="courses py-5">
                                <Container>
                                        <Row>
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
                                        </Row>
                                        <Row>{displayFaculty}</Row>
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
                );
        }
}

export default FacultyPage;
