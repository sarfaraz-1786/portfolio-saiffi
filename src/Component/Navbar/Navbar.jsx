import React from "react";
import "./Navbar.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Navbar({ scroll1, scroll2, scroll3, scroll4, scroll5 }) {
    const isXs = useMediaQuery("(min-width:900px)");
    return (
        <>
            {isXs && (
                <>
                    <CssBaseline />
                    <AppBar>
                        <Toolbar className="navContainer">
                            <div className="navLink" onClick={scroll1}>
                                Header
                            </div>
                            <div className="navLink" onClick={scroll2}>
                                About
                            </div>
                            <div className="navLink" onClick={scroll3}>
                                Skill
                            </div>
                            <div className="navLink" onClick={scroll4}>
                                Project
                            </div>
                            <div className="navLink" onClick={scroll5}>
                                Contact Us
                            </div>
                        </Toolbar>
                    </AppBar>
                </>
            )}
        </>
    );
}
