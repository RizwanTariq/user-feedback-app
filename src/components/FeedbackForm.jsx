import { useState } from "react";
import Button from "./common/Button";
import Card from "./common/Card";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleSubmit }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  const handleChange = ({ target }) => {
    setText(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ id: Date.now(), text, rating });
    setText("");
    setRating(10);
  };
  return (
    <Card reverse={false}>
      <form onSubmit={onSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect rating={rating} select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Write your review"
          />
          <Button isDisabled={text.length < 11}>Send</Button>
        </div>
        {text.length <= 11 && text.length >= 1 && (
          <div className="message">Text must be atleast 10 characters</div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
