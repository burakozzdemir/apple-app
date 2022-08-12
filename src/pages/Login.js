import React from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginEvent } from "../reduxToolkit/features/loginSlice"
import CartFlip from "../components/CartFlip";

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
        .max(15, "Too Long!")
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .max(15, "Too Long!")
        .required("Required"),
    }),
    onSubmit: () => {
      dispatch(loginEvent());
      navigate("/addcart", { replace: true });
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
            <p className="login-required">{formik.errors.userName}</p>
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
            <p className="login-required-one">{formik.errors.password}</p>
          ) : null}

          <Link to="">Forgot your password?</Link>
          <CartFlip>
            <button className="login-button" type="submit">
              Submit
            </button>
          </CartFlip>
        </form>
      </div>
    </>
  );
};

export default Login;
