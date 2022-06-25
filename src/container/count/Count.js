// import AOS from "aos";
// import "aos/dist/aos.css";
import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
import CountUp from "react-countup";

const Count = () => {
        return (
                <section style={{ backgroundColor: "#fff" }}>
                        <div>
                                <CountUp start={0} end={10000}></CountUp>
                                <span>+ Students</span>
                        </div>
                </section>
        );
};
export default Count;
