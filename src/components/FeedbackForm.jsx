import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Button from "./common/Button";
import Card from "./common/Card";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const { handleSubmit, handleUpdate, feedbackEdit } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    const feedback =
      feedbackEdit.edit && Object.keys(feedbackEdit.item).length > 0
        ? feedbackEdit.item
        : { text: "", rating: 10 };
    setText(feedback.text);
    setRating(feedback.rating);
  }, [feedbackEdit]);

  const handleChange = ({ target }) => {
    setText(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (feedbackEdit.edit) {
      handleUpdate(feedbackEdit.item.id, { text, rating });
    } else {
      handleSubmit({ id: Date.now(), text, rating });
    }
    setText("");
    setRating(10);
  };
  return (
    <Card reverse={false}>
      <form onSubmit={onSubmit}>
        <h2>How would you rate our service?</h2>

        {/* passing callback function */}
        <RatingSelect select={(rating) => setRating(rating)} />

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
