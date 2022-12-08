export interface ISurvey {
  author: string;
  author_id: string;
  title: string;
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
}
