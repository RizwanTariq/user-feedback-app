import { createContext, useState } from "react";
import feedbackData from "../data/feedbackData";

import confirmAlert from "../utils/confirmAlert";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
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
    <FeedbackContext.Provider
      value={{
        feedbackList,
        onRemove: handleFeedbackRemove,
        handleSubmit: handleFeedbackAdd,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
