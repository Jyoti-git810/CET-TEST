import React from "react";
import StatusBtn from "./StatusBtn";

interface QsubmitStatusProps {
  CategoryNumber: string;
  NumberOfQusetion: number;
}
const QsubmitStatus = ({
  CategoryNumber,
  NumberOfQusetion,
}: QsubmitStatusProps) => {
  return (
    <div className="flex justify-between items-center mb-8 box-border">
      <button className="bg-white w-16 h-8">{CategoryNumber}</button>
      <div className="flex flex-wrap w-69 border-1 justify-start px-1">
        {Array(NumberOfQusetion)
          .fill("*")
          .map((data) => (
            <StatusBtn />
          ))}
      </div>
    </div>
  );
};

export default QsubmitStatus;
