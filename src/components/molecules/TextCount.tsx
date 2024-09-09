import { memo } from "react";
import { useInputText } from "../../hooks/useInputText.ts";

export const TextCount = memo(() => {
  const { inputText } = useInputText();

  return (
    <>
      <p>{inputText?.text}</p>
      <p>{inputText?.textCount}</p>
      <h1>TextCount</h1>
    </>
  );
});
