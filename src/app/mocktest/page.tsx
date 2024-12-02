"use client";
import QsubmitStatus from "@/components/QsubmitStatus";
import QuestionList from "@/components/QuestionList";
import QusetionTypeBtn from "@/components/QusetionTypeBtn";
import React, { useEffect, useState } from "react";
import { getQusetionCategory } from "../../appwrite/query/qusetionCategory/qusetionCategory";

interface qusetionCategoryType {
  CategoryNumber: string;
  categoryName: string;
  CategoryFullForm: string;
  NumberOfQusetion: number;
}
const MockTest = () => {
  const [btnType, setBtnType] = useState<string>("FIB");
  const [qusetionsCategoryType, setQusetionsCategoryType] = useState<string>(
    "1. Fill In the Blanks"
  );
  const [qusetionType, setQusetionType] = useState<Array<qusetionCategoryType>>(
    []
  );
  const [qusetions, setQuestions] = useState([]);

  const OnQuestionTypeClick = (name: any, heading: any) => {
    setBtnType(name);
    setQusetionsCategoryType(heading);
  };

  useEffect(() => {
    getQusetionCategory().then((data: any) => setQusetionType(data.documents));
  }, []);
  console.log("qusetionType", qusetionType, qusetions);

  return (
    <div className="flex justify-between flex-col">
      <div className="flex justify-between p-4">
        <div className="text-black">
          <p className="border-b-1 border-gray-300 py-2">
            Student Name: Jyoti Vishwakarama
          </p>
          <p className="border-b-1 border-gray-300 py-2">Timer: 3:15</p>
          <p className="border-b-1 border-gray-300 py-2">Pape ID: 20</p>
        </div>
        <div className="flex justify-between w-80 h-20 border-gray-400 border-y-2 border-l-2">
          {qusetionType.map((data, key) => (
            <QusetionTypeBtn
              id={key}
              CategoryNumber={data.CategoryNumber}
              categoryName={data.categoryName}
              CategoryFullForm={data.CategoryFullForm}
              OnQuestionTypeClick={OnQuestionTypeClick}
            />
          ))}
        </div>
      </div>
      <div className="flex mb-10">
        <div className="text-black w-1/4 box-border">
          <span className="ml-4">You are Viewing: {btnType}</span>
          <div className="bg-bluebg p-2">
            <h1 className="text-white text-lg">Status</h1>
            {qusetionType.map((data) => (
              <QsubmitStatus
                CategoryNumber={data.CategoryNumber}
                NumberOfQusetion={data.NumberOfQusetion}
              />
            ))}
          </div>
        </div>
        <div className="w-95  mx-4 mt-6">
          <h1 className="text-black mb-8 text-lg">{qusetionsCategoryType}</h1>
          <div className="border-1 p-10 overflow-auto max-h-668">
            <QuestionList QuestionType={btnType} qusetions={qusetions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
