import { useLocale } from "../../../hooks/useLocale";
import Button from "../Button";

function LocaleToggleButton() {
  const { locale, toggleLocale } = useLocale();

  return (
    <Button onClick={toggleLocale}>{locale === "id" ? "EN" : "ID"}</Button>
  );
}

export default LocaleToggleButton;
