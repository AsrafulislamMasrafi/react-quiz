import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { Video } from "./Video";

export default function Home() {
  return (
    <Layout>
      <div className="videos">
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
      </div>
    </Layout>
  );
}
