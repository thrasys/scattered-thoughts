import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <br />
      <p>That page cannot be found :(</p>
      <br />
      <Link to="/" style={ {textDecoration: "none"} }>Return to Homepage...</Link>
    </div>
  );
}
 
export default NotFound;