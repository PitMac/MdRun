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
  const initialMessage =
    "# Welcome to my project\n --- \n I'm Jhon Dev. This is [My web Page]('https://jhonpitmac.vercel.app/')";
  const [code, setCode] = useState<string>(initialMessage);
  return (
    <TextContext.Provider value={{ code, setCode }}>
      {children}
    </TextContext.Provider>
  );
};
