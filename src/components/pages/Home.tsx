import { CharacterCounter } from "../organisms/CharacterCounter.tsx";
import { Heading } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <div>
        <Heading>Home</Heading>
        <CharacterCounter />
      </div>
    </>
  );
};
