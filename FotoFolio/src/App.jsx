import { useRef, useState } from "react";
import axios from "axios";
// import Suggestion from "./Suggestion";
// import CardSection from "./CardSection";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGE_PER_PAGE = 20;

function App() {
  // console.log("key", import.meta.env.VITE_API_KEY);
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchImages = async () => {
    try {
      const result = await axios.get(
        `${API_URL}?query=${
          searchInput.current.value
        }&page=1&per_page=${IMAGE_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
      );
      console.log("result", result.data);
      setImages(result.data.results);
      setTotalPages(result.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // console.log(searchInput.current.value);
    fetchImages();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    fetchImages();
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

      <div className="flex items-start w-lg mt-10 flex-wrap gap-4">
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              className="image"
              style={{ marginLeft: "20px ", height: "210px", objectFit: "cover" }}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
