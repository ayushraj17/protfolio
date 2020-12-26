import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Textarea(props) {
	const { label, name, ...rest } = props;
	return (
		<div className="form-control">
			<label htmlFor={name} className="label mt-4">
				{label}
			</label>
			<Field
				as="textarea"
				id={name}
				name={name}
				{...rest}
				className="textarea my-2"
			/>
			<ErrorMessage component={TextError} name={name} />
		</div>
	);
}

export default Textarea;
