// import React from "react";

function CardSection() {
  return (
    <>
      <div className="flex item-start w-full items-center flex-wrap gap-4">
        {/* Repeat this block for each instance of the component */}
        <div className="flex-shrink-0 w-[300px] h-[400px] relative rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left text-white">
            <h1 className="text-lg font-semibold">Delba</h1>
            <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold">
              View Profile →
            </button>
          </div>
        </div>
        {/* Repeat this block for each instance of the component */}
      </div>
    </>
  );
}

export default CardSection;
