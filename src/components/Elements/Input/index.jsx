import Input from "./Input";
import PropTypes from "prop-types";

const InputForm = (props) => {
  const { id, type, placeholder, classname, value, onChange } = props;
  return (
    <div className="mb-6">
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        classname={classname}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputForm.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.node,
  classname: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputForm;
