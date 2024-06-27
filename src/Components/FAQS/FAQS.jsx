import { useState } from "react";
import SlidingBox from "../SlidingBox/SlidingBox";

const FAQS = () => {
  const [showQ, setShowQ] = useState(0);

  const FAQ_list = [
    {
      id: 1,
      question: "What’s the most frequently asked question?",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      id: 2,
      question: "What is second question ?",
      answer: "and this is you second answer",
    },
    {
      id: 3,
      question: "What is third question ?",
      answer: "and this is you third answer",
    },
  ];

  return (
    <div className="w-full flex-col space-y-14">
      <h3 className="font-bold text-3xl">Heading for FAQs</h3>

      <SlidingBox FAQ_list={FAQ_list} showQ={showQ} setShowQ={setShowQ} />
    </div>
  );
};

export default FAQS;
