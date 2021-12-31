import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import feedbackData from "./data/feedbackData";
import confirmAlert from "./utils/confirmAlert";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";

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
        <FeedbackForm handleSubmit={handleFeedbackAdd} />
        <FeedbackStats feedbackList={feedbackList} />
        <FeedbackList
          feedbackList={feedbackList}
          onRemove={handleFeedbackRemove}
        />
      </div>
    </>
  );
}

export default App;
