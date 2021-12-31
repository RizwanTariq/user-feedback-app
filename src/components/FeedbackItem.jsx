import Card from "./common/Card";

export default function FeedbackItem({ rating, text }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}
