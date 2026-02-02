import { FC, useEffect, useState } from "react";
import { isRouteErrorResponse } from "react-router";
import { Route } from "../../+types/root";

const initialError = {
  message: "Oops!",
  details: "An unexpected error occurred.",
  stack: undefined,
};

const PageErrorBoundary: FC<Route.ErrorBoundaryProps> = ({ error }) => {
  const [errorState, setErrorState] = useState(initialError);

  const updateErrorState = (newError: Partial<typeof initialError>) => {
    setErrorState((prevError) => ({ ...prevError, ...newError }));
  };

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      updateErrorState({
        message: error.status === 404 ? "404" : "Error",
        details:
          error.status === 404
            ? "The requested page could not be found."
            : error.statusText || initialError.details,
      });
    } else if (import.meta.env.DEV && error && error instanceof Error) {
      updateErrorState({
        details: error.message,
        stack: error.stack as any,
      });
    }
  }, [error]);

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{errorState.message}</h1>
      <p>{errorState.details}</p>
      {errorState.stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{errorState.stack}</code>
        </pre>
      )}
    </main>
  );
};

export default PageErrorBoundary;
