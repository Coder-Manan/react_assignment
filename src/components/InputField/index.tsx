import React from "react";
import InputFieldProps from "../../types/inputFieldPropType";

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
    const {type, id, label} = props;
    return (
        <div>
            <label>{label}</label>
            <input type={type} id={id}></input>
        </div>
    );
}

export default InputField;