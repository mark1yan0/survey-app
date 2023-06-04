import { TFieldVariants } from '../../../../lib/interfaces/form';

export const InputFieldVariants: Record<
  TFieldVariants,
  {
    className: string;
    errorStyle: string;
  }
> = {
  outlined: {
    className:
      'rounded-none border-b-2 border-white/50 text-xl bg-transparent text-white outline-none hover:border-white focus:border-white',
    errorStyle: 'border-red-700 hover:border-red-700 focus:border-red-700',
  },
  contained: {
    className: 'rounded bg-slate-200 p-2',
    errorStyle:
      'border-2 border-red-700 focus:border-2 focus:border-red-700 focus:outline-none',
  },
};
