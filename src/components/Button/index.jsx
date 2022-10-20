import "./style.css";

export default function Button(props) {
  return (
    <input
      className={props.selected ? "active" : ""}
      type={props.type}
      value={props.value}
      label={props.label}
      placeholder={props?.placeholder}
      {...props}
    />
  );
}
