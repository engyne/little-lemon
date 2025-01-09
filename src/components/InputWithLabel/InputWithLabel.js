import { forwardRef } from 'react';

export const InputWithLabel = forwardRef(({
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
        data-testid="input-with-label"
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        {...rest}
      />
      {invalid && (
        <small className="input-error-message" data-testid="error-msg">{validationMessage}</small>
      )}
    </label>
  );
});