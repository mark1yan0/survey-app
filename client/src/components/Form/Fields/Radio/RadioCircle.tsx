const RadioCircle: React.FC<{ selected: boolean }> = ({ selected }) => {
  return (
    <span
      className={`grid place-items-center rounded-full border border-white/60 transition-all ease-in ${
        selected ? 'w-5 h-5' : 'w-3 h-3'
      }`}
    >
      <span
        className={`transition-transform ease-in-out duration-75 delay-75 w-3 h-3 rounded-full ${
          selected
            ? 'scale-1 bg-gradient-to-l from-accent-orange/80 to-accent-pink/80'
            : 'scale-0 bg-transparent'
        }`}
      ></span>
    </span>
  );
};

export default RadioCircle;
