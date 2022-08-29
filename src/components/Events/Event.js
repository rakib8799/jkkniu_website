import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./event.css";
import varsity_image from "../../images/about.jpg";

const Event = () => {
        const displayEvent = ["event01", "event02", "event03"].map(
                (item, index) => (
                        <Col xs={12} key={index + item} className="mt-5">
                                <article className="blog-card">
                                        <div className="blog-card__background">
                                                <div className="card__background--wrapper">
                                                        <div
                                                                className="card__background--main"
                                                                style={{
                                                                        backgroundImage: `url(${varsity_image})`,
                                                                }}
                                                        >
                                                                <div className="card__background--layer"></div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="blog-card__head">
                                                <span className="date__box">
                                                        <span className="date__day">
                                                                11
                                                        </span>
                                                        <span className="date__month">
                                                                JAN
                                                        </span>
                                                </span>
                                        </div>
                                        <div className="blog-card__info">
                                                <h5>
                                                        HARVICK GETS WHAT HE
                                                        NEEDS, JOHNSON AMONG
                                                        THOSE
                                                </h5>
                                                <p>
                                                        <Link
                                                                to="/icon1"
                                                                className="icon-link mr-3"
                                                        >
                                                                <i className="fas fa-user"></i>{" "}
                                                                Tony Jahson
                                                        </Link>
                                                        <Link
                                                                to="/icon2"
                                                                className="icon-link"
                                                        >
                                                                <i className="fas fa-comments"></i>{" "}
                                                                150
                                                        </Link>
                                                </p>
                                                <p>
                                                        Lorem ipsum dolor sit,
                                                        amet consectetur
                                                        adipisicing elit.
                                                        Doloremque vero libero
                                                        voluptatibus earum?
                                                        Alias dignissimos quo
                                                        cum, nulla esse facere
                                                        atque, blanditiis
                                                        doloribus at sunt quas,
                                                        repellendus vel? Et,
                                                        hic!
                                                </p>
                                                <Link
                                                        to="/icon3"
                                                        className="btns btn--with-icon"
                                                >
                                                        <i className="btn-icon fas fa-long-arrow-alt-right"></i>
                                                        READ MORE
                                                </Link>
                                        </div>
                                </article>
                        </Col>
                )
        );

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
                                                <h1>Events</h1>
                                                <p>
                                                        Home /{" "}
                                                        <span
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Events
                                                        </span>
                                                </p>
                                        </Col>
                                </Row>
                        </Container>
                        <Container className="mt-5 mb-5">
                                <Row>{displayEvent}</Row>
                        </Container>
                </section>
        );
};

export default Event;
