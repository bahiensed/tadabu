
export default function Home() {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="p-20 w-1/2">
        <p>Learning Times Table does not have to be boring.</p>
        <h1 className="text-5xl text-black lg:max-w-lg font-bold mb-6">
        Learn and practice <span className="red-gradient">with Tadabu</span>. Let&apos;s enjoy Math!
        </h1>
        <p>
        I create this app during the pandemics to teach my own kids. They loved it! Hope your children also like Tadabu. Click on the numbered squares to practice a times table. Have fun!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 justify-center p-20 gap-8">
        <a href="./1">
          <div className="shadow-2xl border-8 border-red-500 bg-red-100 w-full aspect-square text-red-600 flex text-6xl justify-center items-center hover:scale-105">x 1</div>
        </a>
        <a href="./2">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-6xl justify-center items-center hover:scale-105 border-blue-500 bg-blue-200 text-blue-600">x 2</div>
        </a>
        <a href="./3">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-6xl justify-center items-center hover:scale-105 border-yellow-500 bg-yellow-100 text-yellow-600">x 3</div>
        </a>
        <a href="./4">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-6xl justify-center items-center hover:scale-105 border-green-500 bg-green-100 text-green-600">x 4</div>
        </a>
        <a href="./5">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-6xl justify-center items-center hover:scale-105 border-orange-500 bg-orange-100 text-orange-600">x 5</div>
        </a>
        <a href="./6">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-6xl justify-center items-center hover:scale-105 border-purple-500 bg-purple-100 text-purple-600">x 6</div>
        </a>
        <a href="./7">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-6xl justify-center items-center hover:scale-105 border-red-500 bg-red-100 text-red-600">x 7</div>
        </a>
        <a href="./8">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-6xl justify-center items-center hover:scale-105 border-blue-500 bg-blue-200 text-blue-600">x 8</div>
        </a>
        <a href="./9">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-6xl justify-center items-center hover:scale-105 border-yellow-500 bg-yellow-100 text-yellow-600">x 9</div>
        </a>
        <a href="./">
          <div className="shadow-2xl border-8 w-full aspect-square flex text-xl justify-center items-center hover:scale-105 border-green-500 bg-green-100 text-green-600">Random</div>
        </a>
      </div>

      </div>

  );
}
