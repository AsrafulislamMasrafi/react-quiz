import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuiz(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function quizFetch() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true); // get data form firebase database

        const snapShot = await get(quizQuery);
        setLoading(false);

        if (snapShot.exists()) {
          setQuestions((preQuiz) => {
            return [...preQuiz, ...Object.values(snapShot.val())];
          });
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(true);
      }
    }

    return () => quizFetch();
  }, [videoId]);
  return {
    loading,
    error,
    questions,
  };
}
