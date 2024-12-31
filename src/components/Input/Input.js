import React from 'react';

export const Input = React.forwardRef(({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
  validationMessage,
  invalid,
  ...rest
}, ref) => {
  return (
    <label>
      {label}:
      <input
        {...rest}
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {invalid && (
        <small className="input-error-message">{validationMessage}</small>
      )}
    </label>
  );
});