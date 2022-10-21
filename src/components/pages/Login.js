import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import "./Login.css";
import Aos from "aos/";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [show, setShow] = useState(false);
  const validation = Yup.object().shape({
    email: Yup.string().required("Please enter email").email("Invalid email"),
    password: Yup.string()
      .required("Please enter password")
      .min(7, "Password should be minimum 7 characters"),
  });
  const submitHandler = (value, formHelper) => {
    console.log(value);
    formHelper.resetForm();
    
  };
  return (
    <div className="container login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={submitHandler}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form data-aos="fade-down" data-aos-offset="300">
            <h4>LOGIN TO YOUR ACCOUNT</h4>
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email*"
              size="small"
              className="textField"
              error={errors.email && touched.email}
              helperText={touched.email && errors.email}
            />
            <Box height={25} />
            <Field
              name="password"
              type={`${show ? "text" : "password"}`}
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password*"
              size="small"
              className="textField"
              error={errors.password && touched.password}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {show ? (
                      <VisibilityOffIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShow(!show);
                        }}
                      />
                    ) : (
                      <VisibilityIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShow(!show);
                        }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Box height={25} />
            <Button type="submit" variant="contained">
              Login
            </Button>
            <Box height={25} />
            {/* <Button type="submit" variant="contained" className="signup-google">
              Sign In with Google{" "}
              <FcGoogle style={{ fontSize: "20px", marginLeft: "10px" }} />
            </Button> */}
            <Box height={25} />
            <span>
              Haven't created an account?{" "}
              <NavLink to="/register">Register</NavLink>{" "}
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
