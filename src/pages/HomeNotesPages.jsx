import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/network-data";
import PropTypes from "prop-types";
import CardLayouts from "../components/Layouts/CardLayout";
import LoadingForm from "../components/Elements/Loading";
import { useLocale } from "../hooks/useLocale";

function HomeNotesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  function changeSearchParams(newKeyword) {
    setSearchParams({ keyword: newKeyword });
  }

  return (
    <HomeNotes defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

function HomeNotes({ defaultKeyword, keywordChange }) {
  const [notesData, setNotesData] = useState([]);
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useLocale();

  useEffect(() => {
    async function fetchNotes() {
      setIsLoading(true);
      const { data } = await getActiveNotes();
      setNotesData(data);
      setIsLoading(false);
    }

    fetchNotes();
  }, []);

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    keywordChange(newKeyword);
  };

  const onDeleteHandler = async (id) => {
    setIsLoading(true);
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setNotesData(data);
    setIsLoading(false);
  };

  const toggleArchiveHandler = async (id) => {
    setIsLoading(true);
    await archiveNote(id);
    const { data } = await getActiveNotes();
    setNotesData(data);
    setIsLoading(false);
  };

  const filteredNotes = notesData.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (isLoading) {
    return <LoadingForm />;
  }

  return (
    <div className="w-full mx-auto py-6">
      <CardLayouts
        onDelete={onDeleteHandler}
        keyword={keyword}
        NotesData={filteredNotes}
        keywordChange={onKeywordChangeHandler}
        onToggleArchive={toggleArchiveHandler}
        title={locale == "id" ? "Catatan Aktif" : "Active Notes"}
      />
    </div>
  );
}

HomeNotes.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default HomeNotesPageWrapper;
