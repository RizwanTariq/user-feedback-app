import FeedbackItem from "./FeedbackItem";
export default function FeedbackList({ feedbackList }) {
  if (!feedbackList || feedbackList.length === 0) return <p>No feedback yet</p>;
  return (
    <div className="feedback-list">
      {feedbackList.map((item) => (
        <FeedbackItem key={item.id} rating={item.rating} text={item.text} />
      ))}
    </div>
  );
}
