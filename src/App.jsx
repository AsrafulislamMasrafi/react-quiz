import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/authContext";
import Home from "./pages/Home/index";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Nav from "./pages/nav";
import NotFound from "./pages/notFount";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/quiz/Result";

function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/result/:id" element={<Result />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
