const SubmitButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      type='submit'
      className='self-end rounded bg-gradient-to-r from-accent-pink to-accent-yellow px-4 py-2 font-bold text-white transition-all hover:scale-105'
    >
      {text}
    </button>
  );
};

export default SubmitButton;
