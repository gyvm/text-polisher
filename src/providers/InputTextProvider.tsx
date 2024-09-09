import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { InputText } from "../types/inputText.ts";

export type InputTextContextType = {
  inputText: InputText | null;
  setInputText: Dispatch<SetStateAction<InputText | null>>;
};

export const InputTextContext = createContext<InputTextContextType>(
  {} as InputTextContextType,
);

export const InputTextProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [inputText, setInputText] = useState<InputText | null>(null);

  return (
    <InputTextContext.Provider value={{ inputText, setInputText }}>
      {children}
    </InputTextContext.Provider>
  );
};
