import { createContext, useState } from "react";
import feedbackData from "../data/feedbackData";
import confirmAlert from "../utils/confirmAlert";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //Remove Feedback
  const handleFeedbackRemove = (id) => {
    const newList = feedbackList.filter((item) => item.id !== id);
    confirmAlert(() => setFeedbackList(newList));
  };
  //Add new Feedback
  const handleFeedbackAdd = (feedBack) => {
    const newList = [feedBack, ...feedbackList];
    setFeedbackList(newList);
  };
  //Update Feedback
  const handleFeedbackUpdate = (id, feedBack) => {
    setFeedbackList(
      feedbackList.map((item) =>
        item.id === id ? { ...item, ...feedBack } : item
      )
    );
    console.log(id, feedBack);
    setFeedbackEdit({ item: {}, edit: false });
  };
  //Edit Feedback
  const handleFeedbackEdit = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackList,
        feedbackEdit,
        handleEdit: handleFeedbackEdit,
        onRemove: handleFeedbackRemove,
        handleSubmit: handleFeedbackAdd,
        handleUpdate: handleFeedbackUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
