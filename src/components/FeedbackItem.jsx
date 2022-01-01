import { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./common/Card";

export default function FeedbackItem({ item }) {
  const { onRemove } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="edit">
        <FaEdit color="#5DADE2" />
      </button>
      <button className="close" onClick={() => onRemove(item.id)}>
        <AiTwotoneDelete color="#E74C3C" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
