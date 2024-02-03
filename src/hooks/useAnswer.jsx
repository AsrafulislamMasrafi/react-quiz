import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswer(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    async function answerFetch() {
      const db = getDatabase();
      const quizRef = ref(db, "answers/" + videoId + "/questions");
      const answerQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true); // get data form firebase database

        const snapShot = await get(answerQuery);
        setLoading(false);

        if (snapShot.exists()) {
          setAnswer((preAnswer) => {
            return [...preAnswer, ...Object.values(snapShot.val())];
          });
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(true);
      }
    }

    return () => answerFetch();
  }, [videoId]);
  return {
    loading,
    error,
    answer,
  };
}
