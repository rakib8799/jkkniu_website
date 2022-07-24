import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
// import course01 from "../../images/course01.jpeg";
import course01 from "../../images/course01.jpg";
// import "../../components/Faculty/faculty.css";
import "./TeacherSection.css";
import { Link } from "react-router-dom";

const TeacherSection = () => {
        const displayTeachers = [
                {
                        teacher: "Teacher 1",
                        shortForm: "Teacher1",
                        image: course01,
                },
                {
                        teacher: "Teacher 2",
                        shortForm: "Teacher2",
                        image: course01,
                },
                {
                        teacher: "Teacher 3",
                        shortForm: "Teacher3",
                        image: course01,
                },
                {
                        teacher: "Teacher 4",
                        shortForm: "Teacher4",
                        image: course01,
                },
                {
                        teacher: "Teacher 5",
                        shortForm: "Teacher5",
                        image: course01,
                },
                {
                        teacher: "Teacher 6",
                        shortForm: "Teacher6",
                        image: course01,
                },
                {
                        teacher: "Teacher 7",
                        shortForm: "Teacher7",
                        image: course01,
                },
                {
                        teacher: "Teacher 8",
                        shortForm: "Teacher8",
                        image: course01,
                },
                {
                        teacher: "Teacher 9",
                        shortForm: "Teacher9",
                        image: course01,
                },
        ].map((teacher, index) => (
                <Col xs={12} sm={6} md={4} lg={4} key={index + teacher}>
                        <Card className="my-3 card" style={{ height: "70vh" }}>
                                <div className="our-team">
                                        <div className="picture">
                                                <Image
                                                        src={teacher.image}
                                                        fluid
                                                />
                                        </div>
                                        <div className="team-content">
                                                <h3 className="name">
                                                        {teacher.teacher}
                                                </h3>
                                                <h4 className="title">
                                                        Web Developer
                                                </h4>
                                                <Link
                                                        to={`/teacher/${teacher.shortForm}`}
                                                        className="btn btn-primary"
                                                >
                                                        See details
                                                </Link>
                                        </div>
                                        <ul className="social">
                                                <li>
                                                        <Link
                                                                className="facebook"
                                                                to="/fb"
                                                        >
                                                                <i className="fab fa-facebook-f"></i>
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link
                                                                className="twitter"
                                                                to="/twitter"
                                                        >
                                                                <i className="fab fa-twitter"></i>
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link
                                                                className="dribbble"
                                                                to="/dribble"
                                                        >
                                                                <i className="fab fa-dribbble"></i>
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link
                                                                className="linkedin"
                                                                to="/linkedin"
                                                        >
                                                                <i className="fab fa-linkedin-in"></i>
                                                        </Link>
                                                </li>
                                        </ul>
                                </div>
                        </Card>
                </Col>
        ));
        return (
                <section className="bg-white">
                        <Container className="pt-5 pb-5">
                                <Row>{displayTeachers}</Row>
                        </Container>
                </section>
        );
};

export default TeacherSection;
