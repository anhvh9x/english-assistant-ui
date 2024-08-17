import { Col, Row } from "antd";
import React, { useState } from "react";
import AceEditor from "react-ace";
import gritExample from "../assets/grit-exam-example.png";

// Import a theme and mode for Ace Editor
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import {
  GritCenterAnswer,
  GritCenterExamData,
  GritCenterPart,
  GritCenterSimpleQuestion,
} from "../models/grit-center";

// Function to generate HTML content from JSON
const generateHTMLContent = (data: GritCenterExamData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.name}</title>
    </head>
    <body>
        <h1>${data.name}</h1>
        ${data.part
          .map(
            (part: GritCenterPart, partIndex: number) => `
        <h2>Part ${partIndex + 1}: ${part.content.replace(
              /<\/?[^>]+(>|$)/g,
              ""
            )}</h2>

        ${part.simple_questions
          .map(
            (question: GritCenterSimpleQuestion, questionIndex: number) => `
        <p>${questionIndex + 1}. ${question.content.replace(
              /<\/?[^>]+(>|$)/g,
              ""
            )}</p>
        <ul>
            ${question.answers
              .map(
                (answer: GritCenterAnswer, answerIndex: number) => `
            <li><strong>${String.fromCharCode(65 + answerIndex)}.</strong> ${
                  answer.content
                }</li>
            `
              )
              .join("")}
        </ul>
        <p><em>Explanation:</em> ${question.explain.replace(
          /<\/?[^>]+(>|$)/g,
          ""
        )}</p>
        `
          )
          .join("")}
        `
          )
          .join("")}
    </body>
    </html>
    `;
};

const JsonToHtml: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>("{}");
  const [htmlOutput, setHtmlOutput] = useState<string>("");

  const handleJsonChange = (newValue: string) => {
    setJsonInput(newValue);
    try {
      const jsonData = JSON.parse(newValue);
      const generatedHtml = generateHTMLContent(jsonData);
      setHtmlOutput(generatedHtml);
    } catch (error) {
      console.log(error);
      setHtmlOutput("Invalid JSON");
    }
  };

  return (
    <div>
      <a href={gritExample} className="my-4" target="_blank">
        Xem hướng dẫn
      </a>

      <Row gutter={16} style={{ height: "100vh" }}>
        <Col span={12} style={{ height: "100%" }}>
          <AceEditor
            mode="json"
            theme="github"
            onChange={handleJsonChange}
            value={jsonInput}
            name="jsonEditor"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="100%"
          />
        </Col>
        <Col
          span={12}
          style={{
            height: "100%",
            overflowY: "scroll",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: htmlOutput }}
            style={{ padding: "16px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default JsonToHtml;
