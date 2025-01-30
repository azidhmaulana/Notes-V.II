import Icon from "./Icon";
import InputForm from "../Input";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  const { classname, placeholder, id, type, onChange, keyword } = props;
  return (
    <div className="relative hidden md:block">
      <Icon />
      <InputForm
        type={type}
        id={id}
        classname={classname}
        placeholder={placeholder}
        value={keyword}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

SearchForm.propTypes = {
  classname: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  keyword: PropTypes.string,
};

export default SearchForm;
