import { ChangeEvent, memo } from "react";
import { Textarea } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton.tsx";
import { TextCount } from "../molecules/TextCount.tsx";
import { useCount } from "../../hooks/useCount.ts";
import { useInputText } from "../../hooks/useInputText.ts";

export const CharacterCounter = memo(() => {
  const { inputText } = useInputText();
  const { count } = useCount();

  const onChangeInputText = (e: ChangeEvent<HTMLTextAreaElement>) =>
    count(e.target.value);
  const onClickCopy = () => {
    navigator.clipboard
      .writeText(inputText?.text || "")
      .then(() => alert("コピーしました"));
  };

  const onClickReset = () => {
    count("");
  };

  return (
    <>
      <h1>CharacterCounter</h1>
      <Textarea
        value={inputText?.text}
        onChange={onChangeInputText}
        placeholder="ここにテキストを入力してください..."
      />
      <TextCount />
      <PrimaryButton onClick={onClickCopy}>コピー</PrimaryButton>
      <PrimaryButton onClick={onClickReset}>リセット</PrimaryButton>
    </>
  );
});
