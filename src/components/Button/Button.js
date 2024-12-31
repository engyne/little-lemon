import './Button.css';

export function Button(props) {

  function getClass() {
    return props.variant === 'primary' ? 'primary-btn' : null;
  }

  return <button
    data-testid="button"
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