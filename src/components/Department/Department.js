import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpg";
import "../../container/courses/courses.css";
import "../../container/about/about.css";
import { useParams } from "react-router-dom";
import DataDept from "./DataDept";

const Department = () => {
        // render() {
        const params = useParams();

        const displayDepartment = [
                {
                        faculty: "FACARTS",
                        departments: [
                                "Bangla Language and Literature",
                                "English Language and Literature",
                                "Music",
                                "Theatre and Performance Studies",
                                "Film and Media",
                                "Philosophy",
                        ],
                        shortForm: [
                                "Bangla",
                                "English",
                                "Music",
                                "Theatre",
                                "Film",
                                "Philosophy",
                        ],
                        image: course01,
                },
                {
                        faculty: "FACFINEARTS",
                        departments: ["Fine Arts"],
                        shortForm: ["Fine_Arts"],
                        image: course01,
                },
                {
                        faculty: "FACSCI",
                        departments: [
                                "Computer Science and Engineering",
                                "Electrical and Electronics Engineering",
                                "Environmental Science and Engineering ",
                                "Statistics",
                        ],
                        shortForm: ["CSE", "EEE", "ESE", "STAT"],
                        image: course01,
                },
                {
                        faculty: "FACSOCIALSCI",
                        departments: [
                                "Economics",
                                "Public Administration and Governance Studies",
                                "Folklore",
                                "Anthropology",
                                "Population Science",
                                "Local Government and Urban Development",
                                "Sociology",
                        ],
                        shortForm: [
                                "Economics",
                                "PAGS",
                                "Folklore",
                                "Anthropology",
                                "Population_Science",
                                "LGUD",
                                "Sociology",
                        ],
                        image: course01,
                },
                {
                        faculty: "FACLAW",
                        departments: ["Law and Justice"],
                        shortForm: ["Law"],
                        image: course01,
                },
                {
                        faculty: "FACBUSINESS",
                        departments: [
                                "Accounting and Information Systems",
                                "Finance and Banking",
                                "Human Resource Management",
                                "Management",
                        ],
                        shortForm: ["AIS", "Finance", "HRM", "Management"],
                        image: course01,
                },
        ];

        const data = displayDepartment.find(
                (data) => data.faculty === params.faculty
        );
        // console.log(data.departments);
        const mapData = data.departments;
        // const mapShort = data.shortForm;

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
                                                <h1>Departments</h1>
                                                <p>
                                                        Academics / Faculties /{" "}
                                                        <span
                                                                style={{
                                                                        color: "brown",
                                                                }}
                                                        >
                                                                Departments
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
                                <Row>
                                        {mapData.map((dept, index) => (
                                                <DataDept
                                                        key={dept + index}
                                                        dept={dept}
                                                        // data={data}
                                                        // mapShort={mapShort}
                                                />
                                        ))}
                                        {/* {mapShort.map((short, index) => (
                                                <DataDept
                                                        key={short + index}
                                                        short={short}
                                                />
                                        ))} */}
                                </Row>
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
// }

export default Department;
