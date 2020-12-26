import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";
const Contact = () => {
	const validationSchema = Yup.object({
		fullName: Yup.string()
			.min(2, "Too Short!")
			.max(70, "Too Long!")
			.required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
	});
	return (
		<section className="section">
			<div className="container">
				<Formik
					onSubmit={(values, submitProps) => {
						axios({
							method: "POST",
							url: "https://formspree.io/f/xjvpgajj",
							data: values,
						})
							.then((response) => {
								submitProps.setSubmitting(false);
								submitProps.resetForm();
								// handleServerResponse(true, "Thanks!");
							})
							.catch((error) => {
								submitProps.setSubmitting(false);
								// handleServerResponse(false, error.response.data.error);
							});
					}}
					initialValues={{
						fullName: "",
						email: "",
						message: "",
					}}
					validationSchema={validationSchema}
				>
					{(formik) => {
						// console.log(formik);
						return (
							<Form>
								<FormikControl
									control="input"
									type="text"
									label="Full Name"
									name="fullName"
									placeholder="Full Name"
									formik={formik}
								/>
								<FormikControl
									control="input"
									type="email"
									label="Email"
									name="email"
									placeholder="Email"
									formik={formik}
								/>
								<FormikControl
									control="textarea"
									type="textarea"
									label="Message"
									name="message"
									placeholder="Type your message here"
									formik={formik}
								/>
								<button
									type="submit"
									className="button is-primary mt-4 is-fullwidth "
									disabled={!formik.dirty || formik.isSubmitting}
								>
									<span className="icon is-small mx-2">
										<FaEnvelope />
									</span>
									Send Message
								</button>
							</Form>
						);
					}}
				</Formik>
			</div>
		</section>
	);
};

export default Contact;
