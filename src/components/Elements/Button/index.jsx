import PropTypes from "prop-types";

const Button = (props) => {
  const { children, classname, type, onClick, isSubmitDisabled } = props;
  return (
    <button
      className={classname}
      disabled={isSubmitDisabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isSubmitDisabled: PropTypes.bool,
};

export default Button;
``;
