export interface IQuestion {
  fieldName: string;
  title: string;
  options: IQuestionOptions[];
}

export interface IQuestionOptions {
  value: string;
  label: string;
}
