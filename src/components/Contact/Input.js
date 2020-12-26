import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import CustomInput from "./CustomInput";

function Input(props) {
	const { label, name, ...rest } = props;

	const [error, setError] = useState(false);
	React.useEffect(() => {
		if (props.formik) {
			if (props.formik.touched[name]) {
				if (props.formik.errors[name]) return setError(true);
				else return setError(false);
			}
		}
	}, [props.formik, name]);

	return (
		<div className="form-control">
			<label htmlFor={name} className="label mt-4">
				{label}
			</label>
			<Field id={name} name={name} {...rest} as={CustomInput} error={error} />
			<ErrorMessage component={TextError} name={name} />
		</div>
	);
}

export default Input;
