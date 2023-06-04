import { twJoin } from 'tailwind-merge';

const RadioCircle: React.FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <span
      className={twJoin(
        'grid place-items-center rounded-full border border-white/60 transition-all ease-in',
        selected ? 'h-5 w-5' : 'h-3 w-3'
      )}
    >
      <span
        className={twJoin(
          'h-3 w-3 rounded-full transition-transform delay-75 duration-75 ease-in-out',
          selected
            ? 'from-accent-orange/80 to-accent-pink/80 scale-105 bg-gradient-to-l'
            : 'scale-0 bg-transparent'
        )}
      ></span>
    </span>
  );
};

export default RadioCircle;
