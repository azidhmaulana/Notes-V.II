import PropTypes from "prop-types";

const SubTitle = (props) => {
  const { children, classname } = props;
  return <h2 className={classname}>{children}</h2>;
};

SubTitle.propTypes = {
  children: PropTypes.string,
  classname: PropTypes.string,
};
export default SubTitle;
