import SubTitle from "../Elements/Card/Title";
import FormatedDate from "../Elements/Card/Date";
import Button from "../Elements/Button";
import Content from "../Elements/Card/Content";
import PropTypes from "prop-types";
import { useLocale } from "../../hooks/useLocale";

function DetailNoteForm({ onDeleteHandler, note }) {
  const { locale } = useLocale();

  return (
    <>
      <SubTitle classname="text-4xl font-extrabold text-center mb-4 dark:text-white">
        {note.title}
      </SubTitle>
      <FormatedDate createdAt={note.createdAt} />
      <Content body={note.body} />

      <div className="flex justify-end gap-4 mt-8">
        <Button
          classname={`bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition`}
          type="button"
          onClick={onDeleteHandler}
        >
          {locale === "id" ? "Hapus" : "Delete"}
        </Button>
      </div>
    </>
  );
}

DetailNoteForm.propTypes = {
  onDeleteHandler: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
};

export default DetailNoteForm;
