// import React from "react";
function Input() {
  return (
    <>
      <div className="flex item-start justify-center mt-20 w-full items-center space-x-2">
        <input
          className="flex m-1 top h-10 w-1/4 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-white-600 focus:outline-pink-300 focus:bg-sky-100 focus:ring-grey/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Search"
        />
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Subscribe
        </button>
      </div>

      <div className="flex space-x-2 item-start justify-center item-center mt-5">
        <button
          type="button"
          className="rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Food
        </button>
        <button
          type="button"
          className="rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Nature
        </button>
        <button
          type="button"
          className="rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Bikes
        </button>
        <button
          type="button"
          className="rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Models
        </button>
      </div>
    </>
  );
}

export default Input;
