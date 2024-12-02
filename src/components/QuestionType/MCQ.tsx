"use client";

import { useDispatch, useSelector } from "react-redux";
import { getUserResponse, removeUserAns } from "@/redux/userResponseSlice";
import React, { useState } from "react";

interface MCQProps {
  questions: [{ question_text: string; $id: string }];
  optionsText: [];
}

const MCQ = ({ questions }: MCQProps) => {
  const [questionId, setQuestionId] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state);
  const handleChange = (questionId: string, e) => {
    const { value, checked } = e.target;
    const ans = value;
    const dispatchUserAction = checked
      ? getUserResponse({ ans, questionId })
      : removeUserAns({ ans });
    dispatch(dispatchUserAction);
  };

  return (
    <>
      {questions.map((question, id) => {
        return (
          <div className="text-black flex justify-start border-1 border-gray-400 items-center mb-8">
            <p className="p-4">Q{id + 1}</p>
            <div className="flex flex-col border-l border-gray-400">
              <p className="p-4">{question.question_text}</p>
              <div className="p-4">
                {question.optionsText &&
                  question.optionsText.map((data) => (
                    <div className="mt-2">
                      <input
                        type="checkbox"
                        value={data}
                        className="text-black mr-2"
                        onChange={(e) => handleChange(question.$id, e)}
                      />
                      <label>{data}</label>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MCQ;
