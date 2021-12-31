import FeedbackItem from "./FeedbackItem";
export default function FeedbackList({ feedbackList, onRemove }) {
  if (!feedbackList || feedbackList.length === 0)
    return <p>There is no feedback yet!</p>;
  return (
    <div className="feedback-list">
      {feedbackList.map((item) => (
        <FeedbackItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
}
