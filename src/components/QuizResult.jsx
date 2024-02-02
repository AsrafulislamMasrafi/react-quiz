import Layout from "./Layout";
import { Summary } from "./Summary";

export function QuizResult({ score, Img, children }) {
  return (
    <Layout>
      <Summary score={score} Img={Img} />
      <div className="analysis">
        <h1>Question Analysis</h1>
        {/* <h4>You answerd 5 out of 10 questions correctly</h4> */}
        {children}
      </div>
    </Layout>
  );
}
