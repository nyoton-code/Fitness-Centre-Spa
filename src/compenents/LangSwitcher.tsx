"use client";
import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="text-txt-c   flex gap-2  transition-colors duration-300 text-lg font-medium  capitalize">
      <button
        onClick={() => i18n.changeLanguage("en")}
        disabled={i18n.language === "en"}
        className="hover:text-main-g "
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("fr")}
        disabled={i18n.language === "fr"}
        className="hover:text-main-g "
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage("ar")}
        disabled={i18n.language === "ar"}
        className="hover:text-main-g "
      >
        AR
      </button>
    </div>
  );
}
