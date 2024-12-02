import { MCQ } from "@/constant/question/question";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getRearrangeQuestions } from "../../appwrite/query/qusetionCategory/qusetionCategory";

interface RearrangeProps {
  questionsText: [];
  options: [];
}

const Rearrange = () => {
  const [reArrangeQuestions, setReArrangeQuestions] = useState<any>([]);
  useEffect(() => {
    getRearrangeQuestions().then((data: any) =>
      setReArrangeQuestions(data.documents)
    );
  }, []);
  console.log("reArrangeQuestions", reArrangeQuestions);
  return (
    <div>
      {reArrangeQuestions.map((questions: [{ questionText: [] }]) => (
        <Table isStriped className="text-black border-1 border-gray-400">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            {questions.questionText.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data}</TableCell>
                <TableCell>
                  <select name="" id="">
                    {questions.options.map((data, id) => (
                      <option value="">{id + 1}</option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>{questions.options[index]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </div>
  );
};

export default Rearrange;
