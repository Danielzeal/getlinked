type Props = {
  text: string;
  colorText: string;
};

const Heading = ({ text, colorText }: Props) => {
  return (
    <h1 className='md:text-3xl font-bold text-xl mb-6'>
      {text} <br /> <span className='text-tertiary'>{colorText}</span>
    </h1>
  );
};

export default Heading;
