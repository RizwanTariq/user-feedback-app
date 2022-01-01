import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedbackList, onRemove }) {
  if (!feedbackList || feedbackList.length === 0)
    return <p>There is no feedback yet!</p>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackList.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} onRemove={onRemove} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default FeedbackList;
