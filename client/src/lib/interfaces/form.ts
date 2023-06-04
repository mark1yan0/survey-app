import { FieldErrors, FieldValues } from 'react-hook-form';
import { ISurvey } from './questions';

export interface IBaseFormField {
  name: string;
  label?: string;
  type?: 'text' | 'number' | 'select';
  required?: boolean;
  className?: string;
  errorStyle?: string;
  placeholder?: string;
  variant?: TFieldVariants;
  containerClass?: string;
}

export type TFieldVariants = 'contained' | 'outlined';

export type TFieldError<T extends FieldValues> = keyof FieldErrors<T>;

export type TSurveyFieldError = TFieldError<ISurvey>;
