import PropTypes from "prop-types";

const Title = (props) => {
  const { children, classname } = props;
  return <h1 className={classname}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.string,
  classname: PropTypes.string,
};

export default Title;
