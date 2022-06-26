import React from "react";
import { Col, Card } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "../../container/courses/courses.css";
import "../../container/about/about.css";
import { Link } from "react-router-dom";

const DataDept = ({ dept }) => {
        return (
                <>
                        <Col
                                xs={10}
                                sm={6}
                                lg={4}
                                className="course-item mx-auto my-3"
                                data-aos="fade-up"
                        >
                                <Card
                                        className="course-card"
                                        style={{ height: "70vh" }}
                                >
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
                                                <Card.Title>{dept}</Card.Title>
                                                <Card.Text>
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                </Card.Text>
                                                <div className="">
                                                        <Link
                                                                to={`/department/${dept}`}
                                                                className="btn btn-optional position-absolute mb-3 text-white"
                                                                style={{
                                                                        bottom: "0",
                                                                }}
                                                        >
                                                                See Details
                                                        </Link>
                                                </div>
                                        </Card.Body>
                                </Card>
                        </Col>
                </>
        );
};

export default DataDept;
