import Button from "../Elements/Button";
import TextAreaForm from "../Elements/TextArea/TextArea";
import InputForm from "../Elements/Input";
import PropTypes from "prop-types";

function EditDetailNoteForm({
  setIsEditing,
  onEditHandler,
  setBody,
  setTitle,
  title,
  body,
}) {
  return (
    <div>
      <div className="mt-6">
        <InputForm
          id="title"
          type="text"
          placeholder="Tulis judul catatanmu ..."
          classname="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <TextAreaForm
          placeholder="Tulis isi catatanmu ..."
          classname="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <Button
          classname={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition`}
          type="button"
          onClick={onEditHandler}
        >
          Simpan
        </Button>
        <Button
          classname={`bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition`}
          type="button"
          onClick={() => setIsEditing(false)}
        >
          Batal
        </Button>
      </div>
    </div>
  );
}

EditDetailNoteForm.propTypes = {
  setIsEditing: PropTypes.func,
  onEditHandler: PropTypes.func,
  setBody: PropTypes.func,
  setTitle: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default EditDetailNoteForm;
