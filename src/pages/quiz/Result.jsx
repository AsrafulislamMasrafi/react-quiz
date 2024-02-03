import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import Img from "../../assets/images/success.png";
import { Options } from "../../components/Options";
import { QuizResult } from "../../components/QuizResult";
import useAnswer from "../../hooks/useAnswer";
import { AnsOfQuestion } from "./../../components/AnsOfQuestion";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location || {};

  const { error, loading, answer } = useAnswer(id);

  function calculate() {
    let score = 0;
    answer.forEach((question, i) => {
      let correctIndex = [];
      let checkedIndex = [];
      question.options.forEach((option, i2) => {
        if (option.correct) correctIndex.push(i2);
        if (state[i].options[i2].checked) {
          checkedIndex.push(i2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });
    return score;
  }

  const userScore = calculate();

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There was a problem</h1>}

      {answer && answer.length > 0 && (
        <QuizResult score={userScore} noq={answer.length} Img={Img}>
          {answer.map((question, i) => (
            <AnsOfQuestion key={i + question.title} title={question.title}>
              {question.options.map((option, i) => (
                <Options
                  id={option + i}
                  key={option + i}
                  control={false}
                  className={
                    option.correct ? "correct" : option.checked ? "wrong" : null
                  }
                >
                  {option.title}
                </Options>
              ))}
            </AnsOfQuestion>
          ))}
        </QuizResult>
      )}
    </>
  );
}
