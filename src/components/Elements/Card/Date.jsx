import PropTypes from "prop-types";
import { showFormattedDate } from "../../../utils";

const FormatedDate = (props) => {
  const { createdAt } = props;
  return (
    <p className="font-normal text-sm text-gray-500 dark:text-gray-400">
      {showFormattedDate(createdAt)}
    </p>
  );
};

FormatedDate.propTypes = {
  createdAt: PropTypes.string,
};

export default FormatedDate;
