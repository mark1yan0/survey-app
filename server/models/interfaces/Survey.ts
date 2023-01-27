export interface ISurvey {
  author: string;
  author_id: string;
  type: string;
  title: string;
  questions: IQuestion[];
  results: IResult[];
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
  count: number;
}

interface IResult {
  key: string;
  answers: string[] | number[];
}
