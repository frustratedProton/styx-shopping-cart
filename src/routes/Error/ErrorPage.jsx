import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default ErrorPage;
