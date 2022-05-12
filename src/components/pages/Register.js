import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import "./Register.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const initialValues = {
    name: "",
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  };

  const submitHandler = (values, formikhelper) => {
    console.log(values);
    formikhelper.resetForm();
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validation = Yup.object().shape({
    email: Yup.string().required("Please enter email").email("Invalid email"),
    name: Yup.string().required("Please enter name").min(2, "Name too short"),
    contact: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Please enter phone number")
      .min(10, "Incomplete phone number")
      .max(10, "Cannot exceed 10 characters"),
    username: Yup.string()
      .required("Please enter username")
      .min(4, "Username too short"),
    password: Yup.string()
      .required("Please enter password")
      .min(7, "Password should be minimum 7 characters"),
    confirmPassword: Yup.string()
      .required("Please enter password")
      .min(7, "Password should be minimum 7 characters"),
  });
  return (
    <div className="container register-container">
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validation}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form data-aos="fade-down" data-aos-offset="300">
            <h4>REGISTER YOUR ACCOUNT</h4>
            <Field
              name="name"
              type="name"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Name*"
              size="small"
              className="textField"
              error={errors.name && touched.name}
              helperText={touched.name && errors.name}
            />
            <Box height={16} />
            <Field
              name="username"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Username*"
              size="small"
              className="textField"
              error={errors.username && touched.username}
              helperText={touched.username && errors.username}
            />
            <Box height={16} />
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

            <Box height={16} />
            <Field
              name="contact"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Contact*"
              size="small"
              className="textField"
              error={errors.contact && touched.contact}
              helperText={touched.contact && errors.contact}
            />
            <Box height={16} />
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
            <Box height={16} />
            <Field
              name="confirmPassword"
              type={`${show1 ? "text" : "password"}`}
              as={TextField}
              variant="outlined"
              color="primary"
              label="Confirm Password*"
              size="small"
              className="textField"
              error={errors.confirmPassword && touched.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {show1 ? (
                      <VisibilityOffIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShow1(!show1);
                        }}
                      />
                    ) : (
                      <VisibilityIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShow1(!show1);
                        }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Box height={16} />
            <Button type="submit" variant="contained">
              Signup
            </Button>
            <Box height={16} />
            <Button type="submit" variant="contained" className="signup-google">
              Sign Up with Google{" "}
              <FcGoogle style={{ fontSize: "20px", marginLeft: "10px" }} />
            </Button>
            <Box height={16} />
            <span>
              Aready created an account? <NavLink to="/login">Sign In</NavLink>{" "}
            </span>
            <Box height={20} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;

// <form>
//         <TextField
//           id="outlined-basic"
//           label="Full Name"
//           variant="outlined"
//           className="textField"
//           size="small"
//         />
//         <TextField
//           id="outlined-basic"
//           label="Username"
//           variant="outlined"
//           className="textField"
//           size="small"
//         />
//         <TextField
//           id="outlined-basic"
//           label="Email"
//           variant="outlined"
//           className="textField"
//           size="small"
//         />
//         <TextField
//           id="outlined-basic"
//           label="Contact no"
//           variant="outlined"
//           className="textField"
//           size="small"
//         />
//         <TextField
//           id="outlined-basic"
//           label="Password"
//           variant="outlined"
//           className="textField"
//           size="small"
//           type={`${show ? "text" : "password"}`}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 {show ? (
//                   <VisibilityOffIcon
//                     style={{ cursor: "pointer" }}
//                     onClick={() => {
//                       setShow(!show);
//                     }}
//                   />
//                 ) : (
//                   <VisibilityIcon
//                     style={{ cursor: "pointer" }}
//                     onClick={() => {
//                       setShow(!show);
//                     }}
//                   />
//                 )}
//               </InputAdornment>
//             ),
//           }}
//         />
//         <TextField
//           id="outlined-basic"
//           label="Confirm Password"
//           variant="outlined"
//           className="textField"
//           size="small"
//           type={`${show1 ? "text" : "password"}`}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 {show1 ? (
//                   <VisibilityOffIcon
//                     style={{ cursor: "pointer" }}
//                     onClick={() => {
//                       setShow1(!show1);
//                     }}
//                   />
//                 ) : (
//                   <VisibilityIcon
//                     style={{ cursor: "pointer" }}
//                     onClick={() => {
//                       setShow1(!show1);
//                     }}
//                   />
//                 )}
//               </InputAdornment>
//             ),
//           }}
//         />
//         <button>Register</button>
//       </form>
