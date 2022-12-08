export interface ISurvey {
  author: string;
  author_id: string;
  type: string;
  title: string;
  questions: IQuestion[];
}

interface IQuestion {
  fieldName: string;
  title: string;
  type: string;
  options: IQuestionOptions[];
}

interface IQuestionOptions {
  value: string;
  label: string;
  type: string;
}
