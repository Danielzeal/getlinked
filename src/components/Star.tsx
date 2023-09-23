import { PiStarFour, PiStarFourFill } from "react-icons/pi";

const Star = ({ className }: { className: string }) => {
  return (
    <div className={`${className} absolute -z-[1]`}>
      <PiStarFourFill />
    </div>
  );
};

export default Star;
