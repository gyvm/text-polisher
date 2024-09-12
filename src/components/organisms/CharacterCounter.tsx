import { ChangeEvent, memo } from "react";
import {
  Box,
  Flex,
  Textarea,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
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

  const isExistAiText = true;

  const onClickReset = () => {
    count("");
  };

  return (
    <>
      <h1>CharacterCounter</h1>
      <Box p={8} bg="yellow" borderRadius="lg" shadow="md" m={4}>
        <Flex
          bg={"white"}
          direction={useBreakpointValue({ base: "column", md: "row" })}
          gap={4}
        >
          <Box
            flex={1}
            bg={"#f0eeed"}
            borderRadius="md"
            mb={{ base: 2, md: 0 }}
            shadow="sm"
          >
            <Heading size="md" mb={4}>
              文章を入力してください
            </Heading>
            <Textarea
              value={inputText?.text}
              onChange={onChangeInputText}
              placeholder="ここにテキストを入力してください..."
              color={"orange.500"}
              resize={"vertical"}
              minH={"200px"}
              border={"1px"}
              borderColor={"black"}
            />
            <TextCount />
            <PrimaryButton>AI添削する</PrimaryButton>
            <PrimaryButton onClick={onClickReset}>リセット</PrimaryButton>
          </Box>
          {isExistAiText && (
            <Box
              flex={1}
              bg={"#f0eeed"}
              borderRadius="md"
              minH={"200px"}
              p={4}
              shadow="sm"
            >
              <Heading size="md" mb={4}>
                添削された文章
              </Heading>
              <p>AIが生成したテキストがあります</p>
              <PrimaryButton>差分を表示する</PrimaryButton>
              <PrimaryButton onClick={onClickCopy}>コピー</PrimaryButton>
            </Box>
          )}
        </Flex>
      </Box>
    </>
  );
});
