import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
      <p className="mt-4 text-xl text-gray-700">Something went wrong.</p>
      <p className="mt-2 text-gray-500">
        {error?.statusText || error?.message || "Unknown error occurred"}
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
