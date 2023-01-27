export interface ISurvey {
  author: string;
  author_id: string;
  title: string;
  type: string;
  questions: IQuestion[];
}

export interface IQuestion {
  fieldName: string;
  title: string;
  type: string;
  options: IQuestionOptions[];
}

export interface IQuestionOptions {
  value: string;
  label: string;
  type: string; // ? SHOULD be: radio, checkbox, input
  count?: number;
}

export interface IVotingResult {
  question: string;
  answer: string;
}

export interface IVotingPayload {
  results: IVotingResult[];
}
