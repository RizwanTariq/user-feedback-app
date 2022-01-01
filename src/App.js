import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import feedbackData from "./data/feedbackData";
import confirmAlert from "./utils/confirmAlert";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/About";
import AboutLink from "./components/AboutLink";
import "./App.css";

function App() {
  const [feedbackList, setFeedbackList] = useState(feedbackData);

  const handleFeedbackRemove = (id) => {
    const newList = feedbackList.filter((item) => item.id !== id);
    confirmAlert(() => setFeedbackList(newList));
  };
  const handleFeedbackAdd = (feedBack) => {
    const newList = [feedBack, ...feedbackList];
    setFeedbackList(newList);
  };
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
                <FeedbackForm handleSubmit={handleFeedbackAdd} />
                <FeedbackStats feedbackList={feedbackList} />
                <FeedbackList
                  feedbackList={feedbackList}
                  onRemove={handleFeedbackRemove}
                />
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
