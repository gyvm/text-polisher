import { useContext } from "react";
import {
  InputTextContext,
  InputTextContextType,
} from "../providers/InputTextProvider.tsx";

export const useInputText = (): InputTextContextType =>
  useContext(InputTextContext);
