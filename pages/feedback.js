import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../styles/Feedback.module.css";
import { useFormik } from "formik";
import { Button } from "@mui/material";

export default function Feedback() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 20) {
      errors.name = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      formik.handleReset();
    },
  });
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>FEEDBACK</title>
        </Head>
        <div className={styles.feedbackBody}>Welcome to feedback Page</div>
        <div className={styles.form}>Users Form</div>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="name"
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <Button
            variant="outlined"
            onClick={formik.handleSubmit}
            style={{ marginLeft: "10px", marginTop: "10px" }}
            disabled={formik.errors.name || formik.errors.email ? true : false}
          >
            Submit Form
          </Button>
        </Box>
      </div>
    </>
  );
}
