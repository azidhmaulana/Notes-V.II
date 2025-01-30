import TextArea from "./TextArea";
import PropTypes from "prop-types";

const TextAreaForm = (props) => {
  const { placeholder, classname, value, onChange } = props;
  return (
    <div className="mb-6">
      <TextArea
        placeholder={placeholder}
        classname={classname}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextAreaForm.propTypes = {
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextAreaForm;
