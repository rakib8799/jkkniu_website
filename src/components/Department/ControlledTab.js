import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import OfficersWithStuffs from "./OfficersWithStuffs";
import Teachers from "./Teachers";

const ControlledTab = () => {
        const [key, setKey] = useState("home");
        return (
                <div>
                        <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                        >
                                {/* <Tab eventKey="home" title="Home">
                                        <h2>Ami</h2>
                                </Tab> */}
                                <Tab
                                        eventKey="deptHead"
                                        title="Message from Department Head"
                                >
                                        <h2> Message from Department Head</h2>
                                </Tab>
                                <Tab eventKey="notice" title="Notice Board">
                                        <h2>Notice Board</h2>
                                </Tab>
                                <Tab eventKey="teachers" title="Our Teachers">
                                        <Teachers />
                                </Tab>
                                <Tab
                                        eventKey="officers"
                                        title="Officers & Staffs"
                                >
                                        <OfficersWithStuffs />
                                </Tab>
                                <Tab eventKey="alumni" title="Alumni">
                                        <h2>Alumni</h2>
                                </Tab>
                        </Tabs>
                </div>
        );
};

export default ControlledTab;
