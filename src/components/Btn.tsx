type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const Btn = ({ text, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`capitalize w-[172px] h-[53px] bg-button-gradient rounded hover:bg-none hover:border hover:border-tertiary transition-color duration-200 ease ${className}`}
    >
      {text}
    </button>
  );
};

export default Btn;
