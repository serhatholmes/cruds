import classNames from "classnames";

const Button = ({ className, disabled, onClick, label }) => {
  return (
    <button
      className={classNames("px-4 py-2  shadow-2xl shadow-black ", className)}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
