import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">Page Not Found</p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Go to{" "}
        <Link to="/">
          <span className="text-blue-500 underline">Home page.</span>
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFoundPage;
