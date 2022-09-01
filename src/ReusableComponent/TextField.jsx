import React, { memo, useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextfieldWrapper = memo(({ name, ...otherProps }) => {
    const [field, mata] = useField(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    var configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: "outlined",
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
        if ((configTextfield.error = true && name)) {
            configTextfield.setdetectError(true);
        } 
        // else if ((configTextfield.error = true && name === "user_email")) {
        //     configTextfield.setdetectError2(true);
        // } else if ((configTextfield.error = true && name === "message")) {
        //     configTextfield.setdetectError3(true);
        // }
    }

    useEffect(() => {
        if (mata.value && mata.error === undefined) {
            if (name) {
                configTextfield.setdetectError(false);
            } 
            // else if (name === "user_email") {
            //     configTextfield.setdetectError2(false);
            // } else if (name === "message") {
            //     configTextfield.setdetectError3(false);
            // }
        }
    }, [mata.value, mata.error, name, configTextfield]);

    return <TextField {...configTextfield} />;
});

export default TextfieldWrapper;
