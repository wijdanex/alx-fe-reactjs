import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik user:", values);
          alert("User registered successfully!");
          resetForm();
        }}
      >
        <Form>
          <Field name="username" placeholder="Username" />
          <ErrorMessage
            name="username"
            component="p"
            style={{ color: "red" }}
          />

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage
            name="email"
            component="p"
            style={{ color: "red" }}
          />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage
            name="password"
            component="p"
            style={{ color: "red" }}
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
