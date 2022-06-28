import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
// import course01 from "../../images/course01.jpeg";
// import avatar from "../../images/avatar.jpg";
import "../Faculty/faculty.css";
import { Link } from "react-router-dom";

const Teachers = () => {
        const displayTeachers = [
                {
                        teacher: "Teacher 1",
                        shortForm: "Teacher1",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
                {
                        teacher: "Teacher 2",
                        shortForm: "Teacher2",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
                {
                        teacher: "Teacher 3",
                        shortForm: "Teacher3",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
                {
                        teacher: "Teacher 4",
                        shortForm: "Teacher4",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
                {
                        teacher: "Teacher 5",
                        shortForm: "Teacher5",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
                {
                        teacher: "Teacher 6",
                        shortForm: "Teacher6",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
                {
                        teacher: "Teacher 7",
                        shortForm: "Teacher7",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
                {
                        teacher: "Teacher 8",
                        shortForm: "Teacher8",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
                {
                        teacher: "Teacher 9",
                        shortForm: "Teacher9",
                        image: "https://res.cloudinary.com/mkrakib/image/upload/v1656415010/JKKNIU_Images/avatar_ynikah.jpg",
                },
        ].map((teacher, index) => (
                <Col xs={12} sm={6} md={4} lg={4} key={index + teacher}>
                        <Card className="my-3" style={{ height: "70vh" }}>
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
                <section>
                        <Container className="mt-5 mb-5">
                                <Row>{displayTeachers}</Row>
                        </Container>
                </section>
        );
};

export default Teachers;
