import { FaPlus, FaMinus } from "react-icons/fa";
const SlidingBox = ({ FAQ_list, showQ, setShowQ }) => {
  return FAQ_list.map((FAQ) => (
    <div className="flex-col space-y-4">
      <div className="border border-gray-400 p-4 rounded-md flex justify-between ">
        <h3>{FAQ.question}</h3>
        <button className="text-2xl text-gray-800 transition-all">
          {showQ === FAQ.id ? (
            <FaMinus onClick={() => setShowQ(0)} />
          ) : (
            <FaPlus onClick={() => setShowQ(FAQ.id)} />
          )}
        </button>
      </div>
      <p
        className={`${
          showQ === FAQ.id
            ? "transition-all p-4 w-full  border-b-2 border-gray-600 shadow-lg"
            : "hidden"
        }`}
      >
        {FAQ.answer}
      </p>
    </div>
  ));
};

export default SlidingBox;
