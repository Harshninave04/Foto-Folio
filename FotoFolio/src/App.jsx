import { useRef } from "react";
// import Suggestion from "./Suggestion";
// import CardSection from "./CardSection";
function App() {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
  };

  return (
    <>
      <h1 className="text-center mt-10 text-[60px]">FotoFolio</h1>
      <div className="flex item-start justify-center mt-10 w-full items-center space-x-2">
        <input
          className="flex m-1 top h-10 w-1/4 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-white-600 focus:outline-pink-300 focus:bg-sky-100 focus:ring-grey/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="search"
          placeholder="Type something to Search..."
          ref={searchInput}
        />
        <button
          onClick={handleSearch}
          type="button"
          className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Search
        </button>
      </div>

      <div className="flex space-x-2 item-start justify-center item-center mt-5">
        <button
          onClick={() => handleSelection("Food")}
          type="button"
          className="rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Food
        </button>
        <button
          onClick={() => handleSelection("Nature")}
          type="button"
          className="rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Nature
        </button>
        <button
          onClick={() => handleSelection("Bikes")}
          type="button"
          className="rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Bikes
        </button>
        <button
          onClick={() => handleSelection("Models")}
          type="button"
          className="rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Models
        </button>
      </div>

      {/* <div className="flex grid grid-cols-5 mt-10 py-5 justify-start gap-3 m-0 px-3">
        <CardSection />
        <CardSection />
      </div> */}
    </>
  );
}

export default App;
