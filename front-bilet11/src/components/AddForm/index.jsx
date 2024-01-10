import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { useNavigate } from "react-router-dom";
export const AddForm = () => {
  const navigate = useNavigate();
  function handleSubmit(values) {
    fetch("http://localhost:3100/services", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    }).then((x) => navigate("/"));
  }
  return (
    <Formik
      initialValues={{ icon: "", title: "", text: "" }}
      validationSchema={Yup.object({
        icon: Yup.string().required("Required"),
        title: Yup.string().required("Required"),
        text: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <div className="add_form">
          <div className="form_input">
            <h4>
              <label htmlFor="icon">Icon </label>
            </h4>
            <div>
              <Field name="icon" type="text" />
            </div>
            <p>
              <ErrorMessage name="icon" />
            </p>
          </div>

          <div className="form_input">
            <h4>
              <label htmlFor="title">Title</label>
            </h4>
            <div>
              <Field name="title" type="text" />
            </div>
            <p>
              <ErrorMessage name="title" />
            </p>
          </div>

          <div className="form_input">
            <h4>
              <label htmlFor="text">Text</label>
            </h4>
            <div>
              <Field name="text" type="text" />
            </div>
            <p>
              <ErrorMessage name="text" />
            </p>
          </div>

          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};
