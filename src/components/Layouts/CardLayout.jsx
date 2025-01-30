import CardContent from "../Fragments/CardContent";
import SubTitle from "../Elements/Card/Title";
import PropTypes from "prop-types";
import SearchForm from "../Elements/SearchBar";
import { useLocale } from "../../hooks/useLocale";

function CardLayouts({
  NotesData,
  onDelete,
  onToggleArchive,
  keyword,
  keywordChange,
  title,
}) {
  const { locale } = useLocale();
  return (
    <>
      <SubTitle classname="text-2xl font-extrabold dark:text-white mb-4 text-center uppercase underline underline-offset-8 py-6">
        {title}
      </SubTitle>
      <div className="flex justify-center items-center text-center w-full">
        <SearchForm
          placeholder={
            locale == "id"
              ? "Cari Catatanmu disini .."
              : "Find your Notes here .."
          }
          classname="block w-full max-w-3xl p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="search-navbar"
          type="text"
          value={keyword}
          onChange={keywordChange}
        />
      </div>
      <CardContent
        onDelete={onDelete}
        NotesData={NotesData}
        onToggleArchive={onToggleArchive}
      />
    </>
  );
}

CardLayouts.propTypes = {
  NotesData: PropTypes.array,
  onDelete: PropTypes.func,
  onToggleArchive: PropTypes.func,
  keyword: PropTypes.string,
  keywordChange: PropTypes.func,
  title: PropTypes.string,
};

export default CardLayouts;
