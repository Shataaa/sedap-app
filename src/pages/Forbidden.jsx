import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
export default function NotFound() {
  return (
    <ErrorPage
      link="Back to home →"
      title="Sedap"
      title1="403"
      breadcrump1="Forbidden"
      breadcrump2="Access to this resource on the server is dennied "
    >
      <h3 className="text-2xl font-semibold mb-2">Page Not Found</h3>
      <p className="text-white/70 mb-6">
        Sorry, we couldn’t find the page you’re looking for
      </p>
      <Link to="/" className="text-blue-400 hover:underline">
        Back to home →
      </Link>
    </ErrorPage>
  );
}
