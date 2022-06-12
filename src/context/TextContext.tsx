import { useState, createContext, FC, ReactNode } from "react";

interface Context {
  code: string;
  setCode?: (value: string) => void;
}

export const TextContext = createContext<Context>({
  code: "",
});

interface Props {
  children: ReactNode;
}

export const TextProvider: FC<Props> = ({ children }) => {
  const [code, setCode] = useState<string>("");
  return (
    <TextContext.Provider value={{ code, setCode }}>
      {children}
    </TextContext.Provider>
  );
};
