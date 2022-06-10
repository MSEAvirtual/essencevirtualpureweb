
/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React from "react";
import { useFormik } from "formik";
import { object, string } from "yup";

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */
const ADMIN_EMAIL = "access@essence.com";
const ADMIN_PASSWORD = "access@essence.com";

const AuthModal = ({ setAuth }: any) => {

    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        // setFieldValue,
        // isSubmitting,
        setSubmitting,
        // isValid,
        errors,
        touched,
        resetForm
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: object().shape({
            email: string().email("Invalid email address").required("Field is required"),
            password: string().required("Password is required"),
        }),
        onSubmit: async (formData: any) => {
            setSubmitting(true);
            if (formData.email === ADMIN_EMAIL && formData.password === ADMIN_PASSWORD) {
                setAuth(true);
            } else {
                alert("401 Error: Invalid Authentication")
                resetForm();
            }
        },
    });
    return (
        <div className="form-view">
            <h3>Login to proceed</h3>
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur} 
                    />
                    {touched.email && errors.email && (
                        <p className="text-danger">{errors.email}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password..."
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                    />
                    {touched.password && errors.password && (
                        <p className="text-danger">{errors.password}</p>
                    )}
                </div>
                <button className="ui button" type="submit">Login</button>
            </form>
        </div>
    )
};

export default AuthModal;