import { Col, Row } from "antd";
import React, { useState } from "react";
import AceEditor from "react-ace";

// Import a theme and mode for Ace Editor
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import {
  GritCenterAnswer,
  GritCenterExamData,
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
        <h2>Part 1: PHONETICS (5 points)</h2>

        <h3>Section 1: Choose the word whose underlined part is pronounced differently from that of the others in the same line and write A, B, C or D on your answer sheet.</h3>
        ${data.part[0].section[0].simple_questions
          .map(
            (question: GritCenterSimpleQuestion, index: number) => `
        <p>${index + 1}. ${question.answers
              .map(
                (answer: GritCenterAnswer, i: number) => `
           <strong>${String.fromCharCode(65 + i)}.</strong> ${answer.content}
        `
              )
              .join(", ")}</p>`
          )
          .join("")}

        <h3>Section 2: Choose the word whose stress pattern is different from that of the others in the same line and write A, B, C or D on your answer sheet.</h3>
        ${data.part[0].section[1].simple_questions
          .map(
            (question: GritCenterSimpleQuestion, index: number) => `
        <p>${index + 4}. ${question.answers
              .map(
                (answer: GritCenterAnswer, i: number) => `
           <strong>${String.fromCharCode(65 + i)}.</strong> ${answer.content}
        `
              )
              .join(", ")}</p>`
          )
          .join("")}

        <h2>Part 2: GRAMMAR AND VOCABULARY (30 points)</h2>

        <h3>Section 1: Supply the correct forms of the verbs.</h3>
        ${data.part[1].section[0].simple_questions
          .map(
            (_: GritCenterSimpleQuestion, index: number) => `
        <p>${index + 6}. ________________________</p>`
          )
          .join("")}

        <h3>Section 2: Supply the correct form of the words in brackets. Write the answers on your answer sheet.</h3>
        ${data.part[1].section[1].simple_questions
          .map(
            (_: GritCenterSimpleQuestion, index: number) => `
        <p>${index + 13}. ________________________</p>`
          )
          .join("")}

        <h3>Section 3: There are six mistakes in the passage. Find out and correct them. Write the answers on your answer sheet. The first one has been done for you as an example.</h3>
        <p>Example: Line 1: is -> are</p>
        ${data.part[1].section[2].simple_questions
          .map(
            (_, index: number) => `
        <p>${index + 21}. ________________________</p>`
          )
          .join("")}

        <h2>Part 3: READING (30 points)</h2>

        <h3>Section 1: Read the following passage and choose the most suitable phrase from A-F to fill in each gap. There is one extra phrase that you don't need to use. Write the answers on your answer sheet.</h3>
        <p><strong>Passage:</strong></p>
        <p>${data.part[2].section[0].simple_questions
          .map(
            (_, index: number) => `
        ${index + 36}. ________________________</p>`
          )
          .join("")}</p>

        <h3>Section 2: Read the passage and choose the best answer to each question that follows. Write A, B, C, or D on your answer sheet.</h3>
        <p><strong>Passage:</strong></p>
        ${data.part[2].section[1].simple_questions
          .map(
            (_, index: number) => `
        <p>${index + 41}. ________________________</p>`
          )
          .join("")}

        <h3>Section 3: Read the passage and choose the most suitable word from the ones given below to fill in each gap. Write A, B, C, or D on your answer sheet.</h3>
        <p><strong>Passage:</strong></p>
        ${data.part[2].section[2].simple_questions
          .map(
            (_, index: number) => `
        <p>${index + 46}. ________________________</p>`
          )
          .join("")}

        <h3>Section 4: Read the following passage then fill in each gap with ONE suitable word. Write the answers on your answer sheet.</h3>
        <p><strong>Passage:</strong></p>
        ${data.part[2].section[3].simple_questions
          .map(
            (_, index: number) => `
        <p>${index + 56}. ________________________</p>`
          )
          .join("")}

        <h2>Part 4: WRITING (20 points)</h2>

        <h3>Section 1: Rewrite each of the following sentences beginning as shown, so that the meaning stays the same.</h3>
        ${data.part[3].section[0].simple_questions
          .map(
            (_, index: number) => `
        <p>${index + 66}. ________________________</p>`
          )
          .join("")}

        <h3>Section 2: Rewrite each of the following sentences using the given words so that it keeps the same meaning. Do not change the form of the words given.</h3>
        ${data.part[3].section[1].simple_questions
          .map(
            (_, index: number) => `
        <p>${index + 71}. ________________________</p>`
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
      <span>
        Hướng dẫn: Vào trang GritCenter, phần đề thi, bấm F12, chọn tab Network
        Bấm vào đề thi muốn xem, nếu có quyền làm bài thi, xem request có đường
        dẫn /590 hoặc số theo id của bài thi (ở trên Console) Copy value ở
        response paste vào đây để render ra bài thi
      </span>
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
