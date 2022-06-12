import { useContext } from "react";
import { TextContext } from "../context/TextContext";

export const InputArea = () => {
  const { code, setCode } = useContext(TextContext);

  return (
    <textarea
      className="textarea"
      value={code}
      onChange={(e) => setCode!(e.target.value)}
    />
  );
};
