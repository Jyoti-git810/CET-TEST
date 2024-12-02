import FIB from "@/components/QuestionType/FIB";
import LongAns from "@/components/QuestionType/LongAns";
import MCQ from "@/components/QuestionType/MCQ";
import Rearrange from "@/components/QuestionType/Rearrange";
import TrueFalse from "@/components/QuestionType/TrueFalse";

// export const BUTTONTYPE: Array<{
//   id: number;
//   qNum: string;
//   name: string;
//   QNumer: number;
//   Heading: string;
// }> = [
//   {
//     id: 1,
//     qNum: "Q1",
//     name: "FIB",
//     Heading: "1. Fill In the Blanks",
//     QNumer: 10,
//   },
//   {
//     id: 2,
//     qNum: "Q2",
//     name: "True/False",
//     Heading: "Q2. True or False",
//     QNumer: 2,
//   },
//   {
//     id: 3,
//     qNum: "Q3(A)",
//     name: "MCQ1",
//     Heading: "Q3(A). True or False",
//     QNumer: 3,
//   },
//   {
//     id: 4,
//     qNum: "Q3(B)",
//     name: "MCQ2",
//     Heading: "Q3(B). Multiple Choice Questions (Select 1 answer)",
//     QNumer: 1,
//   },
//   {
//     id: 5,
//     qNum: "Q4",
//     name: "MCQ3",
//     Heading: "4. Multiple Choice Questions (Select 1 answers)",
//     QNumer: 10,
//   },
//   {
//     id: 6,
//     qNum: "Q5",
//     name: "MCQ4",
//     Heading: "5. Multiple Choice Questions (Select 2 answers)",
//     QNumer: 10,
//   },
//   {
//     id: 7,
//     qNum: "Q6",
//     name: "Rearrange",
//     Heading: "6. Match the columns",
//     QNumer: 9,
//   },
//   {
//     id: 8,
//     qNum: "Q7",
//     name: "Short Ans",
//     Heading: "Q7. Question and Answers (any 5)",
//     QNumer: 7,
//   },
//   {
//     id: 9,
//     qNum: "Q8",
//     name: "Programme",
//     Heading: "Q8. A. & B. Write Programs",
//     QNumer: 6,
//   },
// ];

export const buttonTypeComp: any = {
  FIB: {
    comp: <FIB />,
  },
  "True/False": {
    comp: <TrueFalse />,
  },
  MCQ1: {
    comp: <MCQ />,
  },
  MCQ2: {
    comp: <MCQ />,
  },
  MCQ3: {
    comp: <MCQ />,
  },
  MCQ4: {
    comp: <MCQ />,
  },
  Rearrange: {
    comp: <Rearrange />,
  },
  "Short Ans": {
    comp: <LongAns />,
  },
  Programme: {
    comp: <LongAns />,
  },
};

export const getQuestionTypeComp = (qusetionType: string) => {};
