import { useState, useEffect } from "react";
import texts from "../assets/texts.json";

export const useGetTexts = (setIsLoaded, lang) => {
  const [text, setText] = useState(null);
  useEffect(() => {
    localStorage.setItem("lang", lang);
    const data = texts[lang];
    setText(data);
    setIsLoaded(true);
  }, [lang]);
  return { text };
};
