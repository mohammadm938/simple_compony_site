import { useState } from "react";
import Cards from "../Cards/Cards";
import FAQS from "../FAQS/FAQS";

const Pricing = () => {
  const [priceType, setPriceType] = useState("Mounthly");

  return (
    <div className="mainFlexItems flex-col space-y-24 pt-9 pb-12 w-full ">
      <div className="mainFlexItems flex-col space-y-8">
        <h2 className="text-4xl font-extrabold">Pricing page title</h2>
        <p className="text-gray-500">
          And a subheading describing your pricing plans, too
        </p>
        <div className="text-sm bg-gray-200 p-1 rounded-md border mainFlexItems space-x-3">
          <button
            onClick={() => setPriceType("Mounthly")}
            className={`p-2 rounded-md transition-all hover:transition-all hover:shadow-lg hover:bg-white ${
              priceType === "Mounthly" ? " bg-white" : ""
            }`}
          >
            Mounthly plans
          </button>
          <button
            onClick={() => setPriceType("Yearly")}
            className={`p-2 rounded-md transition-all hover:transition-all hover:shadow-lg hover:bg-white ${
              priceType === "Yearly" ? " bg-white" : ""
            }`}
          >
            Yearly plans
          </button>
        </div>
      </div>
      <Cards priceType={priceType} />

      <FAQS />
    </div>
  );
};

export default Pricing;
