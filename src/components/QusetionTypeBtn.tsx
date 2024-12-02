import React from "react";

interface QusetionTypeProps {
  id?: number;
  CategoryNumber: string;
  categoryName?: string;
  CategoryFullForm: string;
  OnQuestionTypeClick: (arg: any, are: any) => void;
}

const QusetionTypeBtn = ({
  id,
  CategoryNumber,
  categoryName,
  CategoryFullForm,
  OnQuestionTypeClick,
}: QusetionTypeProps) => {
  return (
    <button
      key={id}
      className=" w-32 px-4 py-2 bg-white text-black box-border border-gray-400 border-r-2"
      onClick={() => OnQuestionTypeClick(categoryName, CategoryFullForm)}
    >
      <p>{CategoryNumber}</p>
      <p>{categoryName}</p>
    </button>
  );
};

export default QusetionTypeBtn;
