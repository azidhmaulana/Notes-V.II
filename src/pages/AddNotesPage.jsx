import FormInputNotes from "../components/Fragments/FormInputNotes";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import Title from "../components/Elements/Title";
import { useLocale } from "../hooks/useLocale";

const AddNotesPage = () => {
  const navigate = useNavigate();
  const { locale } = useLocale();

  async function onAddNotesHandler(notes) {
    await addNote(notes);
    navigate("/");
  }
  return (
    <div className="w-full max-w-xl p-6 mx-auto py-6 mt-6 mb-4 space-y-6">
      <Title classname="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        {locale === "id" ? "Tambah Catatan" : "Add Note"}
      </Title>
      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 ">
        <FormInputNotes addNote={onAddNotesHandler} />
      </div>
    </div>
  );
};

export default AddNotesPage;
