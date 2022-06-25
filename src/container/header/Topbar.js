import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Topbar = (e) => {
        // const [show, setShow] = useState({
        //         showAcademics: false,
        //         showAdministration: false,
        //         showStudents: false,
        //         showResearch: false,
        //         showLinks: false,
        // });
        // const [showAdministration, setShowAdministration] = useState(false);
        // const [showStudents, setStudents] = useState(false);
        // const [showResearch, setShowResearch] = useState(false);
        // const [showLinks, setShowLinks] = useState(false);
        // const showDropdown = (e) => {
        //         setShow(!show);
        // };
        // const hideDropdown = (e) => {
        //         setShow(false);
        // };
        // const styles = {
        //         Link: {
        //                 fontSize: "10px",
        //         },
        // };
        // render() {
        return (
                <Navbar
                        expand="lg"
                        className="px-2 text-uppercase font-weight-bold"
                        style={{
                                background: "linear-gradient(to right,#137e60,#4dddb4)",
                        }}
                >
                        <Link to="/">
                                <Navbar.Brand href="#home">
                                        <img
                                                src={logo}
                                                alt="logo"
                                                style={{ width: "3.6vw" }}
                                        />
                                        <span> Nazrul University</span>
                                </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-4">
                                        {/* <Link to="/">
                                                <Nav.Link href="#home">
                                                        Home
                                                </Nav.Link>
                                        </Link> */}

                                        <Link to="/about">
                                                <Nav.Link href="#about">
                                                        About
                                                </Nav.Link>
                                        </Link>

                                        <NavDropdown
                                                title="Academics"
                                                id="academic-dropdown"
                                                // show={show.showAcademics}
                                                // onMouseEnter={showDropdown}
                                                // onMouseLeave={hideDropdown}
                                        >
                                                <div className="text-center">
                                                        <Link to="/faculty">
                                                                <NavDropdown.Item href="/faculty">
                                                                        Academic
                                                                        Programs
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/faculty">
                                                                <NavDropdown.Item href="/faculty">
                                                                        Academic
                                                                        Calendar
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/faculty">
                                                                <NavDropdown.Item href="/faculty">
                                                                        Faculties
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/faculty">
                                                                <NavDropdown.Item href="/faculty">
                                                                        Departments
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        INSTITUTE/CENTER/CELL
                                                                </NavDropdown.Item>
                                                        </Link>
                                                </div>
                                        </NavDropdown>

                                        <NavDropdown
                                                title="Administration"
                                                id="administration-dropdown"
                                                // show={show.showAdministration}
                                                // onMouseEnter={showDropdown}
                                                // onMouseLeave={hideDropdown}
                                        >
                                                <div className="text-center">
                                                        <Link to="/courses">
                                                                <NavDropdown.Item href="/courses">
                                                                        Vice
                                                                        Chancellor
                                                                        Office
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/gallery">
                                                                <NavDropdown.Item href="/gallery">
                                                                        Registrar
                                                                        Office
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Treasurer
                                                                        office
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Public
                                                                        Relations
                                                                        Office
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Student
                                                                        Counseling
                                                                        and
                                                                        Guidance
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Proctor
                                                                        Office
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Controller
                                                                        of Exam
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Accounts
                                                                        and
                                                                        Finance
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Engineering
                                                                        Section
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Transportation
                                                                        Pool
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
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
                                        >
                                                <div className="text-center">
                                                        <Link to="/courses">
                                                                <NavDropdown.Item href="/courses">
                                                                        Central
                                                                        Library
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/gallery">
                                                                <NavDropdown.Item href="/gallery">
                                                                        Medical
                                                                        Center
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        Physical
                                                                        Education
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        ICT Cell
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
                                                                        RESIDENTIAL
                                                                        HALLS
                                                                </NavDropdown.Item>
                                                        </Link>
                                                </div>
                                        </NavDropdown>

                                        <NavDropdown
                                                title="Publications"
                                                id="publications-dropdown"
                                        >
                                                <div className="text-center">
                                                        <Link to="/courses">
                                                                <NavDropdown.Item href="/courses">
                                                                        Journals
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/gallery">
                                                                <NavDropdown.Item href="/gallery">
                                                                        Annual
                                                                        Report
                                                                </NavDropdown.Item>
                                                        </Link>
                                                </div>
                                        </NavDropdown>
                                        <NavDropdown
                                                title="ADMISSION"
                                                id="admission-dropdown"
                                        >
                                                <div className="text-center">
                                                        <Link to="/courses">
                                                                <NavDropdown.Item href="/courses">
                                                                        Undergraduate
                                                                        Programs
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/gallery">
                                                                <NavDropdown.Item href="/gallery">
                                                                        Graduate
                                                                        Programs
                                                                </NavDropdown.Item>
                                                        </Link>
                                                </div>
                                        </NavDropdown>

                                        <NavDropdown
                                                title="Links"
                                                id="links-dropdown"
                                        >
                                                <div className="text-center">
                                                        <Link to="/courses">
                                                                <NavDropdown.Item href="/courses">
                                                                        JKKNIU
                                                                        Login
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/courses">
                                                                <NavDropdown.Item href="/courses">
                                                                        Student
                                                                        Login
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/courses">
                                                                <NavDropdown.Item href="/courses">
                                                                        JKKNIU
                                                                        Forms
                                                                </NavDropdown.Item>
                                                        </Link>
                                                        <Link to="/courses">
                                                                <NavDropdown.Item href="/courses">
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
                                                        <Link to="/events">
                                                                <NavDropdown.Item href="/events">
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
                                        {/* <Link to="/admission">
                                                        <Nav.Link href="/admission">
                                                                Admission
                                                        </Nav.Link>
                                                </Link>
                                                <Link to="/faculty">
                                                        <Nav.Link href="/faculty">
                                                                Faculty
                                                        </Nav.Link>
                                                </Link>
                                                <Link to="/about">
                                                        <Nav.Link href="/about">
                                                                About
                                                        </Nav.Link>
                                                </Link>
                                                <Link to="/contact">
                                                        <Nav.Link href="/contact">
                                                                Contact
                                                        </Nav.Link>
                                                </Link> */}
                                </Nav>
                                {/* <Form inline>
                                                <FormControl
                                                        type="text"
                                                        placeholder="Search"
                                                        className="mr-sm-2"
                                                />
                                                <Button variant="outline-success enroll-btn">
                                                        Enroll
                                                </Button>
                                        </Form> */}
                        </Navbar.Collapse>
                </Navbar>
        );
};
// }

export default Topbar;
