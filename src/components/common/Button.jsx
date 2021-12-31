import { isDisabled } from "@testing-library/user-event/dist/utils";

function Button({ type, children, isDisabled, version }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  version: "primary",
  type: "submit",
  isDisabled: true,
};
