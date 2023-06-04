const SubmitButton = ({ text }: { text: string }) => {
  return (
    <button
      type='submit'
      className='from-accent-pink to-accent-yellow self-end rounded bg-gradient-to-r px-4 py-2 font-bold text-white transition-all hover:scale-105'
    >
      {text}
    </button>
  );
};

export default SubmitButton;
