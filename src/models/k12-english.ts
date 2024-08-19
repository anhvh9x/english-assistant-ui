/* eslint-disable @typescript-eslint/no-namespace */

export namespace K12English {
  export interface ExamData {
    result: Result;
  }

  export interface Result {
    questions: Question[];
  }

  export interface Question {
    matchAnswer: null | boolean; // Adjust the type if you know the specific structure
    creationTime: string;
    questionName: string;
    questionText: string;
    imagePath: null | string;
    questionType: number;
    adminReviewText: null | string;
    quizAttemptId: number;
    questionCategoryId: number | null;
    parentQuestionId: number;
    questionNumber: number;
    page: number;
    quizQuestionId: number;
    answerList: Answer[];
    matchAnswerList: null; // Adjust the type if you know the specific structure
    questionTypeName: string;
    sortOrder: number;
    readingText: null | string;
    userAnswers: null; // Adjust the type if you know the specific structure
    unSure: boolean;
    checkAnswersResult: null; // Adjust the type if you know the specific structure
    noAdminAction: boolean;
    dragDrop: boolean;
    errorCorrectionWords: null; // Adjust the type if you know the specific structure
    dragDropImageBase64: null | string;
    dragDropImageWidth: number;
    dragDropImageHeight: number;
    questionDragDropZoneDefinition: null; // Adjust the type if you know the specific structure
    enableStepByStepGuide: boolean;
    displayNote: boolean;
    note: null | string;
    showRelatedTopicDetail: boolean;
    essayAnswerLines: number;
    enableShortAnswer: boolean;
    fillBlankShortAnswer: null; // Adjust the type if you know the specific structure
    id: number;
  }

  export interface Answer {
    answerText: string;
    answerImage: null | string;
    isHtml: boolean;
    isSpeak: boolean;
    id: number;
  }
}
