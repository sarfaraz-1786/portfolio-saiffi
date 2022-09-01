import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
//icons
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import emailjs from "@emailjs/browser";
//feilds
import { Grid, Paper } from "@material-ui/core";
import TextfieldWrapper from "../../ReusableComponent/TextField";
import ButtonWrapper from "../../ReusableComponent/Button";
//Formik & Yup
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export const Contact = ({ reff }) => {
    const form = useRef();
    const [detectError1, setdetectError1] = useState(true);
    const [detectError2, setdetectError2] = useState(true);
    const [detectError3, setdetectError3] = useState(true);

    useEffect(() => {
        const a = [1, 5, 4, 1];
        let k = a.length;
        let array2 = [];
        function sortMin() {
            for (let i = 0; i < a.length; i++) {
                let b = a.every((x) => {
                    if (x === a[i]) {
                        return true;
                    } else {
                        return x > a[i];
                    }
                });
                if (a.length === 2) {
                    if (a[0] > a[1]) {
                        array2.push(a[1]);
                        array2.push(a[0]);
                    }
                }
                console.log(a, array2, k);
                if (b) {
                    if (k !== 0 && a.length !== 2) {
                        array2.push(a.splice(i, 1)[0]);
                        i = 0;
                        k--;
                    }
                }
            }
            return array2;
        }
        console.log(sortMin());
    }, []);
    //formik default Value
    const defaultValue = {
        user_name: "",
        user_email: "",
        message: "",
    };
    //schema-for-Forms-YUP
    const validationSchema = yup.object().shape({
        user_name: yup.string().required("Please enter your userName").min(4, "Enter atleast 4 char").max(8,"max lagade"),
        user_email: yup.string().required("Please enter your Email").email("Please your Valid Email Address"),
        message: yup.string().required("Please enter message that has to be sent"),
    });

    //email service
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_8dp9q3n", "template_7oytriu", form.current, "user_6cHVmokPuCbm0SdamIhdA")
            .then(
                (result) => {
                    alert(result.text);
                },
                (error) => {
                    alert(error.text);
                }
            );
    };
    return (
        <Grid container>
            <Grid item xs={12}>
                <div className="contactContainer" ref={reff}>
                    <Paper className="ContactPaper">
                        <Grid container style={{ height: "100%" }}>
                            <Grid item xs={12} sm={6} style={{ position: "relative" }}>
                                <img
                                    src="data:image/jpeg;base64,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"
                                    className="CCImage"
                                />
                                <div className="positionCC1">
                                    <div className="ccImageText">
                                        <ContactMailOutlinedIcon className="ccImage" />
                                        <div style={{ marginLeft: "12px" }}>
                                            <h2 className="textCC">Address</h2>
                                            <p style={{ color: "#6d6e71", fontSize: "12px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Deleniti, et.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ccImageText">
                                        <CallOutlinedIcon className="ccImage" />
                                        <div style={{ marginLeft: "12px" }}>
                                            <h2 className="textCC">Let's Talk</h2>
                                            <p style={{ color: "#6d6e71", fontSize: "12px" }}>+91 00000000</p>
                                        </div>
                                    </div>
                                    <div className="ccImageText">
                                        <ContactSupportOutlinedIcon className="ccImage" />
                                        <div style={{ marginLeft: "12px" }}>
                                            <h2 className="textCC">Contact Suppport</h2>
                                            <p style={{ color: "#6d6e71", fontSize: "12px" }}>
                                                Lorem ipsum dolor sit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div style={{ padding: "32px" }}>
                                    <h1 className="Cheading mtCC">Contact Us</h1>
                                    <Formik initialValues={defaultValue} validationSchema={validationSchema}>
                                        <Form
                                            autoComplete="off"
                                            className="form"
                                            ref={form}
                                            onSubmit={sendEmail}
                                        >
                                            <TextfieldWrapper
                                                autoComplete="off"
                                                className="mtCC "
                                                label="Name"
                                                name="user_name"
                                                detectError1={detectError1}
                                                setdetectError={setdetectError1}
                                                
                                            />
                                            <TextfieldWrapper
                                                autoComplete="off"
                                                className="mtCC "
                                                label="Email"
                                                name="user_email"
                                                detectError2={detectError2}
                                                setdetectError={setdetectError2}
                                            />
                                            <TextfieldWrapper
                                                className="mtCC"
                                                multiline={true}
                                                rows={4}
                                                name="message"
                                                label="Message"
                                                autoComplete="off"
                                                detectError3={detectError3}
                                                setdetectError={setdetectError3}
                                            />
                                            <ButtonWrapper
                                                color="primary"
                                                className="mtCCButton"
                                                value="Send"
                                                type="submit"
                                                disabled={
                                                    detectError1 || detectError2 || detectError3
                                                        ? true
                                                        : false
                                                }
                                            >
                                                Submit
                                                
                                            </ButtonWrapper>
                                            
                                        </Form> 
                                    </Formik>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Grid>
        </Grid>
    );
};
