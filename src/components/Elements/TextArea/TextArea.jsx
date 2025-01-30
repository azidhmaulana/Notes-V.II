import PropTypes from "prop-types";

const TextArea = (props) => {
  const {
    classname = "block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder,
    value,
    onChange,
  } = props;
  return (
    <textarea
      id="message"
      rows="9"
      className={classname}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

TextArea.propTypes = {
  classname: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
