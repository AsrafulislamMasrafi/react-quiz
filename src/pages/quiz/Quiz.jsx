import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import MiniPlayer from "../../components/MiniPlayer";
import { Options } from "../../components/Options";
import { ProgressBar } from "../../components/ProgressBar";
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
  const { error, loading, questions } = useQuiz(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (questions) {
      dispatch({
        type: "questions",
        value: questions,
      });
    }
  }, [questions]);

  // TODO: WOrk on Mini player && progress bar
  // ! add function for progress bar style change and button event
  // *** progress bar button onClick change setCurrentQuestion state video 50:13

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
            {/* TODO:ClassName= wrong,correct  */}
          </div>

          <MiniPlayer />
        </>
      )}
      <ProgressBar />
    </Layout>
  );
}
