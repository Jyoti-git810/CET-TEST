import React from "react";

interface TrueFalseProps {
  questions: [{ question_text: string }];
}

const TrueFalse = ({ questions }: TrueFalseProps) => {
  return (
    <>
      {questions.map((questions: any, id) => (
        <div
          className="text-black flex justify-between border-1 border-gray-400 items-center"
          key={id}
        >
          <p className="p-4">Q{id + 1}</p>
          <p className="p-4 border-x border-gray-400 h-28">
            {questions.question_text}
          </p>
          <div className="p-4 w-45">
            <div className="ml-10">
              <div className="flex">
                <input type="radio" name="true_false" value="True" /> {" "}
                <label htmlFor="html">True</label>
              </div>
              <div className="flex mt-3">
                <input type="radio" name="true_false" value="False" /> {" "}
                <label htmlFor="css">False</label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrueFalse;
