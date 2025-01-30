import SubTitle from "./Title";
import FormatedDate from "./Date";
import Content from "./Content";
import Button from "../Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocale } from "../../../hooks/useLocale";

const CardForm = (props) => {
  const { title, createdAt, body, id, onDelete, onToggleArchive, archived } =
    props;
  const { locale } = useLocale();

  return (
    <div className="block max-w-xs h-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between">
      <div className="flex flex-col flex-grow overflow-y-auto">
        <div className="flex flex-col min-h-[50px]">
          <div key={id} className="flex flex-col items-center">
            <Link to={`/note/${id}`} className="w-full">
              <SubTitle classname="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate underline">
                {title}
              </SubTitle>
            </Link>
          </div>
        </div>
        <FormatedDate createdAt={createdAt} />
        <Content body={body} />
      </div>

      <div className="flex pt-4 mx-auto space-x-10">
        <Button
          classname={`w-full text-white ${
            archived
              ? "bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300"
              : "bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
          }  font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 text-center`}
          type="submit"
          onClick={() => onToggleArchive(id)}
        >
          {archived
            ? locale === "id"
              ? "Batalkan"
              : "Cancel"
            : locale === "id"
            ? "Arsipkan"
            : "Archive"}
        </Button>
        <Button
          classname="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 text-center"
          onClick={() => onDelete(id)}
        >
          {locale == "id" ? "Hapus" : "Delete"}
        </Button>
      </div>
    </div>
  );
};

CardForm.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleArchive: PropTypes.func,
  archived: PropTypes.bool,
};

export default CardForm;
