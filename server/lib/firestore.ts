import { fireStoreDb } from "./firebase";
import { collection,getDocs } from "firebase/firestore";

export const queryByCollection = async (col: string) => {

    const colRef = collection(fireStoreDb, col);
  
    const snapshot = await getDocs(colRef);
  
    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
  
    return docs;
  };