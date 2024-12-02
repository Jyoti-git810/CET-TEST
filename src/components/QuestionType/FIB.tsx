import React, { useEffect, useState } from "react";
import { qusetions } from "@/constant/question/question";

interface FIBProps {
  questions: [{ question_text: string }];
}

const FIB = ({ questions }: FIBProps) => {
  return (
    <>
      {questions &&
        questions.map((qusetions) => (
          <div className="text-black flex justify-between border-1 border-gray-400 items-center">
            <p className="p-4">Q1</p>
            <p className="p-4 border-x border-gray-400">
              {qusetions.question_text}
            </p>
            <div className="p-4 w-45">
              <input type="text" className="border-1 border-gray-400 w-full" />
            </div>
          </div>
        ))}
    </>
  );
};

export default FIB;
