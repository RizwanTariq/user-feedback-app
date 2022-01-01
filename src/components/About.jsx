import { Link } from "react-router-dom";
import Card from "./common/Card";
function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback about a product or service.</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Go To Home</Link>
      </div>
    </Card>
  );
}

export default About;
