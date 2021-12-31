import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./data/feedbackData";
import "./App.css";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbackList, setFeedbackList] = useState(feedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedbackList={feedbackList} />
      </div>
    </>
  );
}

export default App;
