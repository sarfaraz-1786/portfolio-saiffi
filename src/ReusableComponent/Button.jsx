import React from "react";
import { Button } from "@material-ui/core";
import { useFormikContext } from "formik"

const ButtonWrapper = ({ children, ...otherProps }) => {
    const {formSubmit} = useFormikContext();

    const handleSubmit = () => {
        formSubmit();
    }
    
    const configButton = {
        ...otherProps,
        variant: "contained",
        fullWidth: true,
        onclick: handleSubmit
    }
    return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
