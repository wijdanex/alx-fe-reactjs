// src/components/formikForm/FormikForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // Mock API - simulate registration
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log("Formik submit response:", data);
      alert("Registration (Formik) successful!");
      resetForm();
    } catch (err) {
      console.error("Formik submit error:", err);
      alert("Submission failed. Check console.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: "32px auto", padding: 16 }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <label>
              Username
              <Field name="username" placeholder="Username" />
            </label>
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />

            <label>
              Email
              <Field name="email" type="email" placeholder="Email" />
            </label>
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />

            <label>
              Password
              <Field name="password" type="password" placeholder="Password" />
            </label>
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
