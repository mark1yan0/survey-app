const SubmitButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      type='submit'
      className='bg-gradient-to-r from-accent-pink to-accent-yellow px-4 py-2 rounded hover:scale-105 transition-all text-white font-bold'
    >
      {text}
    </button>
  );
};

export default SubmitButton;
