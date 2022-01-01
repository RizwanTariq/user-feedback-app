import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
function AboutLink() {
  return (
    <div className="about-link">
      <Link to="/about" style={{ textDecoration: "none" }}>
        <FcAbout size={30} />
      </Link>
    </div>
  );
}

export default AboutLink;
