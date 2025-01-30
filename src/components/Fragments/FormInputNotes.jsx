import { useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import TextAreaForm from "../Elements/TextArea";
import PropTypes from "prop-types";
import { useLocale } from "../../hooks/useLocale";

function FormInputNotes({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { locale } = useLocale();

  const maxTitleLength = 50;
  const remainingTitleLength = maxTitleLength - title.length;

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= maxTitleLength) {
      setTitle(newTitle);
    }
  };

  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    addNote({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <>
      <p className="font-sm text-slate-500 mb-4 text-right">
        {locale === "id" ? "Sisa Karakter : " : "Remaining Characters : "}{" "}
        <span className="font-bold">{remainingTitleLength}</span>
      </p>
      <form onSubmit={onSubmitForm}>
        <InputForm
          id="title"
          type="text"
          placeholder={
            locale === "id"
              ? "Tulis judul catatanmu ..."
              : "The title of your note ... "
          }
          classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:text-slate-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={title}
          onChange={onTitleChange}
        />
        <TextAreaForm
          placeholder={
            locale === "id"
              ? "Tulis isi catatanmu ..."
              : "The content of your note ... "
          }
          classname="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={body}
          onChange={onBodyChange}
        />
        <Button
          classname="w-full h-10 px-6 font-semibold rounded-md bg-sky-500 text-white"
          type="submit"
        >
          {locale == "id" ? "Simpan" : "Save"}
        </Button>
      </form>
    </>
  );
}

FormInputNotes.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default FormInputNotes;
