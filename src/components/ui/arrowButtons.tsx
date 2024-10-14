const ArrowButtons = () => {
  return (
    <div className="flex justify-center items-center space-x-14 mt-56">
      {/* Left Arrow Button */}
      <button className="relative w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-r-[50px] border-r-green-500 focus:outline-none">
        <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white">
          2x
        </span>
      </button>

      {/* Right Arrow Button */}
      <button className="relative w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[50px] border-l-green-500 focus:outline-none">
        <span className="absolute left-1/2 top-1/2 transform -translate-x-10 -translate-y-1/2 text-white">
          3x
        </span>
      </button>
    </div>
  );
};

export default ArrowButtons;
