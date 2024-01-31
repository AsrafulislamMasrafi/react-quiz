import Layout from "../../components/Layout";
import MiniPlayer from "../../components/MiniPlayer";
import { Options } from "../../components/Options";
import { ProgressBar } from "../../components/ProgressBar";

export default function Quiz() {
  return (
    <Layout>
      <h1>Pick three of your favorite Star Wars Films</h1>
      <h4>Question can have multiple answers</h4>

      <div className="answers">
        <Options id={"Options1"}>A New Hope 1</Options>
        <Options className="answer wrong" id={"Options2"}>
          A New Hope 1
        </Options>
        <Options id={"Options3"}>A New Hope 1</Options>
        <Options id={"Options4"}>A New Hope 1</Options>
        <Options id={"Options5"}>A New Hope 1</Options>
        <Options className="answer correct" id={"Options6"}>
          A New Hope 1
        </Options>
        <Options id={"Options7"}>A New Hope 1</Options>
        <Options id={"Options8"}>A New Hope 1</Options>
        <Options id={"Options9"}>A New Hope 1</Options>
        <Options id={"Options10"}>A New Hope 1</Options>
        {/* TODO:ClassName= wrong,correct  */}
      </div>

      <ProgressBar />
      <MiniPlayer />
    </Layout>
  );
}
