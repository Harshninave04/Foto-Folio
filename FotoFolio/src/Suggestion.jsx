// import React from "react";
function Suggestion() {
  return (
    <>
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

export default Suggestion;
