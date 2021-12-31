function FeedbackStats({ feedbackList }) {
  const calculateAvg = () => {
    let totalRating = 0;
    feedbackList.forEach(
      (feedback) => (totalRating = totalRating + feedback.rating)
    );
    return (totalRating / feedbackList.length).toFixed(1);
  };

  return (
    <div className="feedback-stats">
      <h4>Average Rating: {isNaN(calculateAvg()) ? 0 : calculateAvg()}</h4>
      <h4>{feedbackList.length} Reviews</h4>
    </div>
  );
}

export default FeedbackStats;
