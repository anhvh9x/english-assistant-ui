import { useState } from "react";
import AceEditor from "react-ace";
import { K12English } from "../models/k12-english";

// Import a theme and mode for Ace Editor
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

const ExamRenderer = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [htmlContent, setHtmlContent] = useState("");

  const handleInputChange = (newValue: string) => {
    setJsonInput(newValue);
    try {
      console.log(newValue);
      const parsedData = JSON.parse(newValue);
      console.log(parsedData);
      const combinedHtml = parsedData.result.questions
        .map((question: K12English.Question) => {
          const answersHtml = question.answerList
            ?.map((answer) => `<li>${answer.answerText}</li>`)
            .join("");
          return `
            <div>
              <h3>${question.questionName}</h3>
              <p>${question.questionText}</p>
              <ul>${answersHtml}</ul>
            </div>
          `;
        })
        .join("");
      setHtmlContent(combinedHtml);
    } catch (e) {
      console.error(e);
      setHtmlContent("Invalid JSON");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, padding: "10px" }}>
        <h2>JSON Input</h2>
        <AceEditor
          mode="json"
          theme="github"
          onChange={handleInputChange}
          value={jsonInput}
          name="jsonEditor"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="90%"
        />
      </div>
      <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
        <h2>Rendered HTML</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
};

export default ExamRenderer;
