import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick = () => {} } = props;
  return (
    <>
      <Button onClick={onClick}>{children}</Button>
    </>
  );
});
