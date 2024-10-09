import { Button } from "./button";

const ArrowButtons = () => {
  return (
    <div className="flex justify-center items-center space-x-14 mt-32">
      {/* Left Arrow Button */}
      <button
        className="w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-r-[50px] border-r-green-500 focus:outline-none" // Adjust size and color
      ></button>

      {/* Right Arrow Button */}
      <button className="w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[50px] border-l-green-500 focus:outline-none"></button>
    </div>
  );
};

export default ArrowButtons;
