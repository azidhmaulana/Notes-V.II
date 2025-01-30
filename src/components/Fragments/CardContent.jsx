import CardForm from "../Elements/Card";
import PropTypes from "prop-types";
import { useLocale } from "../../hooks/useLocale";

function CardContents({ onDelete, onToggleArchive, NotesData }) {
  const { locale } = useLocale();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {NotesData.length > 0 ? (
        NotesData.map((note) => (
          <CardForm
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onToggleArchive={onToggleArchive}
            {...note}
          />
        ))
      ) : (
        <p className="text-center">
          {locale == "id" ? "Tidak ada Catatan" : "Note not found."}
        </p>
      )}
    </div>
  );
}

CardContents.propTypes = {
  onDelete: PropTypes.func,
  onToggleArchive: PropTypes.func,
  NotesData: PropTypes.array,
};

export default CardContents;
