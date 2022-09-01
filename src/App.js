import "./App.css";
import { About } from "./Component/AboutMe/About";
import { Contact } from "./Component/ContactUs/Contact";
import { Header } from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import { Projects } from "./Component/Projects/Projects";
import { Skills } from "./Component/Skills/Skills";
import React, { useRef } from "react";

function App() {
    const scollToRef1 = useRef();
    const scollToRef2 = useRef();
    const scollToRef3 = useRef();
    const scollToRef4 = useRef();
    const scollToRef5 = useRef();

    const scroll1 = () => {
        scollToRef1.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const scroll2 = () => {
        scollToRef2.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const scroll3 = () => {
        scollToRef3.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const scroll4 = () => {
        scollToRef4.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const scroll5 = () => {
        scollToRef5.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <div className="App">
            <Navbar
                scroll1={scroll1}
                scroll2={scroll2}
                scroll3={scroll3}
                scroll4={scroll4}
                scroll5={scroll5}
            />
            <Header reff={scollToRef1} />
            <About reff={scollToRef2} />
            <Skills reff={scollToRef3} />
            <Projects reff={scollToRef4} />
            <Contact reff={scollToRef5} />
        </div>
    );
}

export default App;
