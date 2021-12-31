import PropTypes from "prop-types";

export default function Header({ text, bgcolor, textColor }) {
  const headerStyles = {
    backgroundColor: bgcolor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgcolor: "rgb(23, 32, 42, 0.5)",
  textColor: "#FFFFFF",
};
Header.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
  textColor: PropTypes.string,
};
