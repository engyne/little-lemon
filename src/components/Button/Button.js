import './Button.css';

export function Button(props) {

  function getClass() {
    return props.variant === 'primary' ? 'primary-btn' : null;
  }

  return <button
    {...props}
    data-testid="button"
    aria-label="On Click"
    disabled={props.disabled}
    onClick={props.onClick} 
    type="button"
    className={[
      getClass(),
      props.className
    ].filter(Boolean).join(' ')}
    >
      {props.children}
    </button>;
}