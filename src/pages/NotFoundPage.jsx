import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section className="page">
      <h2 className="page-title">Page Not Found</h2>
      <p className="page-text">The requested route does not exist.</p>
      <Link to="/home" className="nav-link">
        Back to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
