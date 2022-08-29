import React from "react";
import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUserTie } from "@fortawesome/free-solid-svg-icons";
// import {
//         solid,
//         regular,
//         brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Topbar2() {
        return (
                <div
                        className="py-md-2"
                        style={{
<<<<<<< HEAD
                                background: "linear-gradient(to right,#025C53,#4dddb4)",
                                // background: "#025C53",4dddb4
                                // position: "fixed",
=======
                                // background: "linear-gradient(to right,#137e60,#4dddb4)",
                                background: "#025C53",
>>>>>>> a311b54ff24b35bad6e48405c12507e22f723a40
                        }}
                >
                        <div
                                expand="lg"
                                className="font-weight-bold"
                                // style={{ maxHeight: "15vh" }}
                        >
                                {/* <Container> */}
                                <Row className="d-flex align-items-center">
                                        <Col lg={10} xs={12} md={9}>
                                                <Row className="">
                                                        <Col lg={2} xs={1}>
                                                                <Link to="/">
                                                                        <img
                                                                                src={
                                                                                        logo
                                                                                }
                                                                                alt="logo"
                                                                                // style={{
                                                                                //         width: "80px",
                                                                                //         height: "100%",
                                                                                // }}
                                                                                className="m-auto d-flex align-items-center justify-content-end logo"
                                                                        />
                                                                </Link>
                                                        </Col>
                                                        <Col xs={11} lg={10}>
                                                                <Row>
                                                                        <Col
                                                                                xs={
                                                                                        11
                                                                                }
                                                                                lg={
                                                                                        12
                                                                                }
                                                                        >
                                                                                <Link to="/">
                                                                                        <p
                                                                                                className="text-white largeText text-uppercase text-center"
                                                                                                // style={{
                                                                                                //         fontWeight: "600",
                                                                                                // }}
                                                                                        >
                                                                                                {" "}
                                                                                                Jatiya
                                                                                                Kabi
                                                                                                Kazi
                                                                                                Nazrul
                                                                                                Islam
                                                                                                University
                                                                                        </p>
                                                                                </Link>
                                                                        </Col>
                                                                        <Col
                                                                                lg={
                                                                                        12
                                                                                }
                                                                                className="ml-lg-5"
                                                                        >
                                                                                <Navbar
                                                                                        expand="lg"
                                                                                        className="font-weight-bold"
                                                                                        style={{
                                                                                                // background: "linear-gradient(to right,#137e60,#4dddb4)",
                                                                                                padding: "0",
                                                                                        }}
                                                                                >
                                                                                        <Navbar.Toggle
                                                                                                aria-controls="basic-navbar-nav"
                                                                                                className="toggle"
                                                                                        />
                                                                                        <Navbar.Collapse id="basic-navbar-nav">
                                                                                                <Nav className="ml-2 parent">
                                                                                                        <Link to="/about">
                                                                                                                <Nav.Link
                                                                                                                        href="#about"
                                                                                                                        className="text-uppercase"
                                                                                                                        id="about-link"
                                                                                                                >
                                                                                                                        About
                                                                                                                </Nav.Link>
                                                                                                        </Link>

                                                                                                        <NavDropdown
                                                                                                                title="Academics"
                                                                                                                id="academic-dropdown"
                                                                                                                className="text-uppercase"
                                                                                                        >
                                                                                                                <div className="text-capitalize">
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Academic
                                                                                                                                        Programs
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Academic
                                                                                                                                        Calendar
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/faculty">
                                                                                                                                <NavDropdown.Item href="/faculty">
                                                                                                                                        Faculties
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/departments">
                                                                                                                                <NavDropdown.Item href="/departments">
                                                                                                                                        Departments
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Institute/Center/Cell
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                </div>
                                                                                                        </NavDropdown>

                                                                                                        <NavDropdown
                                                                                                                title="Administration"
                                                                                                                id="administration-dropdown"
                                                                                                                className="text-uppercase"
                                                                                                        >
                                                                                                                <div className="text-capitalize">
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Vice
                                                                                                                                        Chancellor
                                                                                                                                        Office
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Registrar
                                                                                                                                        Office
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Treasurer
                                                                                                                                        office
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Public
                                                                                                                                        Relations
                                                                                                                                        Office
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Student
                                                                                                                                        Counseling
                                                                                                                                        and
                                                                                                                                        Guidance
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Proctor
                                                                                                                                        Office
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Controller
                                                                                                                                        of
                                                                                                                                        Exam
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Accounts
                                                                                                                                        and
                                                                                                                                        Finance
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Engineering
                                                                                                                                        Section
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Transportation
                                                                                                                                        Pool
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Planning
                                                                                                                                        and
                                                                                                                                        Development
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                </div>
                                                                                                        </NavDropdown>

                                                                                                        <NavDropdown
                                                                                                                title="Facilities"
                                                                                                                id="facilities-dropdown"
                                                                                                                className="text-uppercase"
                                                                                                        >
                                                                                                                <div className="text-capitalize">
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Central
                                                                                                                                        Library
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Medical
                                                                                                                                        Center
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Physical
                                                                                                                                        Education
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        ICT
                                                                                                                                        Cell
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Residential
                                                                                                                                        Halls
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                </div>
                                                                                                        </NavDropdown>

                                                                                                        <NavDropdown
                                                                                                                title="Publications"
                                                                                                                id="publications-dropdown"
                                                                                                                className="text-uppercase"
                                                                                                        >
                                                                                                                <div className="text-capitalize">
                                                                                                                        <Link to="/journals">
                                                                                                                                <NavDropdown.Item href="#journals">
                                                                                                                                        Journals
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Conferences
                                                                                                                                </NavDropdown.Item>
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Annual
                                                                                                                                        Report
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                </div>
                                                                                                        </NavDropdown>
                                                                                                        <NavDropdown
                                                                                                                title="Admission"
                                                                                                                id="admission-dropdown"
                                                                                                                className="text-uppercase"
                                                                                                        >
                                                                                                                <div className="text-capitalize">
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Undergraduate
                                                                                                                                        Programs
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Graduate
                                                                                                                                        Programs
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                </div>
                                                                                                        </NavDropdown>

                                                                                                        <NavDropdown
                                                                                                                title="Links"
                                                                                                                id="links-dropdown"
                                                                                                                className="text-uppercase"
                                                                                                        >
                                                                                                                <div className="text-capitalize">
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        JKKNIU
                                                                                                                                        Login
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Student
                                                                                                                                        Login
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        JKKNIU
                                                                                                                                        Forms
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Notice
                                                                                                                                        Board
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/news">
                                                                                                                                <NavDropdown.Item href="/news">
                                                                                                                                        Latest
                                                                                                                                        News
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/events">
                                                                                                                                <NavDropdown.Item href="/events">
                                                                                                                                        Events
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/">
                                                                                                                                <NavDropdown.Item href="/">
                                                                                                                                        Career
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                        <Link to="/gallery">
                                                                                                                                <NavDropdown.Item href="/gallery">
                                                                                                                                        Gallery
                                                                                                                                        Collection
                                                                                                                                </NavDropdown.Item>
                                                                                                                        </Link>
                                                                                                                </div>
                                                                                                        </NavDropdown>
                                                                                                </Nav>
                                                                                        </Navbar.Collapse>
                                                                                </Navbar>
                                                                        </Col>
                                                                </Row>
                                                        </Col>
                                                </Row>
                                        </Col>
                                        <Col lg={2} md={3} className="btn-menu">
<<<<<<< HEAD
                                                {/* <button className="btn btn-main text-white mr-2 btn-sm btn-1"> */}
                                                <Link
                                                        to="/signup"
                                                        className="btn btn-main text-white mr-2 btn-sm btn-1"
                                                >
=======
                                                <button className="btn btn-main text-white mr-2 btn-sm btn-1">
>>>>>>> a311b54ff24b35bad6e48405c12507e22f723a40
                                                        <FontAwesomeIcon
                                                                icon={faUserTie}
                                                        />{" "}
                                                        Student
<<<<<<< HEAD
                                                </Link>
                                                {/* </button> */}
                                                {/* <button className="btn btn-main text-white btn-sm btn-2"> */}
                                                <Link
                                                        to="/login"
                                                        className="btn btn-main text-white btn-sm btn-2"
                                                >
=======
                                                </button>
                                                <button className="btn btn-main text-white btn-sm btn-2">
>>>>>>> a311b54ff24b35bad6e48405c12507e22f723a40
                                                        <FontAwesomeIcon
                                                                icon={faLock}
                                                                className="pr-1"
                                                        />
                                                        JKKNIU
<<<<<<< HEAD
                                                </Link>
                                                {/* </button> */}
=======
                                                </button>
>>>>>>> a311b54ff24b35bad6e48405c12507e22f723a40
                                        </Col>
                                </Row>
                                {/* </Container> */}
                        </div>
                        {/* <Navbar
                                expand="lg"
                                className="font-weight-bold"
                                style={{
                                        background: "linear-gradient(to right,#137e60,#4dddb4)",
                                        padding: "0",
                                }}
                        >
                                <Row className="m-md-auto">
                                        <Col xs={10}>
                                                <Navbar.Toggle
                                                        aria-controls="basic-navbar-nav"
                                                        className="toggle"
                                                />
                                                <Navbar.Collapse id="basic-navbar-nav">
                                                        <Nav className="ml-2 parent">
                                                                <Link to="/about">
                                                                        <Nav.Link
                                                                                href="#about"
                                                                                className="text-uppercase"
                                                                                id="about-link"
                                                                        >
                                                                                About
                                                                        </Nav.Link>
                                                                </Link>

                                                                <NavDropdown
                                                                        title="Academics"
                                                                        id="academic-dropdown"
                                                                        className="text-uppercase"
                                                                >
                                                                        <div className="text-capitalize">
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Academic
                                                                                                Programs
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Academic
                                                                                                Calendar
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/faculty">
                                                                                        <NavDropdown.Item href="/faculty">
                                                                                                Faculties
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/departments">
                                                                                        <NavDropdown.Item href="/departments">
                                                                                                Departments
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Institute/Center/Cell
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                        </div>
                                                                </NavDropdown>

                                                                <NavDropdown
                                                                        title="Administration"
                                                                        id="administration-dropdown"
                                                                        className="text-uppercase"
                                                                >
                                                                        <div className="text-capitalize">
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Vice
                                                                                                Chancellor
                                                                                                Office
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Registrar
                                                                                                Office
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Treasurer
                                                                                                office
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Public
                                                                                                Relations
                                                                                                Office
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Student
                                                                                                Counseling
                                                                                                and
                                                                                                Guidance
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Proctor
                                                                                                Office
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Controller
                                                                                                of
                                                                                                Exam
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Accounts
                                                                                                and
                                                                                                Finance
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Engineering
                                                                                                Section
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Transportation
                                                                                                Pool
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Planning
                                                                                                and
                                                                                                Development
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                        </div>
                                                                </NavDropdown>

                                                                <NavDropdown
                                                                        title="Facilities"
                                                                        id="facilities-dropdown"
                                                                        className="text-uppercase"
                                                                >
                                                                        <div className="text-capitalize">
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Central
                                                                                                Library
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Medical
                                                                                                Center
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Physical
                                                                                                Education
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                ICT
                                                                                                Cell
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Residential
                                                                                                Halls
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                        </div>
                                                                </NavDropdown>

                                                                <NavDropdown
                                                                        title="Publications"
                                                                        id="publications-dropdown"
                                                                        className="text-uppercase"
                                                                >
                                                                        <div className="text-capitalize">
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Journals
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Annual
                                                                                                Report
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                        </div>
                                                                </NavDropdown>
                                                                <NavDropdown
                                                                        title="Admission"
                                                                        id="admission-dropdown"
                                                                        className="text-uppercase"
                                                                >
                                                                        <div className="text-capitalize">
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Undergraduate
                                                                                                Programs
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Graduate
                                                                                                Programs
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                        </div>
                                                                </NavDropdown>

                                                                <NavDropdown
                                                                        title="Links"
                                                                        id="links-dropdown"
                                                                        className="text-uppercase"
                                                                >
                                                                        <div className="text-capitalize">
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                JKKNIU
                                                                                                Login
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Student
                                                                                                Login
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                JKKNIU
                                                                                                Forms
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Notice
                                                                                                Board
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/news">
                                                                                        <NavDropdown.Item href="/news">
                                                                                                Latest
                                                                                                News
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/events">
                                                                                        <NavDropdown.Item href="/events">
                                                                                                Events
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/">
                                                                                        <NavDropdown.Item href="/">
                                                                                                Career
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                                <Link to="/gallery">
                                                                                        <NavDropdown.Item href="/gallery">
                                                                                                Gallery
                                                                                                Collection
                                                                                        </NavDropdown.Item>
                                                                                </Link>
                                                                        </div>
                                                                </NavDropdown>
                                                        </Nav>
                                                </Navbar.Collapse>
                                        </Col>
                                </Row>
                        </Navbar> */}
                </div>
        );
}
