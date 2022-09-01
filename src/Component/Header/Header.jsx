import React from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";

export const Header = ({ reff }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <div className="headerOuter" ref={reff}>
                    <div class="header__text-box">
                        <h1 class="header__primary">
                            <span class="header__primary--first">Hi,My name is </span>
                            <span class="header__primary--second">Sarfaraz</span>
                        </h1>
                        <div className="header-title">
                            <div className="header-title-wrapper">
                                <div className="header-item">Developer</div>
                                <div className="header-item">Designer</div>
                                <div className="header-item">Creator</div>
                                <div className="header-item">Pc Gamer</div>
                                <div className="header-item">Youtuber</div>
                            </div>
                        </div>
                        <a href="#" target="_blank" class=" btn btn--color btn--animated">
                            button
                        </a>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};
