import './Button.css';

function Button(props) {
  return (
    <input type="button" value={props.label} className="Button" />
  )
}

export default Button;