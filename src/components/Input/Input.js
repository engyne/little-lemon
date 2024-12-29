import React from 'react';

export const Input = React.forwardRef((props, ref) => {
  return (
    <label>
      {props.label}:
      <input
        {...props}
        ref={ref}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
      {props.invalid && (
        <small className="input-error-message">{props.validationMessage}</small>
      )}
    </label>
  );
});