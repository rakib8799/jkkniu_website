import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import Contact from "./components/contact/Contact";
import Department from "./components/Department/Department";
import IndividualDepartment from "./components/Department/IndividualDepartment";
import Event from "./components/Events/Event";
import FacultyPage from "./components/Faculty/FacultyPage";
// import AllIsues from "./components/Journals/AllIsues";
import CurrentIssue from "./components/Journals/CurrentIssue";
import Journals from "./components/Journals/Journals";
import JournalsDetails from "./components/Journals/JournalsDetails";
import PreviousIssue from "./components/Journals/PreviousIssue";
import News from "./components/News/News";
import Notify from "./components/Notification/Notify";
import About from "./container/about/About";
import AboutPage from "./container/about/AboutPage";
// import Count from "./container/count/Count";
import Courses from "./container/courses/Courses";
// import TeacherSection from "./container/courses/TeacherSection";
import Footer from "./container/footer/Footer";
import FullGallery from "./container/gallery/FullGallery";
import PhotoGallary from "./container/gallery/PhotoGallery";
import Slider from "./container/header/Slider";
// import Topbar from "./container/header/Topbar";
import Topbar2 from "./container/header/Topbar2";
import Info from "./container/info/Info";
import InfoPage from "./container/info/InfoPage";
// import LatestEvents from "./container/Messages/LatestEvents";
import Message from "./container/Messages/Message";
import Notice from "./container/Messages/Notice";
import VideoPage from "./container/videoSection/VideoPage";

const App = () => {
        useEffect(() => {
                AOS.init({
                        duration: 900,
                });
        }, []);
        return (
                <div className="App">
                        <Topbar2 />
                        <Switch>
                                <Route exact path="/">
                                        <Slider />
                                        <Info />
                                        <About />
                                        {/* <TeacherSection /> */}
                                        <Message />
                                        {/* <LatestEvents /> */}
                                        <VideoPage />
                                        {/* <Count /> */}
                                        <Notice />
                                        {/* <Courses /> */}
                                        <PhotoGallary />
                                </Route>
                                <Route exact path="/about">
                                        <AboutPage />
                                </Route>
                                <Route exact path="/gallery">
                                        <FullGallery />
                                </Route>
                                <Route exact path="/courses">
                                        <Courses />
                                </Route>
                                <Route exact path="/events">
                                        <Event />
                                </Route>
                                <Route exact path="/news">
                                        <News />
                                </Route>
                                <Route exact path="/notification">
                                        <Notify />
                                </Route>
                                <Route exact path="/faculty">
                                        <FacultyPage />
                                </Route>
                                <Route exact path="/faculty/:faculty">
                                        <Department />
                                </Route>
                                <Route exact path="/department/:department">
                                        <IndividualDepartment />
                                </Route>
                                <Route exact path="/journals">
                                        <Journals />
                                </Route>
                                <Route exact path="/journals/:journalDetails">
                                        <JournalsDetails />
                                </Route>
                                <Route exact path="/vc_sir/message">
                                        <InfoPage />
                                </Route>
                                {/* <Route exact path="">
                                                        <Courses />
                                                </Route> */}
                                <Route exact path="/contact">
                                        <Contact />
                                </Route>
                                <Route exact path="/all-issues">
                                        {/* <AllIsues /> */}
                                        <JournalsDetails />
                                </Route>
                                <Route exact path="/current-issue">
                                        <CurrentIssue />
                                </Route>
                                <Route exact path="/previous-issue">
                                        <PreviousIssue />
                                </Route>
                                <Route exact path="/signup">
                                        <SignUp />
                                </Route>
                                <Route exact path="/login">
                                        <Login />
                                </Route>
                        </Switch>
                        <Footer />
                </div>
        );
};

export default App;
