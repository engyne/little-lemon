import './Button.css';

export function Button(props) {
  return <button
    disabled={props.disabled} 
    onClick={props.onClick} 
    className={[ props.type === 'primary' && 'primary-btn']}
    >
      {props.children}
    </button>;
}