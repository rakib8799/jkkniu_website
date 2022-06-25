import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./faculty.css";

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
                ].map((member, index) => (
                        <Col xs={12} sm={6} md={4} lg={4} key={index + member}>
                                <div className="our-team">
                                        <div className="picture">
                                                <Image
                                                        src={member.image}
                                                        fluid
                                                />
                                        </div>
                                        <div className="team-content">
                                                <h3 className="name">
                                                        {member.faculty}
                                                </h3>
                                                <h4 className="title">
                                                        Web Developer
                                                </h4>
                                                <Link
                                                        to={`/faculty/${member.shortForm}`}
                                                        className="btn-primary"
                                                >
                                                        See all departments
                                                </Link>
                                        </div>
                                        <ul class="social">
                                                <li>
                                                        <a
                                                                class="facebook"
                                                                href="#fb"
                                                        >
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
                                                        <h1>Faculty</h1>
                                                        <p>
                                                                Home /{" "}
                                                                <span
                                                                        style={{
                                                                                color: "brown",
                                                                        }}
                                                                >
                                                                        Faculty
                                                                </span>
                                                        </p>
                                                </Col>
                                        </Row>
                                </Container>
                                <Container className="mt-5 mb-5">
                                        <Row>{displayFaculty}</Row>
                                </Container>
                        </section>
                );
        }
}

export default FacultyPage;
