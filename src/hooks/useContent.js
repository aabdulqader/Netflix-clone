import { useEffect, useState } from "react";
import db from "../firebase";

const useContent = (targetData) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    db.collection(targetData).onSnapshot((snapshot) =>
      setContent(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    );
  }, []);

  return { [targetData]: content };
};

export default useContent;
