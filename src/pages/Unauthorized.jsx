import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
export default function Unauthorized() {
  return (
    <ErrorPage
      link="Back to home →"
      title="Sedap"
      title1="401"
      breadcrump1="Unauthorized required"
      breadcrump2="Sorry, we couldn’t find the page you’re looking for"
    >
     
      <Link to="/" className="text-blue-400 hover:underline">
        Back to home →
      </Link>
    </ErrorPage>
  );
}
