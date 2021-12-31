import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import feedbackData from "./data/feedbackData";
import confirmAlert from "./utils/confirmAlert";
import "./App.css";

function App() {
  const [feedbackList, setFeedbackList] = useState(feedbackData);

  const handleFeedbackRemove = (id) => {
    const newList = feedbackList.filter((item) => item.id !== id);
    confirmAlert(() => setFeedbackList(newList));
  };

  return (
    <>
      <Header />
      <div className="container">
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
