import PropTypes from "prop-types";

const Content = (props) => {
  const { body } = props;
  return (
    <p className="font-normal text-gray-700 dark:text-gray-400 ">{body}</p>
  );
};

Content.propTypes = { body: PropTypes.string };
export default Content;
