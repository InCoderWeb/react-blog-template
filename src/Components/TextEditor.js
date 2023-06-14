import { useState } from "react";
import { FaVectorSquare } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
export const TextEditor = (props) => {
  const [markdown, setMarkdown] = useState("Hello");
  const toggleFullScreen = () => {
    document.querySelector(".preview").classList.toggle("fullscreen");
  };
  console.log(markdown);
  return (
    <>
      <div className="markdownEditor">
        <div className="options">
          <Button
            onClick={() => {
              toggleFullScreen();
            }}
          >
            <FaVectorSquare fontSize={"1.5rem"} />
          </Button>
        </div>
        <textarea
          className="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <div className="preview">
          <div className="options">
            <Button
              onClick={() => {
                toggleFullScreen();
              }}
            >
              <FaVectorSquare fontSize={"1.5rem"} />
            </Button>
          </div>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};
