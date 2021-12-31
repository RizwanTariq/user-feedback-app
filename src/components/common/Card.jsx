import PropTypes from "prop-types";
function Card({ children, reverse }) {
  const cardClass = reverse ? "card reverse" : "card";
  return <div className={cardClass}>{children}</div>;
}

export default Card;

Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
