import "./button.css";

const Button = ({ children, onClick, variant, ...rest }) => {
  return (
    <button
      className={`button${variant ? ` button--${variant}` : ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
