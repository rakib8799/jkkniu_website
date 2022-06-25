import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import course01 from "../../images/course01.jpeg";
import "../Faculty/faculty.css";
import { Link } from "react-router-dom";

const Teachers = () => {
        const displayTeachers = [
                {
                        teacher: "Teacher 1",
                        shortForm: "Teacher1",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        teacher: "Teacher 2",
                        shortForm: "Teacher2",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        teacher: "Teacher 3",
                        shortForm: "Teacher3",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        teacher: "Teacher 4",
                        shortForm: "Teacher4",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        teacher: "Teacher 5",
                        shortForm: "Teacher5",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        teacher: "Teacher 6",
                        shortForm: "Teacher6",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        teacher: "Teacher 7",
                        shortForm: "Teacher7",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        teacher: "Teacher 8",
                        shortForm: "Teacher8",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        teacher: "Teacher 9",
                        shortForm: "Teacher9",
                        image: "https://picsum.photos/130/130?image=1027",
                },
        ].map((teacher, index) => (
                <Col xs={12} sm={6} md={4} lg={4} key={index + teacher}>
                        <div className="our-team">
                                <div className="picture">
                                        <Image src={teacher.image} fluid />
                                </div>
                                <div className="team-content">
                                        <h3 className="name">
                                                {teacher.teacher}
                                        </h3>
                                        <h4 className="title">Web Developer</h4>
                                        <Link
                                                to={`/teacher/${teacher.shortForm}`}
                                                className="btn-primary"
                                        >
                                                See details
                                        </Link>
                                </div>
                                <ul class="social">
                                        <li>
                                                <a class="facebook" href="#fb">
                                                        <i class="fab fa-facebook-f"></i>
                                                </a>
                                        </li>
                                        <li>
                                                <a
                                                        class="twitter"
                                                        href="#twitter"
                                                >
                                                        <i class="fab fa-twitter"></i>
                                                </a>
                                        </li>
                                        <li>
                                                <a
                                                        class="dribbble"
                                                        href="#dribble"
                                                >
                                                        <i class="fab fa-dribbble"></i>
                                                </a>
                                        </li>
                                        <li>
                                                <a
                                                        class="linkedin"
                                                        href="#linkedin"
                                                >
                                                        <i class="fab fa-linkedin-in"></i>
                                                </a>
                                        </li>
                                </ul>
                        </div>
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