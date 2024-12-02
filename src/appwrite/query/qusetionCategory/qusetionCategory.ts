import { databases, getCategoryDocuments } from "../../config";
import { COLLECTION_ID } from "../../../constant/collectionId";

export const getQusetionCategory = async () => {
  const data = await getCategoryDocuments();
  return data;
};

export const getQuestionDoc = () => {
  return databases.listDocuments("65eb2acae2b6d207b044", "questions");
};

export const getQuestionOptionsDoc = () => {
  return databases.listDocuments("65eb2acae2b6d207b044", "options");
};

export const getRearrangeQuestions = () => {
  const collectionId = "REARRANGE_QUESTIONS";
  return databases.listDocuments("65eb2acae2b6d207b044", collectionId);
};
