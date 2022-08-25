import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const Contact = () => (
  <>
    <div className="contact">
      <h2>Contact</h2>
      <Formik initialValues={{ firstName: "", lastName: "", email: "" }}>
        <Form>
          <Field
            name="firstName"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
          <Field
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Last Name"
          />
          <Field name="email" type="email" id="email" placeholder="Email" />
          <TextareaAutosize
            maxRows={5}
            aria-label="maximum height"
            placeholder="Message"
            style={{
              width: 301,
              height: 80,
              fontSize: "1.2rem",
              fontFamily: "sans-serif",
              paddingLeft: "0.6rem",
              borderRadius: "0.3rem"
            }}
          />
          <Link to="/contact">
            <button className="contact_button">Submit</button>
          </Link>
        </Form>
      </Formik>
    </div>
  </>
);

export default Contact;
