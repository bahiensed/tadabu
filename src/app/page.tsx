import SignIn from "@/components/ui/signin"

export default function Home() {
  return (
    <>
    <div className="flex justify-end ">
    <SignIn/>
    </div>

    <div className="flex flex-row w-full h-screen">
     
      <div className="p-28 w-1/2">
        <p>Learning Times Table does not have to be boring.</p>
        <h1 className="text-5xl text-black lg:max-w-lg font-bold mb-6">
          Learn and practice <span className="red-gradient">with Tadabu</span>.
          Let&apos;s enjoy Math!
        </h1>
        <p>
          I created this app during the COVID-19 pandemic to teach my kids while
          we were stuck at home.. They loved it! Hope your children also like
          Tadabu. Click on the numbered squares to practice a times table. Have
          fun!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 justify-center p-28 gap-10 ">
        <a href="./1">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110 ">
            <div className="drop-shadow-2xl bg-red-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              <span className="text-red-200 text-3xl">x 1</span>
            </div>
            <div className="w-1 h-10 bg-red-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-red-500 opacity-75"></div>
          </div>
        </a>
        <a href="./2">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-blue-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              <span className="text-blue-200 text-3xl">x 2</span>
            </div>
            <div className="w-1 h-10 bg-blue-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 opacity-75"></div>
          </div>
        </a>
        <a href="./3">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-yellow-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              <span className="text-yellow-200 text-3xl">x 3</span>
            </div>
            <div className="w-1 h-10 bg-yellow-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-75"></div>
          </div>
        </a>
        <a href="./4">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-green-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              <span className="text-green-200 text-3xl">x 4</span>
            </div>
            <div className="w-1 h-10 bg-green-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-green-500 opacity-75"></div>
          </div>
        </a>
        <a href="./5">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-orange-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              <span className="text-orange-200 text-3xl">x 5</span>
            </div>
            <div className="w-1 h-10 bg-orange-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-orange-500 opacity-75"></div>
          </div>
        </a>
        <a href="./6">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-purple-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              <span className="text-purple-200 text-3xl">x 6</span>
            </div>
            <div className="w-1 h-10 bg-purple-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 opacity-75"></div>
          </div>
        </a>
        <a href="./7">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-red-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              <span className="text-red-200 text-3xl">x 7</span>
            </div>
            <div className="w-1 h-10 bg-red-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-red-500 opacity-75"></div>
          </div>
        </a>
        <a href="./8">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-blue-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 once-spin">
              <span className="text-blue-200 text-3xl">x 8</span>
            </div>
            <div className="w-1 h-10 bg-blue-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 opacity-75"></div>
          </div>
        </a>
        <a href="./9">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-yellow-500 opacity-75 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              <span className="text-yellow-200 text-3xl">x 9</span>
            </div>
            <div className="w-1 h-10 bg-yellow-500 opacity-75"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-75"></div>
          </div>
        </a>
        <a href="./">
          <div className="relative flex flex-col items-center transition-transform transform duration-300 hover:scale-110">
            <div className="drop-shadow-2xl bg-green-500 opacity-50 rounded-full w-24 h-36 flex items-center justify-center mb-2 spin-once">
              {" "}
              {/* More transparent for Random */}
              <span className="text-green-200 text-xl">Random</span>
            </div>
            <div className="w-1 h-10 bg-green-500 opacity-50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500 opacity-50"></div>
          </div>
        </a>
      </div>
    </div>
    </>
  );
}
