// Represents an answer to a question
export interface GritCenterAnswer {
    id: number;
    label: string;
    content: string;
    scores: number;
    is_true: number;
    is_selected: boolean;
    answer_fill: string;
    tag__question: boolean;
  }
  
  // Represents a question in a section
  export interface GritCenterSimpleQuestion {
    id: number;
    label: string;
    index: number;
    type: number;
    for_type: number;
    content: string;
    explain: string;
    level: number;
    answers: GritCenterAnswer[];
    is_answered: number;
    is_marked: boolean;
    filled_answer: string;
    is_answeredCorrectly: boolean;
    show_answerQuestion: string;
    point: number;
    index_label: number;
  }
  
  // Represents a section within a part
  export interface GritCenterSection {
    id: number;
    content: string;
    list_answers: string;
    file: string | null;
    type: string;
    simple_questions: GritCenterSimpleQuestion[];
  }
  
  // Represents a part of the exam
  export interface GritCenterPart {
    id: number;
    content: string;
    list_answers: string;
    file: string | null;
    type: string;
    simple_questions: GritCenterSimpleQuestion[];
    section: GritCenterSection[];
  }
  
  // Represents the overall exam data structure
  export interface GritCenterExamData {
    id: number;
    fee_type: string;
    categories: number[];
    code: string;
    name: string;
    guide: string;
    image: string | null;
    title: string;
    total_question: number;
    price: string | null;
    total_time: number;
    type: number;
    type_name: string;
    total_user: number;
    part: GritCenterPart[];
  }