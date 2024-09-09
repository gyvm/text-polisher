import { useCallback } from "react";
import { useInputText } from "./useInputText.ts";

export const useCount = () => {
  const { setInputText } = useInputText();

  const count = useCallback((inputText: string) => {
    if (inputText === "") {
      setInputText({ text: "", textCount: 0 });
    } else {
      setInputText({ text: inputText, textCount: inputText.length });
    }
  }, []);

  return { count };
};
