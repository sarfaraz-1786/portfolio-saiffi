import React, { useEffect, useRef } from "react";
import "./About.css";
import Grid from "@material-ui/core/Grid";

//Aos package
import Aos from "aos";
import "aos/dist/aos.css";

//image
import MyImg from "../../Img/bobby.jpg";

export const About = ({reff}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <Grid
            container
            className="AboutContainer"
            alignItems="center"
           
        >
            <Grid item xs={12} sm={6} className="AboutC1">
                <div data-aos="fade-right" className="AboutImgOuter" >
                    <div className="AboutImgInner " ref={reff}>
                        <img src={MyImg} className="myImg" />
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <div data-aos="fade-left">
                    <div className="AboutHeading">About Me</div>
                    <div className="AboutContent" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ipsam quibusdam.
                        Optio, voluptatum architecto adipisci quod voluptatem, ipsum earum, quibusdam accusa
                        ntium quae sit autem! Reprehenderit!
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};
