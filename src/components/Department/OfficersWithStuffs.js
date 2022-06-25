import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
// import course01 from "../../images/course01.jpeg";
import "../Faculty/faculty.css";
import { Link } from "react-router-dom";

const OfficersWithStuffs = () => {
        const displayStuffs = [
                {
                        stuffs: "Staff 1",
                        shortForm: "Staff1",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        stuffs: "Staff 2",
                        shortForm: "Staff2",
                        image: "https://picsum.photos/130/130?image=1027",
                },
                {
                        stuffs: "Staff 3",
                        shortForm: "Staff3",
                        image: "https://picsum.photos/130/130?image=1027",
                },
        ].map((stuffs, index) => (
                <Col xs={12} sm={6} md={4} lg={4} key={index + stuffs}>
                        <div className="our-team">
                                <div className="picture">
                                        <Image src={stuffs.image} fluid />
                                </div>
                                <div className="team-content">
                                        <h3 className="name">
                                                {stuffs.stuffs}
                                        </h3>
                                        <h4 className="title">Web Developer</h4>
                                        <Link
                                                to={`/stuffs/${stuffs.shortForm}`}
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
                                        <Row>{displayStuffs}</Row>
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

export default OfficersWithStuffs;