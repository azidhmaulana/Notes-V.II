import { useParams, useNavigate } from "react-router-dom";
import { deleteNote, getNote } from "../utils/network-data";
import { useState, useEffect } from "react";
import DetailNoteLayout from "../components/Layouts/DetailNoteLayout";
import LoadingForm from "../components/Elements/Loading";
import { useLocale } from "../hooks/useLocale";

function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { locale } = useLocale();

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      } else {
        setNote(null);
      }
      setLoading(false);
    };

    fetchNote();
  }, [id]);

  const onDeleteHandler = async () => {
    await deleteNote(id);
    navigate(-1);
  };

  if (loading) {
    return <LoadingForm />;
  }

  if (!note) {
    return (
      <main className="w-full pt-16">
        <div className="container mx-auto px-6 py-12">
          <p className="text-center text-red-500">
            {locale === "id" ? "Catatan tidak ditemukan." : "Note not found."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full pt-16">
      <div className="container mx-auto px-6 py-12">
        <DetailNoteLayout onDeleteHandler={onDeleteHandler} note={note} />
      </div>
    </main>
  );
}

export default NoteDetailPage;
