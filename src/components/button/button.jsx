import "./button.css";

const Button = ({ children, onClick, variant }) => {
  return (
    <button
      className={`button${variant ? ` button--${variant}` : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
