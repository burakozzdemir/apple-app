/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { LoginEvent } from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(LoginEvent());
      const newLocal = "/home";
      navigate(newLocal, { replace: true });
    },
  });
  return (
    <>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-wrapper">
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="User Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
          </div>

          {formik.touched.userName && formik.errors.userName ? (
            <p>{formik.errors.userName}</p>
          ) : null}

          <div className="input-wrapper">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>

          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}

          <a>Forgot your password?</a>
          <button className="login-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
