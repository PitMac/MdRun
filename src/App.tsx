import { useMediaQuery } from "react-responsive";
import SplitPane from "react-split-pane";
import "./App.css";
import { DownloadButton } from "./components/DownloadButton";
import { InputArea } from "./components/InputArea";
import { MdArea } from "./components/MdArea";
import { TextProvider } from "./context/TextContext";

function App() {
  const isSmall = useMediaQuery({
    query: "(max-width: 760px)",
  });
  return (
    <TextProvider>
      <DownloadButton />
      {/* @ts-ignore */}
      <SplitPane
        resizerClassName="Resizer"
        className="App"
        defaultSize="50%"
        split={isSmall ? "horizontal" : "vertical"}
      >
        <InputArea />
        <MdArea />
      </SplitPane>
    </TextProvider>
  );
}

export default App;
