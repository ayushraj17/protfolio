import React from "react";

function InputWithEdit(props) {
	const { error, ...rest } = props;
	return (
		<input
			className={`input my-2 ${error ? "is-danger" : "is-grey"}`}
			{...rest}
		/>
	);
}

export default InputWithEdit;
