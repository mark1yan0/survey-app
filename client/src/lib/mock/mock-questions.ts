import { IQuestion } from '../interfaces/questions';

export default [
  {
    fieldName: 'cats_or_dogs',
    title: 'Preferisci cani o gatti?',
    options: [
      { label: 'Cats', value: 'cats' },
      { label: 'Dogs', value: 'dogs' },
    ],
  },
  {
    fieldName: 'windows_or_macos',
    title: 'Preferisci Windwos o macos?',
    options: [
      { label: 'Windwos', value: 'windows' },
      { label: 'MacOs', value: 'macos' },
    ],
  },
  {
    fieldName: 'react_or_vue',
    title: 'Preferisci React o Vue?',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
    ],
  },
] as IQuestion[];
