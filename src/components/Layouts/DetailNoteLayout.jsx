import PropTypes from "prop-types";
import DetailNoteForm from "../Fragments/DetailNoteForm";

function DetailNoteLayout({ onDeleteHandler, note }) {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {DetailNoteForm({
        onDeleteHandler,
        note,
      })}
    </div>
  );
}

DetailNoteLayout.propTypes = {
  onDeleteHandler: PropTypes.func,
  note: PropTypes.object,
};

export default DetailNoteLayout;
