import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import course01 from "../../images/course01.jpeg";
import "../../container/courses/courses.css";
import "../../container/about/about.css";
import { Link } from "react-router-dom";

const FacultyPage = () => {
        const displayFaculty = [
                {
                        faculty: "FACULTY OF ARTS",
                        shortForm: "FACARTS",
                        // image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        faculty: "FACULTY OF FINE ARTS",
                        shortForm: "FACFINEARTS",
                        // image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        faculty: "FACULTY OF SCIENCE AND ENGINEERING",
                        shortForm: "FACSCI",
                        // image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        faculty: "FACULTY OF SOCIAL SCIENCE",
                        shortForm: "FACSOCIALSCI",
                        // image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        faculty: "FACULTY OF LAW",
                        shortForm: "FACLAW",
                        // image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        faculty: "FACULTY OF BUSINESS ADMINISTRATION",
                        shortForm: "FACBUSINESS",
                        // image: "https://picsum.photos/130/130?image=1027",
                },
        ].map((faculty, index) => (
                <Col
                        xs={10}
                        sm={6}
                        lg={4}
                        className="course-item mx-auto my-3 position-relative"
                        key={faculty + index}
                        data-aos="fade-up"
                >
                        <Card
                                className="course-card"
                                style={{ height: "70vh" }}
                        >
                                <div className="img-container">
                                        <Card.Img
                                                variant="top"
                                                src="https://res.cloudinary.com/mkrakib/image/upload/v1656415008/JKKNIU_Images/course01_wqyi2l.jpg"
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
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                        </Card.Text>

                                        <div className="">
                                                <Link
                                                        to={`/faculty/${faculty.shortForm}`}
                                                        className="btn btn-optional position-absolute mb-3 text-white"
                                                        style={{ bottom: "0" }}
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
                                                <h1>Faculties</h1>
                                                <p>
                                                        Academics /{" "}
                                                        <span
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Faculties
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
                                                                Faculties
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
                                <Row>{displayFaculty}</Row>
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
};

export default FacultyPage;
