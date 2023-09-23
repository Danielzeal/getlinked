const SpanDiv = ({ className }: { className: string }) => {
  return (
    <span className={`block bg-white h-[2px] rounded-md ${className}`}></span>
  );
};

const MenuIcon = () => {
  return (
    <div className='w-[20px] h-[14px] flex flex-col justify-between md:hidden group'>
      <SpanDiv className='w-[50%]'></SpanDiv>
      <SpanDiv className='w-full'></SpanDiv>
      <SpanDiv className='w-[50%] block self-end'></SpanDiv>
    </div>
  );
};

export default MenuIcon;
