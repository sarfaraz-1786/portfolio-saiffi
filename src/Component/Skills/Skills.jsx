import React, { useEffect } from "react";
import "./Skills.css";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";
//Aos package
import Aos from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
    display: inline-block;
    padding: 3em;
    background: #c7d2fe66;
    border-radius: 10px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-clip: border-box;
    cursor: pointer;
`;

export const Skills = ({reff}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="SkillsOuterDiv" ref={reff}>
            <Grid
                container
                spacing={2}
                className="skillsContainer"
                alignItems="center"
            >
                <Grid item xs={12} sm={6} md={4} lg={3} className="cardDiv" data-aos="fade-right">
                    <Container className="card">
                        <h3 className="cardTitle" >ReactJs</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias eligendi
                            inventore nisi pariatur. Quisquam, fugiat? Ad inventore repellat vel at velit
                            deleniti voluptatibus suscipit!
                        </p>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="cardDiv" data-aos="fade-right">
                    <Container className="card">
                        <h3 className="cardTitle">ReactJs</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias eligendi
                            inventore nisi pariatur. Quisquam, fugiat? Ad inventore repellat vel at velit
                            deleniti voluptatibus suscipit!
                        </p>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="cardDiv" data-aos="fade-left">
                    <Container className="card">
                        <h3 className="cardTitle">ReactJs</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias eligendi
                            inventore nisi pariatur. Quisquam, fugiat? Ad inventore repellat vel at velit
                            deleniti voluptatibus suscipit!
                        </p>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="cardDiv" data-aos="fade-left">
                    <Container className="card">
                        <h3 className="cardTitle">ReactJs</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias eligendi
                            inventore nisi pariatur. Quisquam, fugiat? Ad inventore repellat vel at velit
                            deleniti voluptatibus suscipit!
                        </p>
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
};
