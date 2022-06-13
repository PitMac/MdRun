import { os } from "@tauri-apps/api";
import { sendNotification } from "@tauri-apps/api/notification";
import { useContext, useState } from "react";
import { TextContext } from "../context/TextContext";

export const DownloadButton = () => {
  const { code } = useContext(TextContext);
  const [message, setMessage] = useState(false);

  const downloadCode = async () => {
    const element = document.createElement("a");
    const file = new Blob([code], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
    try {
      await os.platform();
      sendNotification({
        title: "OK!",
        body: "Download Text",
      });
    } catch (error) {}
  };

  const copyCode = async () => {
    navigator.clipboard.writeText(code);
    try {
      await os.platform();
      sendNotification({
        title: "OK!",
        body: "Copied Text",
      });
    } catch (error) {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 3000);
    }
  };

  return (
    <>
      <section className={`copiedMessage ${message ? "show" : ""}`}>
        <h2>Copied Text</h2>
      </section>
      <div className="downloadButton">
        <button
          disabled={code.length < 1 ? true : false}
          onClick={downloadCode}
        >
          Download
        </button>
        <button disabled={code.length < 1 ? true : false} onClick={copyCode}>
          Copy
        </button>
      </div>
    </>
  );
};
