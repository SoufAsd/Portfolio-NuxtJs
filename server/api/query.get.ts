import { getQuery } from "h3";
import { queryByCollection } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const docs = await queryByCollection(query.col as string);
    return { result: docs };
  } catch (error) {
    return;
  } 
});