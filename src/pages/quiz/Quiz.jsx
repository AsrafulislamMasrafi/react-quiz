import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useMemo, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import MiniPlayer from "../../components/MiniPlayer";
import { Options } from "../../components/Options";
import { ProgressBar } from "../../components/ProgressBar";
import { useAuth } from "../../contexts/useAuth";
import useQuiz from "../../hooks/useQuiz";
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);

      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const { error, loading, questions } = useQuiz(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  // take data form firebase database on page reader and question change based on currentQuestion state
  // useMemo used because with out useMemo on save file question rerender
  const test = useMemo(() => {
    if (questions) {
      dispatch({
        type: "questions",
        value: questions,
      });
    }
  }, [questions]);

  useEffect(() => {
    test;
  }, [test]);

  // progress bar next button click event
  function nextButtonHandle() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((pre) => pre + 1);
    }
  }
  // progress bar previous button click event
  function previousButtonHandle() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((pre) => pre - 1);
    }
  }
  // progress bar style change on click event
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  async function submitHandle() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });
    navigate(`/result/${id}`, {
      state: qna,
    });
  }

  return (
    <Layout>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <div className="answers">
            {qna[currentQuestion].options.map((option, i) => (
              <Options
                control={true}
                id={option.title}
                onChange={(e) =>
                  dispatch({
                    type: "answer",
                    questionID: currentQuestion,
                    optionIndex: i,
                    value: e.target.checked,
                  })
                }
                key={i}
                checked={option.checked}
              >
                {option.title}
              </Options>
            ))}
          </div>
        </>
      )}
      <ProgressBar
        previousBtn={previousButtonHandle}
        width={`${percentage}%`}
        nextBtn={percentage === 100 ? submitHandle : nextButtonHandle}
        nextQ={percentage === 100 ? "Submit Quiz" : "Next Question"}
      />
      <MiniPlayer />
    </Layout>
  );
}
