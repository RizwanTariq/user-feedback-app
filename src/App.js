import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/About";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./context/FeedbackContext";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <>
                <FeedbackProvider>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </FeedbackProvider>
              </>
            }
          ></Route>
        </Routes>
        <AboutLink />
      </div>
    </>
  );
}

export default App;
