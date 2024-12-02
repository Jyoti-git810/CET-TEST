import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableColumn,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import TrueFalse from "./QuestionType/TrueFalse";
import FIB from "./QuestionType/FIB";
import { buttonTypeComp } from "@/constant/buttonType";

import MCQ from "./QuestionType/MCQ";
import Rearrange from "./QuestionType/Rearrange";
import LongAns from "./QuestionType/LongAns";
import {
  getQuestionDoc,
  getQuestionOptionsDoc,
} from "@/appwrite/query/qusetionCategory/qusetionCategory";

interface QType {
  QuestionType: string;
  qusetions: Array<{}>;
}

const QuestionList = ({ QuestionType }: QType) => {
  const [qusetions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestionDoc().then((data: any) => {
      console.log("data", data);
      const qusetions = data.documents.filter(
        (questions: any) => questions.question_type === QuestionType
      );
      setQuestions(qusetions);
    });
  }, [QuestionType]);
  console.log("qusetions===>", qusetions);

  const mcqType = ["MCQ1", "MCQ2", "MCQ3", "MCQ4"];
  return (
    <div className="mb-6">
      {QuestionType === "FIB" ? (
        <FIB questions={qusetions} />
      ) : mcqType.includes(QuestionType) ? (
        <MCQ questions={qusetions} />
      ) : QuestionType === "Rearrange" ? (
        <Rearrange questions={qusetions} />
      ) : QuestionType === "True/False" ? (
        <TrueFalse questions={qusetions} />
      ) : (
        <LongAns questions={qusetions} />
      )}
    </div>
  );
};

export default QuestionList;
